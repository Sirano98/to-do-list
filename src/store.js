import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { listReducer } from "./reducers/todo-list-reducer";
import { alertReducer } from "./reducers/alert-reducer";

const rootReducer = combineReducers({ listReducer, alertReducer });

export const store = createStore(rootReducer, composeWithDevTools());