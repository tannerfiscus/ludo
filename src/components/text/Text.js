import React from 'react';

import TextContext from './TextContext';

const englishToGermanMap = {
    'Hello': 'Hallo',
    'Log in': 'Einloggen',
    'Password': 'Passwort',
    'Email address': 'E-Mail-Addresse',
    'Log out': 'Ausloggen',
    'Let\'s play': 'Lass uns spielen', 
};

const Text = ({ children }) => {
    const { language } = React.useContext(TextContext);

    const string = children.toString();

    if (language === 'de') {
        return englishToGermanMap[string] || string;
    }
    
    return string;
};

export default Text;
