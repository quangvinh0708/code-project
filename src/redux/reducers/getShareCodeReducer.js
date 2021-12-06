import { getShareCode } from "../../actions/getShareCode";
import { openModalShare } from "../../actions/modalShareCode";

const initialState = {
    // modalShareIsOpen: false,
    isLoading: true,
};

const getShareCodeReducer = (state = initialState, action) => {
    switch (action.type) {
        case getShareCode.getShareCodeRequest().type: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case getShareCode.getShareCodeSuccess().type: {
            return {
                ...state,
                isLoading: false,
            };
        }
        case getShareCode.getShareCodeFailure().type: {
            return {
                ...state,
                isLoading: false,
            };
        }

        default:
            return state;
    }
};

export default getShareCodeReducer;
