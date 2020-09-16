import axios from "../util/axios.base";
import {START,AUTH_SUCCESS,FAILED,LOGOUT_SUCCESS}  from "./types";


export const authStart = () => ({
    type: START, 
    payload: {
      isloading: true
    }
  });
  
  export const authSuccess = (token, user, msg) => ({
    type: AUTH_SUCCESS,
    payload: {
      token,
      user, 
      msg
    }
  });

  export const authFailed = msg => ({
    type: FAILED,
    payload: msg
  });

  export const login = (data) => {
    return (dispatch) => {
        dispatch(authStart())
        axios.post("/user/login",data)
        .then(res => {
            const { token, user } = res.data;
            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(user));
            dispatch(authSuccess(token, user))
        })
        .catch(err => dispatch(authFailed(err)))
    }
  }

  export const register = (data) => {
    return (dispatch) => {
        dispatch(authStart())
        axios.post("/user/signup",data)
        .then(res => {
            const { token, user } = res.data;
            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(user));
            dispatch(authSuccess(token, user))
        })
        .catch(err => dispatch(authFailed(err)))
    }
  }

  export const logout = () => {
    return {
      type: LOGOUT_SUCCESS
    }
  };