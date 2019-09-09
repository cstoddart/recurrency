import styled from 'styled-components';
import { View, Text } from 'react-native';
import { Link } from 'react-router-native';

export const StyledTopNavigation = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0 15px;
  padding-top: 15px;
  padding-bottom: 10px;
`;

export const SettingsLink = styled(Link)`
  position: absolute;
  left: 0;
`;

export const PageTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;
