import React, { Component } from 'react';

import { loginWithFirebase } from '../../services/firebase/authentication';
import { loginWithFacebook } from '../../services/facebook';
import { loginWithGoogle } from '../../services/google';
import piggyBank from '../../assets/piggyBank.jpg';
import facebookIcon from '../../assets/facebook.png';
import googleIcon from '../../assets/google.png';
import {
  Logo,
  Row,
} from '../ui';
import {
  StyledLogin,
  LoginButtons,
  LoginButton,
  LoginButtonImage,
  LoginButtonText,
  FacebookButton,
  GoogleButton,
  LoginTextButton,
  LoginText,
  Bold,
} from './loginStyles';

export class Login extends Component {
  handleLogin = (loginMethod) => async () => {
    const { context, history } = this.props;
    const user = await loginMethod();
    console.log('USER', user);
    context.updateContext({ user: {
      loggedIn: true,
      plaidAccessToken: existingUser.plaidAccessToken || '',
    }});
    history.push('/');
  }

  render() {
    return (
      <StyledLogin source={piggyBank}>
        <Logo />
        <LoginButtons>
          <Row>
            <FacebookButton onPress={this.handleLogin(loginWithFacebook)}>
              <LoginButtonImage source={facebookIcon} />
              <LoginButtonText>Continue</LoginButtonText>
            </FacebookButton>
            <GoogleButton onPress={this.handleLogin(loginWithGoogle)}>
              <LoginButtonImage source={googleIcon} />
              <LoginButtonText>Continue</LoginButtonText>
            </GoogleButton>
          </Row>
          <LoginButton onPress={this.handleLogin(loginWithFirebase)}>
            <LoginButtonText>Sign Me Up!</LoginButtonText>
          </LoginButton>
          <LoginTextButton onPress={this.handleLogin(loginWithFirebase)}>
            <LoginText>Already signed up? <Bold>Log In Here</Bold></LoginText>
          </LoginTextButton>
        </LoginButtons>
      </StyledLogin>
    );
  }
}
