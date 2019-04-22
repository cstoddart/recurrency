import styled from 'styled-components';
import { Constants } from 'expo';

import piggyBank from '../../assets/piggyBank.jpg';

export const StyledHome = styled.ImageBackground.attrs({
  source: piggyBank,
})`
  height: 100%;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;
