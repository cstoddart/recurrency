import React from 'react';
import styled from 'styled-components';

import { Text } from '../ui';

export const SettingsSectionHeader = styled((props) => <Text {...props} medium />)`
  font-size: 12px;
  text-transform: uppercase;
  margin: 10px auto;
`;
