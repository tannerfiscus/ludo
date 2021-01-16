import React from 'react';
 
const FirebaseContext = React.createContext({
    auth: {},
    db: {},
    doCreateUserWithEmailAndPassword: () => {},
    doPasswordReset: () => {},
    doPasswordUpdate: () => {},
    doSignInWithEmailAndPassword: () => {},
    doSignOut: () => {},
    getUserName: () => {},
});
 
export default FirebaseContext;
