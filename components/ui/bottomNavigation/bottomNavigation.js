import React from 'react';
import { View, Text } from 'react-native';
import { Link } from 'react-router-native';

import { StyledBottomNavigation } from './bottomNavigationStyles';

export const BottomNavigation = () => (
  <StyledBottomNavigation>
    <Link to="/subscriptions"><Text>Subscriptions</Text></Link>
    <Link to="/transactions"><Text>Transactions</Text></Link>
    <Link to="/search"><Text>Search</Text></Link>
  </StyledBottomNavigation>
);
