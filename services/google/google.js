import * as Google from 'expo-google-app-auth';
import axios from 'axios';
import { AsyncStorage } from 'react-native';
import { getUserById, addUser } from '../firebase/database';

export async function loginWithGoogle() {
  try {
    const { type, accessToken, user: googleUser } = await Google.logInAsync({
      iosClientId: '397641251739-q9ieevsgu7nvie8detgc6785l7uk9e8p.apps.googleusercontent.com',
      androidClientId: '397641251739-3beco4cldcoqsu2nnmv1o5rhhta6jscd.apps.googleusercontent.com',
      iosStandaloneAppClientId: '397641251739-2aa2ifejln4800f3e28j02fgu1nkak4u.apps.googleusercontent.com',
      androidStandaloneAppClientId: '397641251739-1h973sj0g7cmoi5pb2u3svohlrb2nnf8.apps.googleusercontent.com',
    });
    const existingUser = await getUserById({ id: googleUser.id, type: 'google' });
    if (existingUser) {
      console.log('EXISTING USER...');
      return existingUser;
    }
    return addUser({
      googleId: googleUser.id,
      name: googleUser.name,
    });
  } catch ({ message }) {
    alert('Login Error:' + message);
    return undefined;
  }
}
