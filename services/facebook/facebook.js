import { Facebook } from 'expo';

import { findUserById, addUser } from '../firebase/database';

export async function loginWithFacebook() {
  try {
    const facebookAppId = '2550551785171759';
    const {
      type,
      token,
      expires,
      permissions,
      declinedPermissions,
    } = await Facebook.logInWithReadPermissionsAsync(facebookAppId, {
      permissions: ['public_profile'],
    });
    if (type === 'success') {
      const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
      const facebookUser = await response.json();
      const existingUser = await findUserById({ id: facebookUser.id, type: 'facebook' });
      if (existingUser) {
        return existingUser;
      }
      return addUser({ facebookId: facebookUser.id });
    } 
    return undefined;
  } catch ({ message }) {
    alert('Login Error:' + message);
    return undefined;
  }
}
