import React from 'react';
import styled from 'styled-components';

import {
  StyledBottomNavigation,
  NavigationItem,
  NavigationItemContent,
  NavigationItemText,
} from './bottomNavigationStyles';
import {
  HomeIcon,
  TransactionsIcon,
  SearchIcon,
} from '../icons';
import { colors } from '../../../constants';

const { black, orange } = colors;

export const BottomNavigation = ({ currentPath }) => (
  <StyledBottomNavigation>
    <NavigationItem to="/subscriptions">
      <NavigationItemContent>
        <HomeIcon width={20} height={20} color={currentPath.includes('subscriptions') ? orange : black} />
        <NavigationItemText color={currentPath.includes('subscriptions') ? orange : black}>Subscriptions</NavigationItemText>
      </NavigationItemContent>
    </NavigationItem>
    <NavigationItem to="/transactions">
      <NavigationItemContent>
        <TransactionsIcon width={20} height={20} color={currentPath.includes('transactions') ? orange : black} />
        <NavigationItemText color={currentPath.includes('transactions') ? orange : black}>Transactions</NavigationItemText>
      </NavigationItemContent>
    </NavigationItem>
    <NavigationItem to="/search">
      <NavigationItemContent>
        <SearchIcon width={20} height={20} color={currentPath.includes('search') ? orange : black} />
        <NavigationItemText color={currentPath.includes('search') ? orange : black}>Search</NavigationItemText>
      </NavigationItemContent>
    </NavigationItem>
  </StyledBottomNavigation>
);
