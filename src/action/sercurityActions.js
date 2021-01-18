import axios from "axios"
import { GET_ERRORS, SET_CURRENT_USER } from "./type";

export const  createNewUser = (newUser,history) => async (dispatch) =>{
    await axios.post("/api/user/register", newUser);
    history.push("/login")
    try {
        dispatch({
            type:GET_ERRORS,
            payload:{}
        });
    } catch (err) {
        dispatch({
            type:GET_ERRORS,
            payload: err.response.data
        });
    }
}