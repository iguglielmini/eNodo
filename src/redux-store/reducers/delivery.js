import {
  DELIVERY_UPDATE,
  DELIVERY_CLEAR,
} from '../types/delivery';

const initialState = {
  basket: null,
  cep: null,
  formatedCep: null,
  products: [],
};

export default function deliveryReducer(state = initialState, action) {
  switch (action.type) {
    case DELIVERY_UPDATE:
      return {
        ...state,
        ...action.payload,
      };
    case DELIVERY_CLEAR:
      return {
        ...initialState,
        ...action.payload
      };
    default:
      return state;
  }
}
