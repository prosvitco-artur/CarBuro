import {getProduct} from "./axios/getApi";

let GET_PRODUCT_CATEGORY = 'GET_PRODUCT_CATEGORY';


let initialState = {
}



export function product(state = initialState, action) {
    switch (action.type) {

        default:
            return state
    }
}

export let getAllProductCategory = (category) => {
    return {
        type: GET_PRODUCT_CATEGORY,
        category
    }
}

export const getProductCategory = () => async (dispatch) => {
    let response = await getProduct.getProductCategory();
    dispatch(getAllProductCategory(response));
}
// export const updateProfile = (profileData) => async (dispatch) => {
//     let response = await currentUserData.setProfileData(profileData)
//     if (response.data.resultCode === 0) {
//         dispatch(setProfile(profileData));
//     }
// }