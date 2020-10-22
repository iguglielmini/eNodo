import 'react-native-gesture-handler';
import React from 'react';

/* Component */
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes';

const App = () => (
  <>
    <NavigationContainer>
      <StatusBar backgroundColor="#e5e5e5" barStyle="dark-content" />
      <Routes />
    </NavigationContainer>
  </>
);

export default App;
