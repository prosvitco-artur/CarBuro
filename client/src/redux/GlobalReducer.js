const TOGGLE_MODAL = 'TOGGLE_MODAL';
const TOGGLE_CURRENT_LANGUAGES = 'TOGGLE_CURRENT_LANGUAGES';
const EDIT_PRELOAD = 'EDIT_PRELOAD';

let initialState = {
    popup: null,
    languages: ['EN', 'UA', 'RU', 'DE'],
    currentLanguages: 0,
    preload: false
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
        case EDIT_PRELOAD: {
            return {
                ...state,
                preload: action.payload,
            };
        }
        default:
            return state
    }
}

export const setCurrentModal = (current) => {
    return {
        type: TOGGLE_MODAL,
        payload: current
    }
}
export const editCurrentLanguages = (current) => {
    return {
        type: TOGGLE_CURRENT_LANGUAGES,
        payload: current
    }
}

export const setPreloader = (payload) => {
    return {
        type: EDIT_PRELOAD,
        payload
    }
}

export const changeUserLanguages = (valueLanguage) => async (dispatch) => {
    dispatch(setPreloader(true));
    setTimeout(() => {
        dispatch(editCurrentLanguages(valueLanguage))
        dispatch(setPreloader(false))
    }, 2000)
}

export default globalReducer;