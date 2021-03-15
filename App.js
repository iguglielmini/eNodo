import React, { Component } from 'react';
// import OneSignal from 'react-native-onesignal';
import { Provider } from 'react-redux';

import { configureFontWeight } from '@modules/utils';
import SplashScreen from 'react-native-splash-screen';
import crashlytics from '@react-native-firebase/crashlytics';
import GlobalEvent from '@modules/services/global-events';
import { ToastProvider } from '@components/molecules/Toast';
import ToastComponent from '@components/molecules/Toast/Toast';

import AuthService from '@modules/services/auth';

import { NavigationContainer } from '@react-navigation/native';
import { Platform, StatusBar } from 'react-native';
import { PRIMARY, WHITE } from '@assets/style/colors';
import reduxStore from '@redux';
import Router from './router';

export const Notification = React.createRef();

// eslint-disable-next-line no-console
console.disableYellowBox = true;

class App extends Component {
  constructor(props) {
    super(props);

    // global events
    GlobalEvent();

    this.state = {
      loaded: false,
    };

    configureFontWeight();
    crashlytics().log('App mounted.');
  }

  async componentDidMount() {
    await AuthService.start();

    setTimeout(() => SplashScreen.hide(), 500);

    this.setState({
      loaded: true,
    });
  }

  render() {
    return this.state.loaded && (
      <NavigationContainer>
        <Provider store={reduxStore}>
          <ToastProvider>
            <StatusBar backgroundColor={Platform.OS === 'ios' ? WHITE : PRIMARY} barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'} />
            <Router />
            <ToastComponent />
          </ToastProvider>
        </Provider>
      </NavigationContainer>
    );
  }
}

export default App;
