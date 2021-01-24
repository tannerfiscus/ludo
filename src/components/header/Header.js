import React from "react"

import { Link } from 'gatsby';

import FirebaseContext from '../firebase/FirebaseContext';
import Text from '../text/Text';
import LanguageControl from '../language/LanguageControl';
import UserContext from '../user/UserContext';

import './Header.scss';

const Header = () => {
    const { userName } = React.useContext(UserContext);
    const firebase = React.useContext(FirebaseContext);
    
    return (
        <header className="header">
            <Link to="/play">
                <div className="header-logo">
                    <div />
                    <div />
                    <div />
                    <div />
                </div>
            </Link>

            <span className="header-name">
                <Text>Hello</Text>
                {
                    userName ? `, ${userName}` : null
                }
            </span>
            <LanguageControl />
            <button className="header-logout-button" onClick={() => firebase.doSignOut()}>
                <Text>Log out</Text>
            </button>
        </header>
    );
}

export default Header;
