import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { profileListReducer, profileDetailsReducer, profileDeleteReducer } from "./components/reducers/profileDataReducers";


// use empty object if no reducer
const reducer = combineReducers({
    profileList: profileListReducer,
    profileDetails: profileDetailsReducer,
    profileDeleted: profileDeleteReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(reducer, initialState,
    composeWithDevTools(applyMiddleware(...middleware)));

export default store;
