import auth from '@react-native-firebase/auth';
import analytics from '@react-native-firebase/analytics';

const FirebaseAnalytics = analytics();
const FirebaseAuth = auth();

function logScreen(scene) {
  const { routeName: name } = scene.navigation.state;
  const className = name.replace(/[ ]/g, '_');
  FirebaseAnalytics.setCurrentScreen(name, className);
}

function logEvent(event, data) {
  FirebaseAnalytics.logEvent(event, data);
}

function logAuthentication() {
  FirebaseAuth.signInAnonymously();
}

export default {
  logAuthentication,
  logScreen,
  logEvent,
};
