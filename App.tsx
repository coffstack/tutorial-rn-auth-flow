import React from 'react';
import {ThemeProvider} from 'styled-components/native';
import {AuthProvider} from './src/contexts/Auth';
import {Router} from './src/routes/Routes';
import {darkTheme} from './src/theme/darkTheme';

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
