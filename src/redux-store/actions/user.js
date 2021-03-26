import {
  USER_SAVE,
  USER_CLEAR,
} from '../types/user';

export function saveUser(payload) {
  return {
    type: USER_SAVE,
    payload,
  };
}

export function clearUser(expired) {
  const payload = { expired };

  return {
    type: USER_CLEAR,
    payload
  };
}
