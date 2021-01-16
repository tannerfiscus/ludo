import React from 'react';

const TextContext = React.createContext({
    language: 'en',
});

export const TextContextProvider = ({ children }) => {
    const [language, setLanguage] = React.useState('de');

    return (
        <TextContext.Provider value={{
            language,
            setLanguage,
        }}>
            { children }
        </TextContext.Provider>
    );
};

export default TextContext;