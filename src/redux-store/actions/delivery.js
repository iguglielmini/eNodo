import {
  DELIVERY_UPDATE,
  DELIVERY_CLEAR,
} from '../types/delivery';

export function updateDelivery(payload) {
  return {
    type: DELIVERY_UPDATE,
    payload,
  };
}

export function clearDelivery() {
  return {
    type: DELIVERY_CLEAR,
  };
}
