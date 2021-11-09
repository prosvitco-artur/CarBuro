import {getProduct} from "./axios/getApi";

let GET_PRODUCT_CATEGORY = 'GET_PRODUCT_CATEGORY';


let initialState = {
    category: {
        "Interior": [
            {name: 'Mirrors', image: 'img/category/Headerpanels.jpg', id: 0},
            {name: 'Doors', image: 'img/category/Headerpanels.jpg', id: 1},
            {name: 'Bumpers and components', image: 'img/category/Headerpanels.jpg', id: 2},
            {name: 'Hoods and components', image: 'img/category/Headerpanels.jpg', id: 3},
            {name: 'Auto glass', image: 'img/category/Headerpanels.jpg', id: 4},
            {name: 'Fenders and components', image: 'img/category/Headerpanels.jpg', id: 5},
            {name: 'Front panels', image: 'img/category/Headerpanels.jpg', id: 6},
            {name: 'Fuel tanks components', image: 'img/category/Headerpanels.jpg', id: 7},
            {name: 'Liftgate and Hatch components', image: 'img/category/Headerpanels.jpg', id: 8},
            {name: 'Radiator support and components', image: 'img/category/Headerpanels.jpg', id: 9},
            {name: 'Header panels', image: 'img/category/Headerpanels.jpg', id: 10},
            ],
        "Exterior": [
            'test'
        ],
        "Repair parts": [
            'test'
        ],
        "Body parts": [
            'test'
        ],
        "Oils & Fluids": [
            'test'
        ],
        "Wheels & Tires": [
            'test'
        ],
        "Lighting": [
        ],
        "Electronics": [
            'test'
        ],
        "Tools & Garage": [
            'test'
        ],
    }
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