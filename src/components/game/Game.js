import React from 'react';

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import GameBoardPiece from './GameBoardPiece';
import GameOrientationWarning from './GameOrientationWarning';
import HomeSections from './home/HomeSections';
import Layout from '../layout';
import StoneSections from './stones/StoneSections';
import TextContext from '../text/TextContext';
import './Game.scss';

import { GameContextProvider } from './GameContext';
import { getString } from '../../constants/strings';

const gameSections = [
    [4, 5, 1, 5, 4],
    [2, 3, 5, 1, 5, 3, 2],
];

const Game = ({ gameId }) => {
    const { language } = React.useContext(TextContext);
    let pieceIndex = 0;

    React.useEffect(() => {
        const calculateInnerHeight = () => {
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        };
        calculateInnerHeight();

        window.addEventListener('resize', calculateInnerHeight);
        return () => window.removeEventListener('resize', calculateInnerHeight);
    }, []);

    return (
        <GameContextProvider gameId={gameId}>
            <DndProvider backend={HTML5Backend}>
                <Layout isFullWidth>
                    <div className="game-wrapper">
                        <div className="game-border">
                            <ul className="game-text-row">
                                {
                                    getString('Do not get angry!', language).split(' ').map(string => (
                                        <li key={string}>
                                            <h2>{string}</h2>
                                        </li>
                                    ))
                                }
                            </ul>
                            <div className="game-pieces">
                                {
                                    gameSections.map((gameSection, gameSectionIndex) => (
                                        <ul className="game-sections" key={gameSection.length * gameSectionIndex}>
                                            {
                                                gameSection.map((pieceCount, i) => (
                                                    <li className="game-section" key={i * pieceCount}>
                                                        {
                                                            new Array(pieceCount).fill().map((_, index) => {
                                                                pieceIndex += 1;
                                                                return (
                                                                    <GameBoardPiece key={index} index={pieceIndex} />
                                                                );
                                                            })
                                                        }
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    ))
                                }
                            </div>
                            <StoneSections />
                            <HomeSections />
                        </div>
                        <GameOrientationWarning />
                    </div>
                </Layout>
            </DndProvider>
        </GameContextProvider>
    );
};

export default Game;