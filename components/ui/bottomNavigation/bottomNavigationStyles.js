import styled from 'styled-components';
import { View } from 'react-native';
import { Link } from 'react-router-native';

export const StyledBottomNavigation = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 15px;
`;

export const NavigationItem = styled(Link)`
  flex: 1;
`;

export const NavigationItemContent = styled.View`
  flex-direction: column;
  align-items: center;
`;
