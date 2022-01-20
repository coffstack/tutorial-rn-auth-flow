import React from 'react';
import {View, Text} from 'react-native';
import {MyButton} from '../components/MyButton';
import {useAuth} from '../contexts/Auth';
import {styles} from './styles';

export function SettingScreen() {
  const {signOut} = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configurações</Text>
      <MyButton
        style={{backgroundColor: 'red'}}
        onPress={signOut}
        title="Sair do App"
      />
    </View>
  );
}
