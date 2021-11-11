const TOGGLE_MODAL  = 'TOGGLE_MODAL';

let initialState = {
    popup: null
}

const globalReducer = (state = initialState, action) => {
    switch (action.type) {

        case TOGGLE_MODAL: {
            return {
                ...state,
                popup: action.current,
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

export default globalReducer;