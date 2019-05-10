import React, { Component } from 'react';
import { WebView } from 'react-native';
import axios from 'axios';

import { PLAID_PUBLIC_KEY, PLAID_ENV, PLAID_PRODUCT } from '../../keys';
import { getPlaidAccessToken, getPlaidTransactions } from '../../services/plaid';
import {
  Logo,
} from '../ui';
import {
  StyledHome,
} from './homeStyles';

export class Home extends Component {
  state = {
    isConnected: false,
  };

  handleMessage = async (event) => {
    const { action, metadata } = JSON.parse(event.nativeEvent.data);
    const isConnected = action && action.includes('::connected');
    if (isConnected) {
      const accessToken = await getPlaidAccessToken({ publicToken: metadata.public_token });
      updateUser()
      const transactions = await getPlaidTransactions({ accessToken });
      this.props.context.updateContext({
        bankName: metadata.institution.name,
        accounts: metadata.accounts.map((account) => ({
          name: account.name,
          lastFour: account.mask,
          type: account.subtype,
        })),
        transactions: transactions.map((transaction) => ({
          amount: transaction.amount,
          categories: transaction.category,
          date: transaction.date,
          name: transaction.name,
        })),
      });
      this.props.history.push('/subscriptions');
    }
  }

  render() {
    return (
      <WebView
        source={{
          uri: `https://cdn.plaid.com/link/v2/stable/link.html?key=${PLAID_PUBLIC_KEY}&env=${PLAID_ENV}&product=${PLAID_PRODUCT}&clientName=Recurrency&isWebView=true&isMobile=true&webhook=http://google.com`,
        }}
        onMessage={this.handleMessage}
      />
    );
  }
}
