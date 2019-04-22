import { createContext } from 'react';

export const context = createContext();

export const initialState = {
  user: {
    loggedIn: false,
  },
  isConnected: false,
  bankName: '',
  accounts: [{
    name: '',
    lastFour: '',
    type: '',
  }],
  transactions: [{
    amount: 0,
    categories: [''],
    date: '',
    name: '',
  }],
};
