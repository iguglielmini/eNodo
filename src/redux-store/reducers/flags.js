import {
  SAVE_NEW_FLAGS
} from '../actions/actionTypes';

const initialState = [];

export default function flagReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_NEW_FLAGS:
      return action.payload;
    default:
      return state;
  }
}
