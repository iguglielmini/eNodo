import {
  ADD_PRODUCT_CART,
  TOTAL_LENGTH_CART,
} from '../types/cart';

export function saveLengthCart(value) {
  return {
    type: TOTAL_LENGTH_CART,
    lengthCart: value,
  };
}

export function saveAddProductCart(value) {
  return {
    type: ADD_PRODUCT_CART,
    products: value,
  };
}
