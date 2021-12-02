import { configureStore } from "@reduxjs/toolkit";
import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../saga/rootSaga";
import codeReducer from "./reducers/codeReducer";
import loginReducer from "./reducers/loginReducer";
import modalReducer from "./reducers/modalReducer";
import tutorialReducer from "./reducers/tutorialReducer";
import directReducer from "./reducers/directReducer";
import { connectRouter, routerMiddleware } from "connected-react-router";
import { history } from "../components/App";
import profileReducer from "./reducers/profileReducer";

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
    code: codeReducer,
    modal: modalReducer,
    auth: loginReducer,
    tutorial: tutorialReducer,
    direct: directReducer,
    profile: profileReducer,
    router: connectRouter(history),
});

const config = () => {
    const store = configureStore({
        reducer,
        middleware: [sagaMiddleware, routerMiddleware(history)],
    });
    sagaMiddleware.run(rootSaga);
    return store;
};
const store = config();

export default store;
