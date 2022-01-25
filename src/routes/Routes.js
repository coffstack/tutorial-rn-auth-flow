import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {AppStack} from './AppStack';
import {AuthStack} from './AuthStack';
import {useAuth} from '../contexts/Auth';

export function Router() {
  const {authData, isLoading} = useAuth();

  if (isLoading) {
    console.log({isLoading});
    return (
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <Text>Carregando informações....</Text>
      </View>
    );
  }
  return (
    <NavigationContainer>
      {authData ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
