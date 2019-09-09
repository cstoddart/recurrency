import React from 'react';
import { View, Image } from 'react-native';

import {
  StyledTopNavigation,
  SettingsLink,
  PageTitle,
} from './topNavigationStyles';
import Gear from '../../../assets/gear.svg';

export const TopNavigation = ({ pageTitle }) => (
  <StyledTopNavigation>
    <SettingsLink to="/settings">
      <Gear height="30" width="30" />
    </SettingsLink>
    <PageTitle>{pageTitle}</PageTitle>
  </StyledTopNavigation>
);
