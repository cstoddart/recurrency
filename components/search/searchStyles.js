import styled from 'styled-components';
import {
  FlatList,
  Text,
  TextInput,
} from 'react-native';

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

export const SearchResultName = styled.Text`
  flex: 1;
  margin-left: 15px;
  font-weight: bold;
`;

export const SearchResultAmount = styled.Text`
  margin-left: auto;
`;
