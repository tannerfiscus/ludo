import React from 'react';

const UserContext = React.createContext({
    userName: '',
});

export const UserContextProvider = ({ children }) => {
    const [userName, setUserName] = React.useState('');

    return (
        <UserContext.Provider value={{
            setUserName,
            userName,
        }}>
            { children }
        </UserContext.Provider>
    );
};

export default UserContext;
