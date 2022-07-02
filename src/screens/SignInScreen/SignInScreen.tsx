import React, {useContext, useState} from 'react';
import {View, Image, Switch} from 'react-native';
import {MyButton} from '../../components/MyButton';
import {MyTextInput} from '../../components/MyTextInput';
import {useAuth} from '../../contexts/Auth';
import {styles} from '../styles';

import logo from '../../assets/logo.png';
import {Container} from './styles';
import {ThemeContext, ThemeType} from '../../theme/Theme';

export function SignInScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {signIn} = useAuth();

  const {toggleTheme, theme} = useContext(ThemeContext);

  const isDarkMode = theme === ThemeType.dark;

  return (
    <Container>
      <Switch value={isDarkMode} onValueChange={toggleTheme} />
      <Image
        resizeMode="contain"
        source={logo}
        style={{width: 100, height: 100}}
      />
      <MyTextInput placeholder="e-mail" value={email} onChangeText={setEmail} />
      <MyTextInput
        placeholder="senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <MyButton onPress={() => signIn(email, password)} title="Entrar no App" />
    </Container>
  );
}
