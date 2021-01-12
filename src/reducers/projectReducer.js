import {GET_PROJECT, GET_PROJECTS,DELETE_PROJECT } from "../action/type";

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
                case DELETE_PROJECT :
                return {
                ...state,
                projects:state.projects.filter(
                project => project.id !== action.payload
                )}
            default:
                return state;
    }
}