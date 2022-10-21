import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {getAllChannelReducers} from "./reducers/chBasicReducers";


const finalReducer = combineReducers({
    getAllChannelReducers: getAllChannelReducers
})
const initialState = {}

const composeEnhancer = composeWithDevTools({})

const store = createStore(finalReducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;
