import {
  USER_SAVE,
  USER_CLEAR,
} from '../types/user';

const initialState = {
  addresses: null,
  birthDate: null,
  cpf: null,
  email: null,
  gender: null,
  id: null,
  name: null,
  surname: null,
  expired: false,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case USER_SAVE:
      return {
        ...state,
        ...action.payload,
      };
    case USER_CLEAR:
      return {
        ...initialState,
        ...action.payload,
      };
    default:
      return state;
  }
}
