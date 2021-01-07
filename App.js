/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from 'react';

// import DeepLinkingService from '@modules/services/deep-linking';
import { configureFontWeight } from '@modules/utils';
// import NotificationService from '@modules/api/api-notifications';
// import OneSignal from 'react-native-onesignal';
import crashlytics from '@react-native-firebase/crashlytics';
import SplashScreen from 'react-native-splash-screen';

// import config from '@/config';
import Router from './router';

export const Notification = React.createRef();

// eslint-disable-next-line no-console
console.disableYellowBox = true;

class App extends Component {
  constructor(props) {
    super(props);

    // configure font weight for android
    configureFontWeight();

    // initialize crashlytics logs
    crashlytics().log('App mounted.');
  }

  componentDidMount() {
    // Intro page
    setTimeout(() => {
      SplashScreen.hide();
    }, 500);
  }

  render() {
    return <Router />;
  }
}

export default App;
