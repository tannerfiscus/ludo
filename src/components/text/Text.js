import React from 'react';

import TextContext from './TextContext';

import { getString } from '../../constants/strings';

const Text = ({ children }) => {
    const { language } = React.useContext(TextContext);

    const string = children.toString();
    
    return getString(string, language);
};

export default Text;
