import React from 'react';
import classnames from 'classnames';

import { useDrop } from 'react-dnd';

import GameContext from './GameContext';
import Stone from './stones/Stone';

import { AllItemTypes } from '../../constants/game';
import './GameBoardPiece.scss';

const GameBoardPiece = ({ index }) => {
    const {
        boardState: { board },
        setStonePlacement
    } = React.useContext(GameContext);

    const currentStone = board.stones[index];

    const [{ isOver }, drop] = useDrop({
        accept: AllItemTypes,
        collect: monitor => ({
            isOver: !!monitor.isOver(),
        }),
        drop: (_, monitor) => {
            const item = monitor.getItem();
            setStonePlacement({
                ...item,
                newPlacement: 'board',
                newPlacementIndex: index,
                returningStoneId: currentStone,
            });
        }
    });

    return (
        <div
            className={classnames("game-piece", {
                'game-piece--occupied': currentStone,
                'game-piece--hovered': isOver,
            })}
            ref={drop}
        >
            { currentStone && (
                <Stone
                    currentPlacement="board"
                    currentPlacementIndex={index}
                    id={board.stones[index]}
                />
            ) }
        </div>
    );
};

export default GameBoardPiece;
