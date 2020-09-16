import { 
    LOAD_AUTH_USER_SUCCESS, 
    TOGGLE_AUTH, LOGOUT_SUCCESS, 
    START,FAILED, AUTH_SUCCESS, 
   } from "../actions/types";

const token = localStorage.getItem("token");

const initialState = {
    token,
    isLoggedIn:false,
    user: JSON.parse(localStorage.getItem('user')),
    isLoading: false,
}

const reducer = (state = initialState, action) => {
    const {payload,type} = action;
    switch (type) {
        case START:
            return {
                ...state,
                isLoading: payload.isLoading
            };
            case AUTH_SUCCESS:
            return {
            ...state,
            token: payload.token,
            user: payload.user,
            userId: payload.userId,
            isLoading: false,
            isLoggedIn: true,
            error: null,
            msg: payload.msg
        };
        case FAILED:
            return {
                ...state,
                msg: payload,
                isLoading: false
            };
        case LOGOUT_SUCCESS:
            localStorage.removeItem("user");
            localStorage.removeItem("token");
            return {
                ...state,
                token: null,
                userId: null,
                user: null,
                isLoading: false,
                error: action.error,  
                isLoggedIn: false
            }
        case TOGGLE_AUTH:
            return {
                ...state,
                isLogin: !state.isLogin
            };
        case LOAD_AUTH_USER_SUCCESS:
            return {
                ...state,
                user: action.user,
                isLoading: false
            };
        default:
            return state;
    }
}

export default reducer;