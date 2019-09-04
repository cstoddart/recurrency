import * as Facebook from 'expo-facebook';

import { getUserById, addUser } from '../firebase/database';

export async function loginWithFacebook() {
  try {
    const facebookAppId = '2550551785171759';
    const { type, token } = await Facebook.logInWithReadPermissionsAsync(facebookAppId, {
      permissions: ['public_profile'],
    });
    if (type === 'success') {
      const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
      const facebookUser = await response.json();
      console.log('FACEBOOK USER', facebookUser);
      const existingUser = await getUserById({ id: facebookUser.id, type: 'facebook' });
      if (existingUser) {
        return existingUser;
      }
      return addUser({
        facebookId: facebookUser.id,
        name: facebookUser.name,
      });
    } 
    return undefined;
  } catch ({ message }) {
    alert('Login Error:' + message);
    return undefined;
  }
}
