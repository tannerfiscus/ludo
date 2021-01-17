import React from 'react';

import Container from '../container/Container';
import image from '../../images/orientation-change.png';
import Text from '../text/Text';

import './GameOrientationWarning.scss';

const GameOrientationWarning = () => (
    <div className="orientation-warning">
        <Container p={3}>
            <img src={image} alt="Change orientation of your device for a better experience" />
            <Container pt={3} pb={2}>
                <h3><Text>Rotate your device</Text></h3>
            </Container>
            <p><Text>Turn your device to landscape mode to see the game</Text>.</p>
        </Container>
    </div>
);

export default GameOrientationWarning;
