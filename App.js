import React, { Component } from 'react';
// import OneSignal from 'react-native-onesignal';
import { Provider } from 'react-redux';
import { configureFontWeight } from '@modules/utils';
import SplashScreen from 'react-native-splash-screen';
import crashlytics from '@react-native-firebase/crashlytics';
import GlobalEvent from '@modules/services/global-events';
// import DeepLinkingService from '@modules/services/deep-linking';
// import NotificationService from '@modules/api/api-notifications';

// import config from '@/config';
import ApiAuth from '@modules/api/api-auth';
import DeviceStorage from '@modules/services/device-storage';
import Router from './router';
import reduxStore from '@redux';

export const Notification = React.createRef();

// eslint-disable-next-line no-console
console.disableYellowBox = true;

class App extends Component {
  constructor(props) {
    super(props);

    // global events
    GlobalEvent();

    // configure font weight for android
    configureFontWeight();

    // initialize crashlytics logs
    crashlytics().log('App mounted.');
  }

  componentDidMount() {
    // Intro page
    setTimeout(() => SplashScreen.hide(), 500);
    ApiAuth.session();
  }

  // eslint-disable-next-line camelcase
  UNSAFE_componentWillMount() {
    DeviceStorage.removeItem('@BelshopApp:cart');
  }

  render() {
    return (
      <Provider store={reduxStore}>
        <Router />
      </Provider>
    );
  }
}

export default App;
