import { TOTAL_LENGTH_CART } from './actionTypes';

function saveLengthCart(value) {
  return {
    type: TOTAL_LENGTH_CART,
    lengthCart: value,
  };
}

/* eslint-disable */
export {
  saveLengthCart
};
/* eslint-enable */
