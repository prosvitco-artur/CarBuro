import { User } from "./axios/getApi";
import {setCurrentModal} from './GlobalReducer'

const SET_AUTHORIZATION_USER = 'GET_PRODUCT_CATEGORY';
const SET_LOGOUT = 'SET_LOGOUT';
const SET_CURRENT_USER = 'SET_CURRENT_USER';
const SET_USER_TOKEN = 'SET_USER_TOKEN';

let initialState = {
    isAuth: false,
    userName: null,
    userEmail: null,
    userRole: null,
    token: null,
}

export function userReduser(state = initialState, action) {
    switch (action.type) {

        case SET_CURRENT_USER: {
            return {
                ...state,
                isAuth: action.payload
            }
        }
        case SET_USER_TOKEN: {
            return {
                ...state,
                token: action.payload
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
        type: SET_CURRENT_USER,
        payload: isAuth
    }
}
export let setUserToken = (token) => {
    return {
        type: SET_USER_TOKEN,
        payload: token
    }
}

export let setLogout = () => {
    return {
        type: SET_LOGOUT
    }
}

export const loginDispatch = (UserData) => async (dispatch) => {
    try {
        let UserAPI = new User();
        let response = await UserAPI.loginUser(UserData)

        if (response.status === 200 && response.data.token ) {
            dispatch(setUserIsAuth(true));
            dispatch(setUserToken(response.data.token));
            dispatch(setCurrentModal(null));
        } else {
            console.log(response);
        }
    } catch (error) {
        console.log(error);
    }
}
export const registerDispatch = (UserData) => async (dispatch) => {
    let UserAPI = new User();
    let response = await UserAPI.registerUser(UserData);
    if (response.data.resultCode === 0) {
        dispatch(setUserIsAuth(true))
    } else {

    }
}