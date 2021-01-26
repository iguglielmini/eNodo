import { CART_TOKEN, TOTAL_LENGTH_CART, ADD_PRODUCT_CART } from '../actions/actionTypes';

const initialState = {
  token: null,
  products: [],
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
    case ADD_PRODUCT_CART:
      return {
        ...state,
        products: action.products,
      }
    default:
      return state;
  }
}
