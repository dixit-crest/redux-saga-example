import { applyMiddleware, compose, createStore } from "redux";
import userReducer from "./users/reducer";

import createSagaMiddleware from "redux-saga";
import { watcherUser } from "./users/saga";

const sagaMiddleware = createSagaMiddleware();

let store = createStore(userReducer, compose(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(watcherUser);

export default store;
