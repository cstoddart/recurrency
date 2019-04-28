import firebase from 'firebase/app';

const config = {
  apiKey: "AIzaSyDlry4hrzeVNCXwkZkBq91_WcgbV_IREP0",
  authDomain: "recurrency-60f36.firebaseapp.com",
  databaseURL: "https://recurrency-60f36.firebaseio.com",
  projectId: "recurrency-60f36",
  storageBucket: "recurrency-60f36.appspot.com",
};

export const firebaseApp = firebase.initializeApp(config);
