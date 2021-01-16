import React from "react"

import FirebaseContext from '../firebase/FirebaseContext';
import Text from '../text/Text';
import UserContext from '../user/UserContext';

import './Header.scss';

const Header = () => {
    const { userName } = React.useContext(UserContext);
    const firebase = React.useContext(FirebaseContext);
    
    return (
        <header className="header">
            <div className="header-logo">
                <div />
                <div />
                <div />
                <div />
            </div>
            {
                userName ? (
                    <span className="header-name">
                        <Text>Hello</Text>{', '}
                        {userName}
                    </span>
                ) : null
            }
            <button className="header-logout-button" onClick={() => firebase.doSignOut()}>
                <Text>Log out</Text>
            </button>
        </header>
    );
}

export default Header;
