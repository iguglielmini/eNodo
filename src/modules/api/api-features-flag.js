import saveNewFlags from '@redux/actions/flags';
import _get from 'lodash/get';
import Store from '@redux';
import Api from '.';
import eventBus from '../services/EventBus';

class FeaturesFlagService extends Api {
  debounceRefresh = 0;

  getFlags() {
    return this.get('/feature-flag/');
  }

  updateFlag() {
    return new Promise((resolve) => {
      this.getFlags().then((flags) => {
        FeaturesFlagService.setFlag(flags);
        resolve();
      });
    });
  }

  handleAppStateChange = (nextAppState) => {
    if (nextAppState.toLowerCase() === 'inactive') return;
    if (nextAppState.toLowerCase() === 'inactive') return;
    clearTimeout(this.debounceRefresh);
    this.debounceRefresh = setTimeout(() => {
      this.updateFlag();
    }, 1000);
  };

  static setFlag(response) {
    const listItems = _get(response, 'data.items', '');
    if (listItems) Store.dispatch(saveNewFlags(listItems));
  }
}

const statement = new FeaturesFlagService();
statement.updateFlag();
eventBus.subscribe('AppState', statement.handleAppStateChange);
export const initFlags = statement.updateFlag;
export default statement;
