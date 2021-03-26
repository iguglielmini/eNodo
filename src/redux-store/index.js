import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';

import user from './reducers/user';
import cart from './reducers/cart';
import delivery from './reducers/delivery';
import flags from './reducers/flags';
import campaign from './reducers/campaign';

const reducers = combineReducers({
  user,
  cart,
  delivery,
  flags,
  campaign,
});

export default createStore(reducers, {}, applyMiddleware(thunk));
