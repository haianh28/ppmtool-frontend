import { GET_ERRORS } from "../action/type";


const inittialState = {};

export default function(state= inittialState,action){
    switch (action.type) {
        case GET_ERRORS:
          return action.payload;
    
        default:
          return state;
      }
}