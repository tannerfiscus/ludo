import React from 'react';
import classnames from 'classnames';

import GameContext from '../GameContext';
import Stone from './Stone';
import './StoneSection.scss';

const StoneSection = ({ color }) => {
    const { boardState: { resting } } = React.useContext(GameContext);
    const sectionStones = resting[color];

    return (
        <ul className={`stones stones--${color}`}>
            {
                sectionStones.map((stone, i) => (
                    <li
                        className={classnames("stone-spot", {
                            ['stone-spot--filled']: !!stone,
                        })}
                        key={i}
                    >
                        { stone ? (
                            <Stone
                                currentPlacement="resting"
                                currentPlacementIndex={i}
                                id={stone}
                            />
                        ) : null}
                    </li>
                ))
            }
        </ul>
    );
};

export default StoneSection;
