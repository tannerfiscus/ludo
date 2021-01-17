import React from 'react';

import { navigate } from 'gatsby';
import { v4 as uuidv4 } from 'uuid';

import Button from '../button/Button';
import Container from '../container/Container';
import FirebaseContext from '../firebase/FirebaseContext';
import Input from '../input/Input';
import Layout from '../layout';
import Text from '../text/Text';

import { defaultGameState } from '../../constants/game';

const Home = () => {
    const [gameId, setGameId] = React.useState('');
    const firebase = React.useContext(FirebaseContext);

    const onCreateNewGame = () => {
        const gameId = uuidv4();
        firebase.game(gameId).set(defaultGameState,
            (error) => {
                if (error) {
                    alert('Failed to create new game');
                    console.error(error);
                } else {
                    navigate(`/play/${gameId}`);
                }
            });
    };

    const onKeyUp = (e) => {
        setGameId(e.currentTarget.value);
    }

    const onJoinSubmit = (e) => {
        e.preventDefault();
        navigate(`/play/${gameId}`);
    };

    return (
        <Layout>
            <div>
                <h1><Text>Let's play</Text></h1>
                <Container pt={3} pb={5}>
                    <Button fullWidth onClick={onCreateNewGame}>
                        <Text>Create a new game</Text>
                    </Button>
                </Container>
                <form onSubmit={onJoinSubmit}>
                    <Container p={3}>
                        <h4><Text>Join existing game</Text></h4>
                        <Container pt={2} pb={3}>
                            <Input onChange={onKeyUp} label="Game id" />
                        </Container>
                        <Button fullWidth type="submit">
                            <Text>Join</Text>
                        </Button>
                    </Container>
                </form>
            </div>
        </Layout>
    );
};

export default Home;
