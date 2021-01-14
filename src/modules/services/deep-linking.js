import {
  Linking, AppState
} from 'react-native';
import branch from 'react-native-branch';

export default class deepLinkingManager {
  static init() {
    deepLinkingManager.handleInitialURL();
    deepLinkingManager.addEventListeners();
  }

  static handleInitialURL() {
    Linking.getInitialURL().then(deepLinkingManager.handleOpenURL);
  }

  static addEventListeners() {
    branch.subscribe(deepLinkingManager.handleBranchURL);

    Linking.addEventListener('url', deepLinkingManager.handleOpenURL);

    AppState.addEventListener('change', (state) => {
      if (state === 'active') {
        deepLinkingManager.handleInitialURL();
      }
    });
  }

  static handleOpenURL(params) { // for non branch.io links
    if (params) {
      const urlStr = params.url || params;

      const indexOfApp = urlStr.lastIndexOf('app');
      if (indexOfApp === -1) return;

      const urlArr = urlStr.substr(urlStr.lastIndexOf('app') + 4).split('/');

      switch (urlArr[0]) {
        case 'invite':
          deepLinkingManager.setInvitationCode(urlArr[1]);
          break;

        default:
          break;
      }
    }
  }
}
