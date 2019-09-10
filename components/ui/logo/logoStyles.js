import React from 'react';
import styled from 'styled-components';

import { Text } from '../text';

export const StyledLogo = styled((props) => <Text {...props} bold />)`
  color: black;
  font-size: 35;
`;
