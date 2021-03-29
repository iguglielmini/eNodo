import {
  USER_SAVE,
  USER_CLEAR,
  USER_FAVORITES,
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

export function favoritesUser(payload) {
  return {
    type: USER_FAVORITES,
    payload,
  }
}