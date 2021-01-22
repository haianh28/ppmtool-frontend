import { SET_CURRENT_USER } from "../action/type";

const inittialState = {
  user: {},
  invalidToken: false,
};

const booleanActionPayload = (payload) => {
  if (payload) {
    return true;
  } else {
    return false;
  }
};

export default function (state = inittialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        invalidToken: booleanActionPayload(action.payload),
        user: action.payload,
      };
    default:
      return state;
  }
}
