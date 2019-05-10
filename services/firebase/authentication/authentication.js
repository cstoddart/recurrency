import 'firebase/auth';

import { firebaseApp } from '../'
import { findUserById } from '../database';

const firebaseAuth = firebaseApp.auth();

export function loginWithFirebase({ email = 'test@test.com', password = 'testtest', redirect }) {
  return new Promise((resolve, reject) => {
    firebaseAuth.onAuthStateChanged(async function (firebaseUser) {
      if (firebaseUser) {
        const user = await findUserById({ id: firebaseUser.uid, type: 'firebase' });
        resolve(user);
        redirect();
      }
    });
    firebaseAuth.signInWithEmailAndPassword(email, password)
      .catch(reject);
  });
}

export function createUser({ email, password }) {
  firebaseAuth.createUserWithEmailAndPassword(email, password).catch(console.log);
}
