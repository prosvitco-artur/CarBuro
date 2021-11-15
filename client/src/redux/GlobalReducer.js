const TOGGLE_MODAL  = 'TOGGLE_MODAL';
const TOGGLE_CURRENT_LANGUAGES  = 'TOGGLE_CURRENT_LANGUAGES';

let initialState = {
    popup: null,
    languages: ['EN', 'UA', 'RU', 'DE'],
    currentLanguages: 0,
}

const globalReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case TOGGLE_MODAL: {
            return {
                ...state,
                popup: action.payload,
            };
        }
        case TOGGLE_CURRENT_LANGUAGES: {
            return {
                ...state,
                currentLanguages: action.payload,
            };
        }
        default:
            return state
    }
}

export const setCurrentModal = (current) => {
    return {
        type: TOGGLE_MODAL,
        payload :current
    }
}
export const editCurrentLanguages = (current) => {
    
    return {
        type: TOGGLE_CURRENT_LANGUAGES,
        payload :current
    }
}

export default globalReducer;