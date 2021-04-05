import React, { Component } from 'react';
import { Provider } from 'react-redux';
import OneSignal from 'react-native-onesignal';
import { configureFontWeight, capitalize } from '@modules/utils';
import SplashScreen from 'react-native-splash-screen';
import GlobalEvent from '@modules/services/global-events';
import { ToastProvider } from '@components/molecules/Toast';
import crashlytics from '@react-native-firebase/crashlytics';
import ToastComponent from '@components/molecules/Toast/Toast';

import AuthService from '@modules/services/auth';
import ApiProduct from '@modules/api/api-product';
import { start as deliveryStart } from '@modules/services/delivery';
import { navigationRef, navigate } from '@modules/helpers/root-navigation';

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
      kOSSettingsKeyInFocusDisplayOption: 2,
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
    OneSignal.addEventListener('received', this.onReceived);

    await Promise.all([AuthService.start(), deliveryStart()]);
    setTimeout(() => SplashScreen.hide(), 500);

    this.setState({ loaded: true });
  }

  onReceived = ({ payload }) => {
    const { launchURL } = payload;

    ApiProduct.redirectNotification(launchURL).then(({ data }) => {
      const { type, target } = data;

      if (type === 'product') navigate('ProductDetails', { slug: target });
    });
  };

  render() {
    const { loaded } = this.state;

    if (!loaded) return null;

    return (
      <NavigationContainer ref={navigationRef}>
        <Provider store={reduxStore}>
          <ToastProvider>
            <Router />
            <ToastComponent />
          </ToastProvider>
        </Provider>
      </NavigationContainer>
    );
  }
}

export default App;
