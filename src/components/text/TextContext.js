import React from 'react';

const TextContext = React.createContext({
    language: 'de',
});

export const TextContextProvider = ({ children }) => {
    const [language, _setLanguage] = React.useState('de');

    React.useEffect(() => {
        if (window.localStorage) {
            const storedLanguage = window.localStorage.getItem('madn-language');
            if (storedLanguage) {
                _setLanguage(storedLanguage);
            };
        }
    }, []);

    const setLanguage = (lang) => {
        _setLanguage(lang);

        if (window.localStorage) {
            window.localStorage.setItem('madn-language', lang);
        }
    }

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