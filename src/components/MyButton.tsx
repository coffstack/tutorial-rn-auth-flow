import React from 'react';
import {Text, StyleSheet, TouchableOpacityProps} from 'react-native';
import {ButtonContainer} from './styles';

interface MyButtonProps extends TouchableOpacityProps {
  title: string;
}
export function MyButton({title, style, ...rest}: MyButtonProps) {
  return (
    <ButtonContainer {...rest} style={[style]}>
      <Text style={styles.text}>{title}</Text>
    </ButtonContainer>
  );
}

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    color: '#FFF',
    fontSize: 16,
  },
});
