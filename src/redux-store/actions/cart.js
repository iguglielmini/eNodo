import { TOTAL_LENGTH_CART } from './actionTypes';

export function saveLengthCart(value) {
  return {
    type: TOTAL_LENGTH_CART,
    lengthCart: value,
  };
}
