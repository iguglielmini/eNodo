import { CART_TOKEN, TOTAL_LENGTH_CART } from "../actions/actionTypes";

const initialState = {
  token: null,
  lengthCart: 0,
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case CART_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    case TOTAL_LENGTH_CART:
      return {
        ...state,
        lengthCart: action.lengthCart,
      };
    default:
      return state;
  }
}
