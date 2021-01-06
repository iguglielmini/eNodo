import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import user from './reducers/user';
import flags from './reducers/flags';
import campaign from './reducers/campaign';

const reducers = combineReducers({
  user,
  flags,
  campaign
});

export default createStore(reducers, {}, applyMiddleware(thunk));
