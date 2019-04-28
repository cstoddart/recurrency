import React from 'react';
import { View, Text } from 'react-native';
import { Link } from 'react-router-native';

import { StyledNavigation } from './navigationStyles';

export const Navigation = () => (
  <StyledNavigation>
    <Link to="/subscriptions"><Text>Subscriptions</Text></Link>
    <Link to="/transactions"><Text>Transactions</Text></Link>
    <Link to="/search"><Text>Search</Text></Link>
  </StyledNavigation>
);
