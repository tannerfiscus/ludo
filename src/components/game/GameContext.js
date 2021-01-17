import React from 'react';

const defaultState = {
    board: {
        stones: new Array(40).fill(null),
    },
    home: {
        black: new Array(4).fill(null),
        yellow: new Array(4).fill(null),
        red: new Array(4).fill(null),
        green: new Array(4).fill(null),
    },
    resting: {
        black: ['black-0','black-1','black-2','black-3'],
        yellow: ['yellow-0','yellow-1','yellow-2','yellow-3'],
        red: ['red-0','red-1','red-2','red-3'],
        green: ['green-0','green-1','green-2','green-3'],
    },
};

const GameContext = React.createContext(defaultState);

const getStoneColorFromId = id => id.slice(0, id.indexOf('-'));

export const GameContextProvider = ({ children }) => {
    const [boardState, setBoardState] = React.useState(defaultState);

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
                return null;
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
                        null,
                        ...boardState.board.stones.slice(currentPlacementIndex + 1),
                    ]
                }: {
                    [stoneColor]: [
                        ...boardState[currentPlacement][stoneColor].slice(0, currentPlacementIndex),
                        null,
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
        
        setBoardState(newBoardState);
    };

    return (
        <GameContext.Provider value={{
            boardState,
            setStonePlacement,
        }}>
            { children }
        </GameContext.Provider>
    );
};

export default GameContext;