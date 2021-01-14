import {combineReducers} from "redux"
import backlogReducer from "./backlogReducer"
import errorReducer from "./errorReducer"
import projectReducer from "./projectReducer"

export default combineReducers({
    errors : errorReducer,
    project: projectReducer,
    backlog : backlogReducer   //khi update hay insert sẽ goi toi day va lay du lieu hoac luu du lieu vao state
})