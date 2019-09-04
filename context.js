import { createContext } from 'react';

export const context = createContext();

const transaction = {
  amount: 0,
  categories: [''],
  date: '',
  name: '',
};

export const initialState = {
  user: {
    id: '',
    loggedIn: false,
    plaidAccessToken: '',
  },
  isConnected: false,
  bankName: '',
  accounts: [{
    name: '',
    lastFour: '',
    type: '',
  }],
  transactions: [transaction],
  subscriptions: [transaction]
};
