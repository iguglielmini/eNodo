import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import InitialPage from './src/pages';
import ProductDetailsPage from './src/pages/ProductDetails';

import Header from './src/components/Header';

const Stack = createStackNavigator();

function App() {
  return (
    <>
      <NavigationContainer>
        <StatusBar backgroundColor="#e5e5e5" barStyle="dark-content" />

        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={InitialPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ProductDetails"
            component={ProductDetailsPage}
            options={{
              header: Header,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
