import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDlry4hrzeVNCXwkZkBq91_WcgbV_IREP0",
  authDomain: "recurrency-60f36.firebaseapp.com",
  databaseURL: "https://recurrency-60f36.firebaseio.com",
  projectId: "recurrency-60f36",
  storageBucket: "recurrency-60f36.appspot.com",
};

const firebaseApp = firebase.initializeApp(config);

export function login() {
  firebaseApp.auth().onAuthStateChanged(function (user) {
    if (user) {
      console.log('LOGGED IN...');
    }
  });
  return firebaseApp.auth().signInWithEmailAndPassword('test@test.com', 'testtest')
    .catch(console.error);
}
