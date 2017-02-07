import {SET_CURRENT_USER} from 'constants/actionTypes';
import isEmpty from 'lodash/isEmpty';

const initialState = {
  isAuthenticated: false,
  user: {}
};

export function authentication(state = initialState, action = {}) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        isAuthenticated: !isEmpty(action.user),
        user: action.user
      };
    default:
      return state;
  }
}