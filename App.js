import React, { Component } from 'react';
import axios from 'axios';
import { WebView, Text, Switch } from 'react-native';
import {
  NativeRouter,
  Route,
  Redirect,
} from 'react-router-native';
import { SecureStore } from 'expo';

import { context, initialState } from './context';
import { firebaseFunctionUrl } from './keys';
import { login } from './services/firebase';
import { Login } from './components/login';
import { Home } from './components/home';
import {
  Container,
  Title,
  Account,
  AccountName,
  AccountNumbers,
  AccountType,
} from './appStyles';

const PrivateRoute = ({ loggedIn }) => (
  loggedIn
    ? <></>
    : <Redirect to="/" />
);

export default class App extends React.Component {
  state = {
    ...initialState,
    updateContext: (context) => this.setState((state) => ({
      ...state,
      context,
    })),
  };

  // handleMessage = async (event) => {
  //   const { action, metadata } = JSON.parse(event.nativeEvent.data);
  //   const isConnected = action && action.includes('::connected');
  //   if (isConnected) {
  //     this.setState({
  //       bankName: metadata.institution.name,
  //       accounts: metadata.accounts.map((account) => ({
  //         name: account.name,
  //         lastFour: account.mask,
  //         type: account.subtype,
  //       })),
  //     });

  //     const accessTokenData = {
  //       publicToken: metadata.public_token,
  //     };
  //     const accessTokenResult = await axios.request({
  //       url: `${firebaseFunctionUrl}/get-access-token`,
  //       method: 'post',
  //       headers: {
  //         'content-type': 'application/json',
  //       },
  //       data: JSON.stringify(accessTokenData),
  //     }).catch(console.log);
  //     console.log('TOKEN RESULT', accessTokenResult.data);
  //     const { accessToken } = accessTokenResult.data;

  //     const transactionsData = {
  //       accessToken,
  //     };
  //     const transactionsResult = await axios.request({
  //       url: `${firebaseFunctionUrl}/get-transactions`,
  //       method: 'post',
  //       headers: {
  //         'content-type': 'application/json',
  //       },
  //       data: JSON.stringify(transactionsData),
  //     }).catch(console.log);
  //     const transactions = transactionsResult.data;
  //   }
  //   this.setState({ isConnected });
  // }

  // componentDidMount() {
  //   login();
  // }

  render() {
    console.log('STATE', this.state);
    const loggedIn = true;
    return (
      <NativeRouter>
        <context.Provider value={this.state}>
          <Route exact path="/" render={() => (
            loggedIn 
              ? <Home />
              : <Redirect to="/login" />
          )}/>
          {/* <PrivateRoute path="/home" component={Home} loggedIn={false} /> */}
          <Route path="/login" render={() => <Login />} />
          {/* </Switch> */}
          {/* {this.state.isConnected
            ? <Container>
              <Title>{this.state.bankName}</Title>
              {this.state.accounts.map((account) => (
                <Account key={account.name}>
                  <AccountName>{account.name}</AccountName>
                  <AccountNumbers>{account.lastFour}</AccountNumbers>
                  <AccountType>{account.type}</AccountType>
                </Account>
              ))}
            </Container>
            : <WebView
              source={{
                uri: `https://cdn.plaid.com/link/v2/stable/link.html?key=${PLAID_PUBLIC_KEY}&env=${PLAID_ENV}&product=${PLAID_PRODUCT}&clientName=Recurrency&isWebView=true&isMobile=true&webhook=http://google.com`,
              }}
              onMessage={this.handleMessage}
            />} */}
        </context.Provider>
      </NativeRouter>
    );
  }
}
