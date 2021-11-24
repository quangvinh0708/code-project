import { OPEN_MODAL, CLOSE_MODAL, OPEN_MODAL_SUCCESS, SET_PROGRESS } from "../../constant/modal";

const initialState = {
    modalIsOpen: false,
    progress: false,
    isLoading: false,
};

const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_MODAL: {
            return {
                ...state,
            };
        }
        case OPEN_MODAL_SUCCESS: {
            return {
                ...state,
                modalIsOpen: true,
            }
        }
        case CLOSE_MODAL: {
            return {
                ...state,
                modalIsOpen: false,
            };
        }

        case SET_PROGRESS: { 
            return {
                ...state,
                progress: action.payload
            }
        }
        case "SET_LOADING": {
            return {
                ...state,
                isLoading: action.payload
            }
        }

        default:
            return state;
    }
};

export default modalReducer;
