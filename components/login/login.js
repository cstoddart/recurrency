import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Facebook, Google } from 'expo';

import {
  StyledLogin,
  LoginButton,
} from './loginStyles';

const clientId = '397641251739-k6qq9clpfoo5qu7aohsg0882pgo4hr8p.apps.googleusercontent.com';

export class Login extends Component {
  handlePress = () => {
    this.props.context.updateContext({ user: { loggedIn: true } });
    this.props.history.push('/');
  }

  google = async () => {
    const { type, accessToken, user } = await Google.logInAsync({ clientId });

    if (type === 'success') {
      const credential = firebase.auth.FacebookAuthProvider.credential(token);

      // Sign in with credential from the Facebook user.
      firebase.auth().signInWithCredential(credential).catch(console.log);
      /* `accessToken` is now valid and can be used to get data from the Google API with HTTP requests */
      console.log(user);
    }
  }

  render() {
    return (
      <StyledLogin>
        <Text>Login</Text>
        <LoginButton onPress={this.handlePress}>
          <Text>Continue Facebook</Text>
        </LoginButton>
        <LoginButton onPress={this.google}>
          <Text>Continue Google</Text>
        </LoginButton>
        <LoginButton>
          <Text>Sign Me Up!</Text>
        </LoginButton>
        <Text>Already signed up?</Text>
      </StyledLogin>
    );
  }
}
