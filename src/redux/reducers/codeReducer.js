import { GET_CODE, UPDATE_CODE } from "../../constant/code";

const initialState = {
    codeData: {
        html: "",
        css: "",
        js: "",
        q: null,
        name: null,
    },
    projects: [],
    isAuthenticated: false,
    error: null,
    url: "code",
    isChanging: false,
    isDeleting: false,
};

const codeReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CODE: {
            const { html, css, js } = action.payload;
            return {
                ...state,
            };
        }
        case "SET_ERROR": {
            const error = action.payload;
            return {
                ...state,
                error,
            };
        }

        case "SET_CODE": {
            const { name, html, css, js } = action.payload;
            return {
                ...state,
                codeData: {
                    ...state.codeData,
                    html,
                    css,
                    js,
                    name,
                },
            };
        }

        case "GET_PROJECTS": {
            return {
                ...state,
            };
        }

        case "GET_PROJECTS_SUCCESS": {
            const projects = action.payload;
            return {
                ...state,
                projects: [...projects],
            };
        }

        case "SET_URL": {
            const url = action.payload;
            return {
                ...state,
                url,
            };
        }

        case "SET_IS_CHANGING": {
            const isChanging = action.payload;
            return {
                ...state,
                isChanging,
            };
        }

        case "CHANGE_NAME": {
            return {
                ...state,
            };
        }

        case "CHANGE_NAME_SUCCESS": {
            const name = action.payload;
            return {
                ...state,
                codeData: {
                    ...state.codeData,
                    name,
                },
                isChanging: false,
            };
        }

        case "SET_IS_DELETING": {
            return {
                ...state,
                isDeleting: action.payload,
            };
        }
        // case "DELETE_PROJECT": {
        //     return {
        //         ...state,
        //     };
        // }
        case "DELETE_PROJECT_SUCCESS": {
            let projects = state.projects.map(project => project._id !== action.payload._id)
            console.log("projects:", projects);
            return {
                ...state,
                projects,
            };
        }

        default:
            return state;
    }
};

export default codeReducer;
