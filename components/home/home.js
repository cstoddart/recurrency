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
import { updateUser } from '../../services/firebase/database';

export class Home extends Component {
  state = {
    isConnected: false,
  };

  async componentDidMount() {
    const { context, history } = this.props;
    if (!context.user.plaidAccessToken) return;
    const transactions = await getPlaidTransactions({ accessToken: context.user.plaidAccessToken });
      context.updateContext({
        // bankName: metadata.institution.name,
        // accounts: metadata.accounts.map((account) => ({
        //   name: account.name,
        //   lastFour: account.mask,
        //   type: account.subtype,
        // })),
        transactions: transactions.map((transaction) => ({
          amount: transaction.amount,
          categories: transaction.category,
          date: transaction.date,
          name: transaction.name,
        })),
      });
      history.push('/subscriptions');
  }

  handleMessage = async (event) => {
    const { context, history } = this.props;
    const { action, metadata } = JSON.parse(event.nativeEvent.data);
    const isConnected = action && action.includes('::connected');
    if (isConnected) {
      const plaidAccessToken = await getPlaidAccessToken({ publicToken: metadata.public_token });
      updateUser({
        id: context.user.id,
        plaidAccessToken,
      });
      const transactions = await getPlaidTransactions({ accessToken: plaidAccessToken });
      context.updateContext({
        user: {
          ...context.user,
          plaidAccessToken,
        },
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
      history.push('/subscriptions');
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
