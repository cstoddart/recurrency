import 'firebase/database';

import { firebaseApp } from '../';

const firestore = firebaseApp.firestore();

export function setUser(user) {
  firestore.collection('users').add
}
