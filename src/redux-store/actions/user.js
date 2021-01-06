import {
  USER_SAVE, USER_EDIT, USER_DECREASE_NOTIFICATION
} from './actionTypes';

export function saveUser(payload) {
  return {
    type: USER_SAVE,
    payload,
  };
}

export function editUser(payload) {
  return {
    type: USER_EDIT,
    payload,
  };
}

export function decreaseNotification() {
  return {
    type: USER_DECREASE_NOTIFICATION,
  };
}
