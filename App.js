/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React, { Component } from 'react';

/* Component */
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <NavigationContainer>
          <StatusBar backgroundColor="#e5e5e5" barStyle="dark-content" />
          <Routes />
        </NavigationContainer>
      </>
    );
  }
}

export default App;
