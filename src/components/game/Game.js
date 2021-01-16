import React from 'react';

import Layout from '../layout';
import './Game.scss';

const gameSections = [
    [4, 5, 1, 5, 4],
    [2, 3, 5, 1, 5, 3, 2],
];


const Game = ({ gameId }) => (
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
                        gameSections.map(gameSection => (
                            <ul className="game-sections" key={gameSection.length}>
                                {
                                    gameSection.map((pieceCount, i) => (
                                        <li className="game-section" key={i * pieceCount}>
                                            {
                                                new Array(pieceCount).fill().map((_, index) => (
                                                    <div className="game-piece" />
                                                ))
                                            }
                                        </li>
                                    ))
                                }
                            </ul>
                        ))
                    }
                </div>
            </div>
        </div>
        {/* <br/><br/><br/>
    <p>game play: {gameId}</p> */}
    </Layout>
);

export default Game;