import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Facebook, Google } from 'expo';

import {
  StyledLogin,
  LoginButton,
} from './loginStyles';

export class Login extends Component {
  handlePress = () => {
    this.props.context.updateContext({ user: { loggedIn: true } });
    this.props.history.push('/home');
  }

  render() {
    return (
      <StyledLogin>
        <Text>Login</Text>
        <LoginButton onPress={this.handlePress}>
          <Text>Continue Facebook</Text>
        </LoginButton>
        <LoginButton onPress={this.handlePress}>
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
