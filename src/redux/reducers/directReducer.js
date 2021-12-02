import { direct, verifyUrlRecover } from "../../actions/direct";
import { getProfile, updateProfile } from "../../actions/profile";

const initialState = {
    time: 0,
    appear: false,
    /** waiting */
    isVerify: true,
    isWaiting: true,
    notify: "Notify",
    message: "",
};

const directReducer = (state = initialState, action) => {
    switch (action.type) {
        case direct.directRequest().type: {
            return {
                ...state,
            };
        }
        case direct.directSuccess().type: {
            return {
                ...state,
                time: action.payload,
                appear: true,
            };
        }
        case direct.directFailure().type: {
            return {
                ...state,
                time: 0,
                appear: action.payload || false,
            };
        }

        case verifyUrlRecover.verifyUrlRecoverRequest().type: {
            return {
                ...state,
                isVerify: action.payload.isVerify,
                isWaiting: true,
            };
        }

        case getProfile.getProfileRequest().type: {
            return {
                ...state,
                isVerify: action.payload.isVerify,
                isWaiting: true,
            };
        }

        case updateProfile.updateProfileRequest().type: {
            return {
                ...state,
                isVerify: action.payload.isVerify,
                isWaiting: true,
            };
        }

        case verifyUrlRecover.verifyUrlRecoverSuccess().type: {
            return {
                ...state,
                isVerify: action.payload.isVerify,
                isWaiting: action.payload.isWaiting,
                message: action.payload.message,
            };
        }
        case verifyUrlRecover.verifyUrlRecoverFailure().type: {
            return {
                ...state,
                isVerify: action.payload,
                isWaiting: false,
            };
        }

        default:
            return state;
    }
};

export default directReducer;
