import { setFullScreen, setLargeScreen, setView } from "../../actions/view";

const initialState = {
    status: false,
    fullScreen: false,
    largeScreen: false,
};

const viewReducer = (state = initialState, action) => {
    switch (action.type) {
        case setView.setViewRequest().type: {
            return {
                ...state,
                status: true,
            };
        }
        case setView.setViewSuccess().type: {
            return {
                ...state,
                status: action.payload,
                fullScreen: false,
                largeScreen: false,
            };
        }
        case setView.setViewFailure().type: {
            return {
                ...state,
                status: false,
            };
        }

        case setFullScreen.setFullScreenRequest().type: {
            return {
                ...state,
                status: true,
                fullScreen: true,
            };
        }
        case setFullScreen.setFullScreenSuccess().type: {
            return {
                ...state,
                status: false,
                fullScreen: true,
                
                largeScreen: false,
            };
        }
        case setFullScreen.setFullScreenFailure().type: {
            return {
                ...state,
                fullScreen: false,
                status: true,
            };
        }

        case setLargeScreen.setLargeScreenSuccess().type: {
            return {
                ...state,
                status: true,
                largeScreen: action.payload,
                fullScreen: false,
            };
        }

        default:
            return state;
    }
};

export default viewReducer;
