import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { listReducer } from "./reducers/todo-list-reducer";

const rootReducer = combineReducers({ listReducer });

export const store = createStore(rootReducer, composeWithDevTools());