import React from 'react';
import { View, Image } from 'react-native';

import { colors } from '../../../constants';
import {
  StyledTopNavigation,
  SettingsLink,
  PageTitle,
} from './topNavigationStyles';
import { GearIcon } from '../icons';

const { black, orange } = colors;

export const TopNavigation = ({ pageTitle, currentPath }) => (
  <StyledTopNavigation>
    <SettingsLink to="/settings">
      <GearIcon height="30" width="30" color={currentPath.includes('settings') ? orange : black} />
    </SettingsLink>
    <PageTitle>{pageTitle}</PageTitle>
  </StyledTopNavigation>
);
