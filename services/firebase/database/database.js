import * as firebase from 'firebase/app';
import 'firebase/firestore';

import { firebaseApp } from '../';

const firestore = firebaseApp.firestore();

export async function addUser({
  facebookId = '',
  firebaseId = '',
  googleId = '',
  name = '',
}) {
  const document = await firestore.collection('users').add({
    facebookId,
    firebaseId,
    googleId,
    name,
  });
  return { id: document.id };
}

export function getUser(id) {
  return new Promise(function(resolve, reject) {
    firestore.collection('users').doc(id).get()
      .then(function(document) {
        if (document.exists) {
          resolve(document.data());
        } else {
          console.log('ERROR');
          reject();
        }
      })
      .catch(console.log);
  })
}

export function getUserById({ id, type }) {
  return new Promise(function(resolve, reject) {
    firestore.collection('users').where(`${type}Id`, '==', id).get()
      .then(function(querySnapshot) {
        if (querySnapshot.empty) return resolve(undefined);
        const documents = [];
        querySnapshot.forEach(function(document) {
          documents.push({ id: document.id, ...document.data() });
        });
        return resolve(documents[0]);
      })
      .catch((error) => {
        console.log('DB ERROR', error);
        return reject(error);
      });
  });
}

export function updateUser({ id, ...update }) {
  return firestore.collection('users').doc(id).update(update)
}
