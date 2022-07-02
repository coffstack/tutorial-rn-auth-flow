import React from 'react';
import {ThemeProvider} from 'styled-components/native';
import {AuthProvider} from './src/contexts/Auth';
import {Router} from './src/routes/Routes';

const App = () => {
  return (
    <ThemeProvider
      theme={{
        colors: {
          background: '#121212',
          onBackground: '#FFF',
          primary: '#550AB1',
        },
        spaces: {
          default: 16,
        },
      }}>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
