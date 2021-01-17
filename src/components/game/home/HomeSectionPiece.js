import React from 'react';
import classnames from 'classnames';

import { useDrop } from 'react-dnd';

import GameContext from '../GameContext';

import { ItemTypes } from '../../../constants/game';

const HomeSectionPiece = ({ children, color, currentStoneId, index }) => {
    const { setStonePlacement } = React.useContext(GameContext);

    const [{ isOver }, drop] = useDrop({
        accept: ItemTypes[color],
        collect: monitor => ({
            isOver: !!monitor.isOver(),
        }),
        drop: (_, monitor) => {
            const item = monitor.getItem();
            setStonePlacement({
                ...item,
                newPlacement: 'home',
                newPlacementIndex: index,
                returningStoneId: currentStoneId,
            });
        }
    });

    return (
        <li
            className={classnames("home-spot", {
                'home-spot--filled': !!currentStoneId,
                'home-spot--hovered': isOver,
            })}
            ref={drop}
        >
            { children }
        </li>
    );
};

export default HomeSectionPiece;
