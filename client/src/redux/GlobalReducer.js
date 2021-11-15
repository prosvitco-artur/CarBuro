const TOGGLE_MODAL  = 'TOGGLE_MODAL';
const TOGGLE_CURRENT_LANGUAGES  = 'TOGGLE_CURRENT_LANGUAGES';

let initialState = {
    popup: null,
    languages: ['EN', 'UA', 'RU', 'DE'],
    currentLanguages: 0
}

const globalReducer = (state = initialState, action) => {
    debugger
    switch (action.type) {

        case TOGGLE_MODAL: {
            return {
                ...state,
                popup: action.current,
            };
        }
        case TOGGLE_CURRENT_LANGUAGES: {
            debugger
            return {
                ...state,
                currentLanguages: action.current,
            };
        }
        default:
            return state
    }
}

export const setCurrentModal = (current) => {
    return {
        type: TOGGLE_MODAL,
        current
    }
}
export const editCurrentLanguages = (current) => {
    debugger
    return {
        type: TOGGLE_CURRENT_LANGUAGES,
        current
    }
}

export default globalReducer;