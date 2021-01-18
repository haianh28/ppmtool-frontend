import { SET_CURRENT_USER } from "../action/type";

const inittialState = {
    users: [],
    user: {}
};

export default function (state = inittialState, action) {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                user: action.payload
            }
        default:
            return state;
    }
}