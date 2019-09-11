import styled from 'styled-components';

export const Flex = styled.View`
  flex-direction: ${({ column }) => column ? 'column' : 'row'};
  align-items: ${({ align }) => align || 'center'};
  justify-content: ${({ justify }) => justify || 'center'};
`;
