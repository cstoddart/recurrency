import React from 'react';
import styled from 'styled-components';
import { FlatList } from 'react-native';

import { Text } from '../ui';

export const TransactionList = styled.FlatList``;

export const TransactionName = styled((props) => <Text {...props} bold />)`
  flex: 1;
  margin-left: 15px;
`;

export const TransactionAmount = styled((props) => <Text {...props} />)`
  margin-left: auto;
`;
