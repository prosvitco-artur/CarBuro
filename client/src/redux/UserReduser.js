import { UserAPI } from "./axios/getApi";

let SET_AUTHORIZATION_USER = 'GET_PRODUCT_CATEGORY';
let SET_LOGOUT = 'SET_LOGOUT';
let SET_CURRENT_USER = 'SET_CURRENT_USER';

let initialState = {
    isAuth: true,
    userName: null,
    userEmail: null,
    userRole: "ADMIN"
}

export function userReduser(state = initialState, action) {
    switch (action.type) {

        case SET_CURRENT_USER: {
            return {
                ...state,
                isAuth: action.isAuth
            }
        }
        case SET_LOGOUT: {
            return {
                ...state,
                isAuth: false
            }
        }
        default:
            return state
    }
}


export let setUserIsAuth = (isAuth) => {
    return {
        type: SET_AUTHORIZATION_USER,
        isAuth
    }
}

export let setLogout = () => {
    return{
        type: SET_LOGOUT
    }
}

export const loginDispatch = (UserData) => async (dispatch) => {
    
    let response = await UserAPI.loginUser(UserData)

    if (response.data.resultCode === 0) {
        dispatch(setUserIsAuth(true))
    } else {

    }
}
export const registerDispatch = (UserData) => async (dispatch) => {
    let response = await UserAPI.registerUser(UserData)
    if (response.data.resultCode === 0) {
        dispatch(setUserIsAuth(true))
    } else {

    }
}