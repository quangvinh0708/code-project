import { createActions } from "redux-actions";

export const setOpen = createActions({
    setOpen: (val) => val,
});

export const setListTutorial = createActions({
    setListTutorial: (val) => val,
});

export const setLocation = createActions({
    setLocation: (val) => val,
});

export const setSidebar = createActions({
    setSidebar: (val) => val,
});

export const setLocationNav = createActions({
    setLocationNav: (val) => val,
});
