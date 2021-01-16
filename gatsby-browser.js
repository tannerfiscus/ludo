const React = require('react');

const Firebase = require('./src/components/firebase/Firebase').default;
const FirebaseContext = require('./src/components/firebase/FirebaseContext').default;
const TextContextProvider = require('./src/components/text/TextContext').TextContextProvider;
const UserContextProvider = require('./src/components/user/UserContext').UserContextProvider;

exports.wrapRootElement = ({ element }) => {
    return (
        <FirebaseContext.Provider value={new Firebase()}>
            <TextContextProvider>
                <UserContextProvider>
                    {element}
                </UserContextProvider>
            </TextContextProvider>
        </FirebaseContext.Provider>
    );
};