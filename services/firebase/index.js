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

export function loginWithGoogle() {
  firebase.auth().getRedirectResult().then(function (result) {
    if (result.credential) {
      const token = result.credential.accessToken;
      console.log('TOKEN', token);
    }
    const user = result.user;
    console.log('USER', user);
  });

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('profile');
  provider.addScope('email');
  return firebase.auth().signInWithRedirect(provider);
}
