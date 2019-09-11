import React from 'react';
import styled from 'styled-components';
import { View } from 'react-native';
import { Link } from 'react-router-native';

import { Text } from '../text';

export const StyledTopNavigation = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0 15px;
  padding-top: 15px;
  padding-bottom: 10px;
`;

export const SettingsLink = styled((props) => <Link {...props} underlayColor="#ffffff00" />)`
  position: absolute;
  left: 0;
`;

export const PageTitle = styled((props) => <Text {...props} bold />)`
  font-size: 20px;
`;
