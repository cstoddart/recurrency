import styled from 'styled-components';

import piggyBank from '../../assets/piggyBank.jpg';

export const StyledLogin = styled.ImageBackground.attrs({
  source: piggyBank,
})`
  height: 100%;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;
