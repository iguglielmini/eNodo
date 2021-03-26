import {
  SAVE_NEW_FLAGS,
} from '../types/flags';

export function saveNewFlags(payload) {
  return {
    type: SAVE_NEW_FLAGS,
    payload,
  };
}

export default {};
