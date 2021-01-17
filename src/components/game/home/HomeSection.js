import React from 'react';

import GameContext from '../GameContext';
import HomeSectionPiece from './HomeSectionPiece';
import Stone from '../stones/Stone';
import './HomeSection.scss';

const HomeSection = ({ color }) => {
    const { boardState: { home } } = React.useContext(GameContext);
    const sectionStones = home[color];

    console.log('sectionStones', sectionStones);

    return (
        <ul className={`home-section home-section--${color}`}>
            {
                sectionStones.map((stone, i) => (
                    <HomeSectionPiece
                        color={color}
                        currentStoneId={stone}
                        index={i}
                        key={i}
                    >
                        { stone ? (
                            <Stone
                                currentPlacement="home"
                                currentPlacementIndex={i}
                                id={stone}
                            />
                        ) : null}
                    </HomeSectionPiece>
                ))
            }
        </ul>
    );
};

export default HomeSection;
