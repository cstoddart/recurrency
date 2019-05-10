import { GoogleSignIn } from 'expo';

export async function loginWithGoogle({ redirect }) {
  try {
    await GoogleSignIn.askForPlayServicesAsync();
    const { type, user } = await GoogleSignIn.signInAsync();
    if (type === 'success') {
      console.log('USER', user);
      redirect();
      return user;
    }
  } catch ({ message }) {
    alert('Login Error:' + message);
    return undefined;
  }
}
