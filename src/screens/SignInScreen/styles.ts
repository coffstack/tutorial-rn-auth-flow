import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-left: ${({theme}) => theme.space.default}px;
  padding-right: ${({theme}) => theme.space.default}px;
  padding-bottom: 32px;
  background-color: ${props => props.theme.colors.background};
`;
