import { openModalShare } from "../../actions/modalShareCode";

const initialState = {
    modalShareIsOpen: false,
    link: null,
    progress: false,
    isLoading: false,
};

const modalShareReducer = (state = initialState, action) => {
    switch (action.type) {
        case openModalShare.openModalShareRequest().type: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case openModalShare.openModalShareSuccess().type: {
            return {
                ...state,
                modalShareIsOpen: true,
                isLoading: false,
                link: action.payload,
            };
        }
        case openModalShare.openModalShareFailure().type: {
            return {
                ...state,
                modalShareIsOpen: false,
                isLoading: false,
                link: null,
            };
        }

        // case SET_PROGRESS: {
        //     return {
        //         ...state,
        //         progress: action.payload,
        //     };
        // }
        // case "SET_LOADING": {
        //     return {
        //         ...state,
        //         isLoading: action.payload,
        //     };
        // }

        default:
            return state;
    }
};

export default modalShareReducer;
