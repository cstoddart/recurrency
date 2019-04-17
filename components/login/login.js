import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { StyledLogin } from './loginStyles';

export class Login extends Component {
  render() {
    return (
      <StyledLogin>
        <Text>Login</Text>
      </StyledLogin>
    );
  }
}
