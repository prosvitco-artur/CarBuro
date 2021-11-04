import { getProduct } from "./axios/getApi";

let SET_AUTHORIZATION_USER = 'GET_PRODUCT_CATEGORY';

let initialState = {
    isAuth: true,
}

export function user(state = initialState, action) {
    switch (action.type) {

        case SET_CURRENT_USER: {
            return {
                ...state,
                isAuth: action.isAuth
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