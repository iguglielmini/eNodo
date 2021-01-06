import {
  SAVE_NEW_FLAGS
} from './actionTypes';

export default function saveNewFlags(payload) {
  return {
    type: SAVE_NEW_FLAGS,
    payload,
  };
}
