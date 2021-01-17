import React from 'react';

import FirebaseContext from '../firebase/FirebaseContext';
import Text from '../text/Text';

import { defaultGameState } from '../../constants/game';

const GameContext = React.createContext(defaultGameState);

const getStoneColorFromId = id => id.slice(0, id.indexOf('-'));

export const GameContextProvider = ({ children, gameId }) => {
    const firebase = React.useContext(FirebaseContext);
    const [boardState, setBoardState] = React.useState(defaultGameState);
    const [isLoading, setIsLoading] = React.useState(false);
    const [isValidGame, setIsValidGame] = React.useState(true);

    React.useEffect(() => {
        firebase.game(gameId).on('value', snapshot => {
            const gameState = snapshot.val();
            if (isLoading) {
                setIsLoading(false);
            }
            if (!gameState) {
                setIsValidGame(false);
            } else {
                setBoardState(gameState);
            }
        });
    }, [gameId]);

    const setStonePlacement = ({
        currentPlacement,
        currentPlacementIndex,
        id,
        newPlacement,
        newPlacementIndex,
        returningStoneId,
    }) => {
        const stoneColor = getStoneColorFromId(id);

        const updateExistingPlacementMappingFunction = (value, index) => {
            if (index === currentPlacementIndex) {
                return '';
            } else if (index === newPlacementIndex) {
                return id;
            }

            return value;
        };

        const newBoardState = (currentPlacement === newPlacement) ? 
        {
            ...boardState,
            [newPlacement]: {
                ...boardState[newPlacement],
                ...(newPlacement === 'board' ? {
                    stones: boardState.board.stones.map(updateExistingPlacementMappingFunction),
                }: {
                    [stoneColor]: boardState[newPlacement][stoneColor].map(updateExistingPlacementMappingFunction),
                })
            }
        } :
        // Update multiple values
        {
            ...boardState,
            [currentPlacement]: {
                ...boardState[currentPlacement],
                ...(currentPlacement === 'board' ? {
                    stones: [
                        ...boardState.board.stones.slice(0, currentPlacementIndex),
                        '',
                        ...boardState.board.stones.slice(currentPlacementIndex + 1),
                    ]
                }: {
                    [stoneColor]: [
                        ...boardState[currentPlacement][stoneColor].slice(0, currentPlacementIndex),
                        '',
                        ...boardState[currentPlacement][stoneColor].slice(currentPlacementIndex + 1),
                    ]
                })
            },
            [newPlacement]: {
                ...boardState[newPlacement],
                ...(newPlacement === 'board' ? {
                    stones: [
                        ...boardState.board.stones.slice(0, newPlacementIndex),
                        id,
                        ...boardState.board.stones.slice(newPlacementIndex + 1),
                    ]
                }: {
                    [stoneColor]: [
                        ...boardState[newPlacement][stoneColor].slice(0, newPlacementIndex),
                        id,
                        ...boardState[newPlacement][stoneColor].slice(newPlacementIndex + 1),
                    ]
                })
            }
        };
        
        if (returningStoneId) {
            const returningStoneColor = getStoneColorFromId(returningStoneId);
            const availableReturnIndex = newBoardState.resting[returningStoneColor].findIndex(r => !r);
            newBoardState.resting[returningStoneColor][availableReturnIndex] = returningStoneId;
        }

        firebase.game(gameId).set(newBoardState, (error) => {
            if (error) {
                alert('An error occurred saving the game state');
            }
        });
    };

    return (
        <GameContext.Provider value={{
            boardState,
            setStonePlacement,
        }}>
            { isLoading ? null : (
                isValidGame ? children : <h1><Text>Game not found</Text></h1>
             ) }
        </GameContext.Provider>
    );
};

export default GameContext;