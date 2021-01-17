import React from 'react';

import { navigate } from 'gatsby';

import Button from '../components/button/Button';
import Container from '../components/container/Container';
import Input from '../components/input/Input';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Text from '../components/text/Text';

import FirebaseContext from '../components/firebase/FirebaseContext';

const IndexPage = () => {
	const firebaseContext = React.useContext(FirebaseContext);
	const [isLoggedIn, setIsLoggedIn] = React.useState(null);
	const [formState, setFormState] = React.useState({ email: '', password: '' });
	const { email, password } = formState;

	const onChange = e => {
		setFormState({
			...formState,
			[e.currentTarget.name]: e.currentTarget.value,
		});
	}

	const onSubmit = e => {
		e.preventDefault();
        firebaseContext
            .doSignInWithEmailAndPassword(email, password)
            .then(() => {})
            .catch(error => {
				if (error.message) {
					alert(error.message);
				} else {
					alert('Something went wrong.');
				}
			});
    };

	React.useEffect(() => {
		const listener = firebaseContext.auth.onAuthStateChanged(authUser => {
			if (authUser) {
				setIsLoggedIn(true);
			} else {
				setIsLoggedIn(false);
			}
		});
		return () => listener();
	}, []);

	React.useEffect(() => {
		if (isLoggedIn) {
			navigate('/play');
		}
	}, [isLoggedIn]);

	return (
		<Layout showHeader={false}>
			<SEO title="Home" />
			<div>
				<h1>
					<Text>Log in</Text>
				</h1>
				<Container mt={3}>
					<form onSubmit={onSubmit}>
						<Container p={4}>
							<Input
								name="email"
								onChange={onChange}
								type="text"
								label="Email address"
								value={email}
							/>
							<Container pt={3}>
								<Input
									name="password"
									onChange={onChange}
									type="password"
									label="Password"
									value={password}
								/>
							</Container>
							<Container pt={3}>
								<Button fullWidth type="submit">
									<Text>Log in</Text>
								</Button>
							</Container>
						</Container>
					</form>
				</Container>
			</div>
		</Layout>
	);
};

export default IndexPage
