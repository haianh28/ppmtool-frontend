import {GET_PROJECT, GET_PROJECTS} from "../action/type";

const inittialState = {
    projects:[],
    project :{}
};

export default function(state = inittialState,action){
    switch(action.type){
        case GET_PROJECTS:
            return {
                ...state,
                projects:action.payload
            };
            case GET_PROJECT:
                return {
                ...state,
                project:action.payload
                }
            default:
                return state;
    }
}