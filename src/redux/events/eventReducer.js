import { SET_REPEAT, SET_WAIT } from "./eventTypes";

const initialState = {
  repeat: {},
  wait: {},
};

export const eventReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_REPEAT:
      return {
        ...state,
        repeat: action.value,
      };

    case SET_WAIT:
      return {
        ...state,
        wait: action.value,
      };
    default:
      return state;
  }
};
