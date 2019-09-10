import React from 'react';
import styled from 'styled-components';
import { Text as ReactNativeText } from 'react-native';

import { colors } from '../../../constants';

const { black } = colors;

export const Text = styled((props) => <ReactNativeText {...props} />)`
  color: ${({ color }) => color || black};
  font-family: ${({ bold }) => bold ? 'rubikBold' : 'rubik'};
`;
