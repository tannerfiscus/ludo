import React from 'react';
import classnames from 'classnames';

import { useDrag } from 'react-dnd';

import { ItemTypes } from '../../../constants/game';
import './Stone.scss';

const Stone = ({ currentPlacement, currentPlacementIndex, id }) => {
    // id's are like black-0, red-3, etc
    const stoneColor = id.slice(0, id.indexOf('-'));

    const [{ isDragging }, drag] = useDrag({
        item: {
            currentPlacement,
            currentPlacementIndex,
            id,
            type: ItemTypes[stoneColor]
        },
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),
        }),
    });

    return (
        <div
            className={classnames(
                'stone',
                `stone--${stoneColor}`,
                {
                    'stone--dragging': isDragging,
                }
            )}
            ref={drag}
        />
    )
};

export default Stone;