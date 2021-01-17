import React from 'react';

import { navigate } from 'gatsby';

import FirebaseContext from '../firebase/FirebaseContext';
import UserContext from '../user/UserContext';

const AuthWrapper = ({ children }) => {
    const firebaseContext = React.useContext(FirebaseContext);
    const { setUserName, userName } = React.useContext(UserContext);
	const [isLoggedIn, setIsLoggedIn] = React.useState(null);

	React.useEffect(() => {
		const listener = firebaseContext.auth.onAuthStateChanged(authUser => {
			if (authUser) {
                setIsLoggedIn(true);
                
                if (!userName) {
                    firebaseContext.getUserName(authUser.uid).on('value', snapshot => {
                        const name = snapshot.val();
                        if (name) {
                            setUserName(name);
                        }
                    });
                }
			} else {
				setIsLoggedIn(false);
			}
		});
		return () => listener();
	}, []);

	React.useEffect(() => {
		if (isLoggedIn === false) {
			navigate('/');
		}
    }, [isLoggedIn]);
    
    if (isLoggedIn) {
        return children;
    }

    return null;
};

export default AuthWrapper;
