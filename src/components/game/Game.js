import React from 'react';

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';

import Container from '../container/Container';
import GameBoardPiece from './GameBoardPiece';
import HomeSections from './home/HomeSections';
import Layout from '../layout';
import StoneSections from './stones/StoneSections';
import Text from '../text/Text';
import './Game.scss';

import { GameContextProvider } from './GameContext';

const gameSections = [
    [4, 5, 1, 5, 4],
    [2, 3, 5, 1, 5, 3, 2],
];

const Game = ({ gameId }) => {
    const [isTouchDevice, setIsTouchDevice] = React.useState(null);
    let pieceIndex = 0;

    React.useEffect(() => {
        setIsTouchDevice(typeof 'ontouchstart' in window);
    }, []);

    if (typeof isTouchDevice !== 'boolean') {
        return (
            <Layout isFullWidth>
                <Container p={6}>
                    <Text>Loading...</Text>
                </Container>
            </Layout>
        )
    }

    return (
        <GameContextProvider gameId={gameId}>
            <DndProvider backend={isTouchDevice ? TouchBackend : HTML5Backend}>
                <Layout isFullWidth>
                    <div className="game-wrapper">
                        <div className="game-border">
                            <ul className="game-text-row">
                                <li>
                                    <h2>Mensch</h2>
                                </li>
                                <li>
                                    <h2>ärgere</h2>
                                </li>
                                <li>
                                    <h2>Dich</h2>
                                </li>
                                <li>
                                    <h2>nicht!</h2>
                                </li>
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
                    </div>
                </Layout>
            </DndProvider>
        </GameContextProvider>
    );
};

export default Game;