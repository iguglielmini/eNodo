import React, { Component } from "react";
// import OneSignal from 'react-native-onesignal';
import { Provider } from "react-redux";
import { configureFontWeight } from "@modules/utils";
import SplashScreen from "react-native-splash-screen";
import crashlytics from "@react-native-firebase/crashlytics";
// import DeepLinkingService from '@modules/services/deep-linking';
// import NotificationService from '@modules/api/api-notifications';

// import config from '@/config';
import Router from "./router";
import reduxStore from "./src/redux-store";
import ApiAuth from "./src/modules/api/api-auth";

export const Notification = React.createRef();

// eslint-disable-next-line no-console
console.disableYellowBox = true;

class App extends Component {
  constructor(props) {
    super(props);

    // configure font weight for android
    configureFontWeight();

    // initialize crashlytics logs
    crashlytics().log("App mounted.");
  }

  getSession() {
    ApiAuth.session();
    setInterval(() => {
      ApiAuth.session();
    }, 3000);
  }

  componentDidMount() {
    // Intro page
    setTimeout(() => {
      SplashScreen.hide();
    }, 500);

    this.getSession();
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
