import React from 'react';
import styled from 'styled-components';

import { Text } from '../ui';

export const StyledLogin = styled.ImageBackground`
  height: 100%;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 100px 25px 50px 25px;
`;

export const LoginButtons = styled.View`
  width: 100%;
`;

export const LoginButton = styled.TouchableOpacity`
  background-color: white;
  border-radius: 22px;
  padding: 12px 30px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const LoginButtonImage = styled.Image`
  margin-right: 10px;
`;

export const LoginButtonText = styled((props) => <Text {...props} />)`
  font-size: 16px;
`;

export const FacebookButton = styled(LoginButton)`
  flex: 1;
  margin-right: 7.5px;
  margin-bottom: 15px;
`;

export const GoogleButton = styled(LoginButton)`
  flex: 1;
  margin-left: 7.5px;
  margin-bottom: 15px;
`;

export const LoginTextButton = styled.TouchableOpacity`
  margin-top: 20px;
`;

export const LoginText = styled((props) => <Text {...props} />)`
  color: white;
  text-align: center;
`;

export const Bold = styled((props) => <Text {...props} bold />)`
`;
