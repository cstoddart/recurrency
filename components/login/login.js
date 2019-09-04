import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';

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
import { getCurrentUser } from 'expo-google-sign-in';
import { getUser } from '../../services/firebase/database';

export class Login extends Component {
  async componentDidMount() {
    const { context, history } = this.props;
    const userId = await AsyncStorage.getItem('userId');
    console.log('USERID', userId);
    if (!userId) return;
    const user = await getUser(userId);
    context.updateContext({ user: {
      id: userId,
      loggedIn: true,
      plaidAccessToken: user.plaidAccessToken || '',
    }});
    history.push('/');
  }

  handleLogin = (loginMethod) => async () => {
    const { context, history } = this.props;
    const user = await loginMethod();
    console.log('YOUSER', user);
    AsyncStorage.setItem('userId', user.id);
    context.updateContext({ user: {
      id: user.id, // this line needs testing
      loggedIn: true,
      plaidAccessToken: user.plaidAccessToken || '',
    }});
    history.push('/');
  };

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
