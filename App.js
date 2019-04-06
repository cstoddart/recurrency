import React from 'react';
import { WebView } from 'react-native';
import styled from 'styled-components';

import {
  Container,
  Title,
  Account,
  AccountName,
  AccountNumbers,
  AccountType,
} from './appStyles';

const PLAID_PUBLIC_KEY= '56080b252cdeed44550aa6a24517d9';
const PLAID_ENV = 'sandbox';
const PLAID_PRODUCT = 'auth,transactions';

export default class App extends React.Component {
  state = {
    isConnected: false,
    bankName: '',
    accounts: [{
      name: '',
      lastFour: '',
      type: '',
    }],
  };

  handleMessage = (event) => {
    const data = JSON.parse(event.nativeEvent.data);
    console.log('DATA', data);
    const isConnected = data.action && data.action.includes('::connected');
    if (isConnected) this.setState({
      bankName: data.metadata.institution.name,
      accounts: data.metadata.accounts.map((account) => ({
        name: account.name,
        lastFour: account.mask,
        type: account.subtype, 
      })),
    });
    this.setState({ isConnected });
  }

  render() {
    return this.state.isConnected
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
      />;
  }
}
