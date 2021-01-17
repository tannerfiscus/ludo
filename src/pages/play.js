import React from 'react';

import { Router } from '@reach/router';

import AuthWrapper from '../components/auth/AuthWrapper';
import Home from '../components/home/Home';
import Game from '../components/game/Game';
import SEO from '../components/seo';

const Play = ({ location }) => (
    <>
        <SEO title="Play" />
        <AuthWrapper location={location}>
            <Router basepath="/play">
                <Game path="/:gameId" />
                <Home path="/" />
            </Router>
        </AuthWrapper>
    </>
);

export default Play;