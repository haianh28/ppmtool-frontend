import axios from "axios"
import setJWTToken from "../sercurityUtils/setJWTToken";
import jwt_decode from "jwt-decode";
import { GET_ERRORS, SET_CURRENT_USER } from "./type";

export const createNewUser = (newUser, history) => async dispatch => {
    try {
      await axios.post("/api/user/register", newUser);
      history.push("/login");
      dispatch({
        type: GET_ERRORS,
        payload: {}
      });
    } catch (err) {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    }
  };
  export const login = loginRquest => async dispatch =>{

    try {
      debugger
        const res = await axios.post(`/api/user/login`);
        console.log("hì",res)
        // extract token from res.data
        const {token} = res.data;
        // set token in localstogae
        localStorage.setItem("token",token);
        // set token in header
        setJWTToken(token);
        // decode jwt on react
        const decode = jwt_decode(token)
        // dispatch to our reducer
        dispatch({
          type:SET_CURRENT_USER,
          payload:decode
        })
    } catch (err) {
        dispatch({
          type:GET_ERRORS,
          payload:err.response.data
        })
    }
}