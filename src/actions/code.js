export const getCode = (q) => ({
    type: "GET_CODE",
    payload: {
        q,
    },
});

export const updateCode = (name) => ({
    type: "UPDATE_CODE",
    payload: name,
});

export const setAuthenticated = (val) => ({
    type: "SET_AUTH",
    payload: val,
});

export const setError = (err) => ({
    type: "SET_ERROR",
    payload: err,
});

export const setUrl = (url) => ({
    type: "SET_URL",
    payload: url,
});

export const setCode = (val) => ({
    type: "SET_CODE",
    payload: val,
});

export const directToCode = () => ({
    type: "DIRECT_TO_CODE",
    payload: null,
});

export const getProjects = () => ({
    type: "GET_PROJECTS",
    payload: null,
});

export const getProjectsSuccess = (value) => ({
    type: "GET_PROJECTS_SUCCESS",
    payload: value,
});

export const changeName = (val) => ({
    type: "CHANGE_NAME",
    payload: val,
});

export const changeNameSuccess = (val) => ({
    type: "CHANGE_NAME_SUCCESS",
    payload: val,
});

export const setIsChanging = (val) => ({
    type: "SET_IS_CHANGING",
    payload: val,
});

export const deleteProject = () => ({
    type: "DELETE_PROJECT",
    payload: null,
});

export const deleteProjectSuccess = (val) => ({
    type: "DELETE_PROJECT",
    payload: val,
});

export const setIsDeleting = (val) => ({
    type: "SET_IS_DELETING",
    payload: val,
});
