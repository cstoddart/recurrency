import React from 'react';
import styled from 'styled-components';
import { View } from 'react-native';
import { Link } from 'react-router-native';

import { Text } from '../text';

export const StyledBottomNavigation = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 15px;
`;

export const NavigationItem = styled((props) => <Link {...props} underlayColor="#ffffff00" />)`
  flex: 1;
`;

export const NavigationItemContent = styled.View`
  flex-direction: column;
  align-items: center;
`;

export const NavigationItemText = styled((props) => <Text {...props} bold />)`
  font-size: 12px;
  margin-top: 2px;
`;
