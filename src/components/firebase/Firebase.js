import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
 
const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};
 
class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.db = app.database();
  }

  // doCreateUserWithEmailAndPassword = (email, password) => {
  //   return this.auth.createUserWithEmailAndPassword(email, password);
  // }

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
 
  doPasswordUpdate = password => {
    return this.auth.currentUser.updatePassword(password);
  }

  doSignInWithEmailAndPassword = (email, password) => {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  doSignOut = () => this.auth.signOut();

  // *** User API ***

  getUserName = (userId) => {
    return this.db.ref(`users/${userId}`);
  }

  // plan = (userId, planStartDate) => {
  //   console.log('planStartDate', planStartDate);
  //   return this.db.ref(`plans/${userId}/${planStartDate}`)
  // };

  // plans = () => this.db.ref('plans');
}
 
export default Firebase;
