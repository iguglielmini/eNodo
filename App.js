import React, { Component } from 'react';
import { Provider } from 'react-redux';
import OneSignal from 'react-native-onesignal';
import { DeviceEventEmitter } from 'react-native';
import { configureFontWeight } from '@modules/utils';
import SplashScreen from 'react-native-splash-screen';
import GlobalEvent from '@modules/services/global-events';
import { ToastProvider } from '@components/molecules/Toast';
import crashlytics from '@react-native-firebase/crashlytics';
import ToastComponent from '@components/molecules/Toast/Toast';

import AuthService from '@modules/services/auth';
import ApiProduct from '@modules/api/api-product';
import DeviceStorage from '@modules/services/device-storage';
import { start as deliveryStart } from '@modules/services/delivery';
import { navigationRef, navigate } from '@modules/helpers/root-navigation';

import config from '@/config';
import reduxStore from '@redux';
import { NavigationContainer } from '@react-navigation/native';

import Router from './router';

// eslint-disable-next-line no-console
console.disableYellowBox = true;

class App extends Component {
  constructor(props) {
    super(props);

    GlobalEvent();

    this.state = {
      loaded: false,
    };

    this.OneSignalInit();
    configureFontWeight();
    crashlytics().log('App mounted.');
    DeviceEventEmitter.addListener('changePermissionNotification', this.OneSignalInit);
  }

  async componentDidMount() {
    await Promise.all([AuthService.start(), deliveryStart()]);
    setTimeout(() => SplashScreen.hide(), 500);

    this.setState({ loaded: true });
  }

  componentWillUnmount() {
    DeviceEventEmitter.removeListener('changePermissionNotification');
  }

  OneSignalConfig = () => {
    OneSignal.init(config.oneSignalKey, {

      kOSSettingsKeyAutoPrompt: false,
      kOSSettingsKeyInFocusDisplayOption: 2,
    })
    OneSignal.inFocusDisplaying(2);
  }
  
  OneSignalInit = async() => {
    const notifyOptions = await DeviceStorage.getItem('@BelshopApp:Notifications');
    console.log('Notify Options ', notifyOptions);
    
    if (!notifyOptions) return this.OneSignalConfig();
    if (notifyOptions.allOn) this.OneSignalConfig();
  }

  onReceivedNotifications = async ({ payload }) => {
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
