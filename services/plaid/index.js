import axios from 'axios';
import { firebaseFunctionUrl } from '../../keys';

export async function getPlaidAccessToken({ publicToken }) {
  const accessTokenResult = await axios.request({
    url: `${firebaseFunctionUrl}/get-access-token`,
    method: 'get',
    params: { publicToken },
  }).catch(console.error);
  const { accessToken } = accessTokenResult.data;
  return accessToken;
}

export async function getPlaidTransactions({ accessToken }) {
  const transactionsResult = await axios.request({
    url: `${firebaseFunctionUrl}/get-transactions`,
    method: 'get',
    params: { accessToken },
  }).catch(console.error);
  const transactions = transactionsResult.data;
  return transactions;
}
