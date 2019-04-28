import firebase from 'firebase/app';
import 'firebase/auth';

import { firebaseApp } from '../'

const firebaseAuth = firebaseApp.auth();

export function login() {
  firebaseAuth.onAuthStateChanged(function (user) {
    if (user) {
      console.log('LOGGED IN...');
    }
  });
  return firebaseAuth.signInWithEmailAndPassword('test@test.com', 'testtest')
    .catch(console.error);
}

export function loginWithGoogle() {
  firebaseAuth.getRedirectResult().then(function (result) {
    if (result.credential) {
      const token = result.credential.accessToken;
      console.log('TOKEN', token);
    }
    const user = result.user;
    console.log('USER', user);
  });

  const provider = new firebaseAuth.GoogleAuthProvider();
  provider.addScope('profile');
  provider.addScope('email');
  return firebase.auth().signInWithRedirect(provider);
}
