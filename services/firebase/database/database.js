import 'firebase/firestore';

import { firebaseApp } from '../';

const firestore = firebaseApp.firestore();

export function addUser({
  facebookId = '',
  firebaseId = '',
  googleId = '',
}) {
  return firestore.collection('users').add({
    facebookId,
    firebaseId,
    googleId,
  });
}

export function findUserById({ id, type }) {
  return new Promise(function(resolve, reject) {
    firestore.collection('users').where(`${type}Id`, '==', id).get()
      .then(function(querySnapshot) {
        if (querySnapshot.empty) return resolve(undefined);
        const documents = [];
        querySnapshot.forEach(function(document) {
          documents.push(document.data());
        });
        return resolve(documents[0]);
      })
      .catch(reject);
  });
}

export function updateUser({ id, ...update }) {
  return firestore.collection('user').doc(id).set(update)
}
