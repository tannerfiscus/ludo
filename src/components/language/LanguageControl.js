import React from 'react';
import TextContext from '../text/TextContext';

import './LanguageControl.scss';

const LanguageControl = () => {
    const { language, setLanguage } = React.useContext(TextContext);

    return (
        <div className={`language-controls language--${language}`}>
            <button onClick={() => setLanguage('en')}>🇬🇧</button>
            <button onClick={() => setLanguage('de')}>🇩🇪</button>
        </div>
    );
};

export default LanguageControl;
