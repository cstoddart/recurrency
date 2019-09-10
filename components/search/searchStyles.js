import React from 'react';
import styled from 'styled-components';
import {
  FlatList,
  TextInput,
} from 'react-native';

import { Text } from '../ui';

export const SearchInputContainer = styled.View`
  margin: 10px 15px;
  background-color: #efefef;
  padding: 10px 15px;
  elevation: 3;
  border-radius: 20px;
  border: 1px solid #efefef;
  flex-direction: row;
  align-items: center;
`;

export const SearchInput = styled.TextInput`
  flex: 1;
`;

export const SearchResultList = styled.FlatList``;

export const SearchResultName = styled((props) => <Text {...props} bold />)`
  flex: 1;
  margin-left: 15px;
`;

export const SearchResultAmount = styled((props) => <Text {...props} />)`
  margin-left: auto;
`;
