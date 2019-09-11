import React from 'react';
import styled from 'styled-components';
import { FlatList } from 'react-native';

import { Text } from '../ui';

export const SubscriptionList = styled.FlatList``;

export const SubscriptionName = styled((props) => <Text {...props} bold />)`
  flex: 1;
  margin-left: 15px;
  margin-right: 15px;
`;

export const SubscriptionAmount = styled((props) => <Text {...props} bold />)`
  margin-left: auto;
`;

export const SubscriptionInterval = styled((props) => <Text {...props} medium />)`
  font-size: 12px;
`;
