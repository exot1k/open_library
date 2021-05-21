import {applyMiddleware, combineReducers, createStore} from "redux";
import {openLibraryReducer} from "./OpenLibraryReducer"
import thunk  from "redux-thunk";

const reducers = combineReducers({
    openLibrary: openLibraryReducer
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store;

window.store = store;