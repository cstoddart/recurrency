import styled from 'styled-components';
import { FlatList, Text } from 'react-native';

export const TransactionList = styled.FlatList``;

export const TransactionName = styled.Text`
  flex: 1;
  margin-left: 15px;
  font-weight: bold;
`;

export const TransactionAmount = styled.Text`
  margin-left: auto;
`;
