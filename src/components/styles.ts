import styled from 'styled-components/native';

export const ButtonContainer = styled.TouchableOpacity`
  border-radius: 8px;
  padding: 20px;
  background-color: ${props => props.theme.colors.primary};
`;
