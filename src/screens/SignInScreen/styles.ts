import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: ${props => props.theme.spaces.default}px;
  padding-bottom: 32px;
  background-color: ${props => props.theme.colors.background};
`;
