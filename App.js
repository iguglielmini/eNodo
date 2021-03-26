import React, { Component } from 'react';
import OneSignal from 'react-native-onesignal';
import { Provider } from 'react-redux';
import { configureFontWeight } from '@modules/utils';
import SplashScreen from 'react-native-splash-screen';
import crashlytics from '@react-native-firebase/crashlytics';
import GlobalEvent from '@modules/services/global-events';
import { ToastProvider } from '@components/molecules/Toast';
import ToastComponent from '@components/molecules/Toast/Toast';

import AuthService from '@modules/services/auth';
import { start as deliveryStart } from '@modules/services/delivery';

import { NavigationContainer } from '@react-navigation/native';
import reduxStore from '@redux';
import Router from './router';
import config from '@/config';

export const Notification = React.createRef();

// eslint-disable-next-line no-console
console.disableYellowBox = true;

class App extends Component {
  constructor(props) {
    super(props);

    // configure onesignal
    OneSignal.init(config.oneSignalKey, {
      kOSSettingsKeyAutoPrompt: false,
      kOSSettingsKeyInFocusDisplayOption: 2
    });
    OneSignal.inFocusDisplaying(2);
    // global events
    GlobalEvent();

    this.state = {
      loaded: false,
    };

    configureFontWeight();
    crashlytics().log('App mounted.');
  }

  async componentDidMount() {
    try {
      await Promise.all([
        AuthService.start(),
        deliveryStart(),
      ]);
    } finally {
      setTimeout(() => SplashScreen.hide(), 500);

      this.setState({
        loaded: true,
      });
    }
  }

  render() {
    return (
      this.state.loaded && (
        <NavigationContainer>
          <Provider store={reduxStore}>
            <ToastProvider>
              <Router />
              <ToastComponent />
            </ToastProvider>
          </Provider>
        </NavigationContainer>
      )
    );
  }
}

export default App;
