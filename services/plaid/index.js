import axios from 'axios';
import { firebaseFunctionUrl } from '../../keys';

export async function getPlaidAccessToken({ publicToken }) {
  const accessTokenData = {
    publicToken,
  };
  const accessTokenResult = await axios.request({
    url: `${firebaseFunctionUrl}/get-access-token`,
    method: 'post',
    headers: {
      'content-type': 'application/json',
    },
    data: JSON.stringify(accessTokenData),
  }).catch(console.error);
  const { accessToken } = accessTokenResult.data;
  return accessToken;
}

export async function getPlaidTransactions({ accessToken }) {
  const transactionsData = {
    accessToken,
  };
  const transactionsResult = await axios.request({
    url: `${firebaseFunctionUrl}/get-transactions`,
    method: 'post',
    headers: {
      'content-type': 'application/json',
    },
    data: JSON.stringify(transactionsData),
  }).catch(console.error);
  const transactions = transactionsResult.data;
  return transactions;
}
