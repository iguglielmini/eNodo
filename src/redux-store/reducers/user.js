import {
  USER_SAVE, USER_EDIT, USER_DECREASE_NOTIFICATION
} from '../actions/actionTypes';

const initialState = {
  name: null,
  lastname: null,
  phone: null,
  mail: null,
  birthday: null,
  uri: null,
  oldUri: null,
  cards: null,
  notificationsCounter: null
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case USER_SAVE:
      return {
        ...action.payload,
      };
    case USER_EDIT:
      return {
        ...state,
        ...action.payload
      };
    case USER_DECREASE_NOTIFICATION:
      return {
        ...state,
        notificationsCounter: state.notificationsCounter > 0
          ? state.notificationsCounter - 1
          : 0,
      };

    default:
      return state;
  }
}
