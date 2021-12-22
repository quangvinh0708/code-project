import {
    setListTutorial,
    setLocation,
    setOpen,
    setSidebar,
} from "../../actions/tutorial";

const initialState = {
    open: false,
    tutorialList: null,
    // location: null,
    location: null,
    openSidebar: false,
    
    locationNav: "",
};

const tutorialReducer = (state = initialState, action) => {
    switch (action.type) {
        case setOpen.setOpen().type: {
            return {
                ...state,
                open: action.payload,
            };
        }
        case setListTutorial.setListTutorial().type: {
            return {
                ...state,
                tutorialList: action.payload,
            };
        }
        case setLocation.setLocation().type: {
            return {
                ...state,
                location: action.payload,
            };
        }

        case setSidebar.setSidebar().type: {
            return {
                ...state,
                openSidebar: action.payload,
            };
        }

        default:
            return state;
    }
};

export default tutorialReducer;
