import styled from 'styled-components';
import { View } from 'react-native';

export const Card = styled.View`
  background-color: white;
  padding: 20px;
  border-radius: 20px;
  margin-top: ${(props) => props.index === 0 ? '10px' : '0'};
  margin-left: 15px;
  margin-right: 15px;
  margin-bottom: 10px;
  elevation: 3;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
