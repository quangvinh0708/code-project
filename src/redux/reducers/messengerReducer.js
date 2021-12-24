import {
    openMessenger,
    setAllMess,
    setCurrentObj,
    setDisplay,
    setFriends,
    setId,
    setImageWillBeShow,
    setMess,
    setMessage,
    setUpdateSeen,
    setViewMessenger,
} from "../../actions/messenger";

const initialState = {
    message: "",
    mess: [],
    id: "",
    friends: [],
    online: false,
    currentObj: {},
    currentMess: [],
    display: false,
    imageWillBeShow: "",
    openImageModal: false,
    blocklist: [],
    myObj: {},
    viewMessenger: 0,
    isOpenMessenger: false,
    arrDisplay: [],
};

const messengerReducer = (state = initialState, action) => {
    switch (action.type) {
        case setMessage.setMessageRequest().type: {
            return {
                ...state,
            };
        }
        case setMessage.setMessageSuccess().type: {
            const message = action.payload;
            return {
                ...state,
                message,
            };
        }

        case setId.setIdRequest().type: {
            return {
                ...state,
            };
        }
        case setId.setIdSuccess().type: {
            const id = action.payload;
            return {
                ...state,
                id,
            };
        }

        case setMess.setMessRequest().type: {
            return {
                ...state,
            };
        }
        case setMess.setMessSuccess().type: {
            return {
                ...state,
                mess: state.mess.concat(action.payload),
            };
        }

        case setAllMess.setAllMessSuccess().type: {
            return {
                ...state,
                mess: action.payload,
            };
        }

        case setCurrentObj.setCurrentObjSuccess().type: {
            const objId = action.payload;
            const currentObj = state.friends.find((ele) => ele.objId === objId);
            // const currentMess = state.mess.filter(
            //     (mes) =>
            //         mes.objIds.includes(state.id) && mes.objIds.includes(objId) && mes
            // );
            return {
                ...state,
                currentObj,
                // currentMess,
            };
        }

        case setFriends.setFriendsSuccess().type: {
            let friends = action.payload;

            return {
                ...state,
                friends,
            };
        }

        case setDisplay.setDisplaySuccess().type: {
            return {
                ...state,
                display: action.payload,
            };
        }

        case setImageWillBeShow.setImageWillBeShowSuccess().type: {
            return {
                ...state,
                imageWillBeShow: action.payload,
                openImageModal: true,
            };
        }
        case setImageWillBeShow.setImageWillBeShowFailure().type: {
            return {
                ...state,
                imageWillBeShow: "",
                openImageModal: false,
            };
        }

        case setUpdateSeen.setUpdateSeenSuccess().type: {
            return {
                ...state,
                mess: action.payload,
            };
        }

        case setViewMessenger.setViewMessengerSuccess().type: {
            return {
                ...state,
                viewMessenger: action.payload,
            };
        }

        case openMessenger.openMessengerSuccess().type: {
            return {
                ...state,
                isOpenMessenger: action.payload,
                viewMessenger: 0,
            };
        }

        default:
            return state;
    }
};

export default messengerReducer;
