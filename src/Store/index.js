import { createStore, applyMiddleware } from "redux";
import countReducer from "./Reducers/Counter";
import thunk from "redux-thunk";

const store = createStore(countReducer, applyMiddleware(thunk));

export default store;