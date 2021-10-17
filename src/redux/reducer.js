import * as types from './actionTypes';

const initialState = {
  isLoading: false,
  users: [],
  error: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_USER_START:
      return {
        ...state,
        isLoading: true,
      };
    case types.LOAD_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        users: action.payload,
      };
    case types.LOAD_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
