import {Category, getProduct} from "./axios/getApi";

let CREATE_NEW_CATEGORY = 'CREATE_NEW_CATEGORY';
const LOAD_CATEGORY = 'LOAD_CATEGORY';


let initialState = {
    category: null
}

export function CategoryReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_CATEGORY: {
            return {
                ...state,
                category: action.payload,
            };
        }
        default:
            return state
    }
}

export const loadCategory = (category) => {
    return {
        type: LOAD_CATEGORY,
        payload: category 
    }
}


export const setCategory = () => async (dispatch) => {
    let categoryClass = new Category();
    let category = await categoryClass.getAllFirst(); 
    dispatch(loadCategory(category.data.category))
}

export const setCategoryMenu = (parentId) => async (dispatch) => {
    let categoryClass = new Category();
    let category = await categoryClass.getChild(parentId); 
    dispatch(loadCategory(category.data.category))
}
