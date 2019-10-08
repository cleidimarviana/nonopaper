import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_DATABASE_URL,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    apiKey: "AIzaSyA-ZRcRuUWYCxXZDPVZEqS3M61ahnPm7EA",
    authDomain: "nonopaper-10.firebaseapp.com",
    databaseURL: "https://nonopaper-10.firebaseio.com",
    projectId: "nonopaper-10",
    storageBucket: "",
    messagingSenderId: "468015551664",
    appId: "1:468015551664:web:3c72a897aa593aceb3d775",
    measurementId: "G-1GN0CERH64"
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
    this.db = app.database();
  }

  // *** Auth API ***

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);

  // *** User API ***

  user = uid => this.db.ref(`users/${uid}`);

  users = () => this.db.ref('users');
}

export default Firebase;
