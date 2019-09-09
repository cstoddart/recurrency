import React from "react";
import { Text } from "react-native";
import styled from "styled-components";

import {
  StyledBottomNavigation,
  NavigationItem,
  NavigationItemContent,
} from "./bottomNavigationStyles";
import Home from "../../../assets/home.svg";
import Transactions from "../../../assets/transactions.svg";
import Search from "../../../assets/search.svg";

export const BottomNavigation = () => (
  <StyledBottomNavigation>
    <NavigationItem to="/subscriptions">
      <NavigationItemContent>
        <Home width={20} height={20} />
        <Text>Subscriptions</Text>
      </NavigationItemContent>
    </NavigationItem>
    <NavigationItem to="/transactions">
      <NavigationItemContent>
        <Transactions width={20} height={20} />
        <Text>Transactions</Text>
      </NavigationItemContent>
    </NavigationItem>
    <NavigationItem to="/search">
      <NavigationItemContent>
        <Search width={20} height={20} />
        <Text>Search</Text>
      </NavigationItemContent>
    </NavigationItem>
  </StyledBottomNavigation>
);
