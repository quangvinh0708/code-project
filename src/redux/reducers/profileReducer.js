import { updateProfile } from "../../actions/profile";

const initialState = {
    profile: {
        email: "",
        name: "",
        picture: "",
        password: "",
        country: "",
        phone: "",
        job: "",
    },
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case updateProfile.updateProfileRequest().type: {
            return {
                ...state,
            };
        }
        case updateProfile.updateProfileSuccess().type: {
            return {
                ...state,
                profile: {
                    ...state.profile,
                    ...action.payload,
                },
            };
        }
        default:
            return state;
    }
};

export default profileReducer;
