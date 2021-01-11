import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import user from "./reducers/user";
import cart from "./reducers/cart";
import flags from "./reducers/flags";
import campaign from "./reducers/campaign";

const reducers = combineReducers({
  user,
  cart,
  flags,
  campaign,
});

export default createStore(reducers, {}, applyMiddleware(thunk));
