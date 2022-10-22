import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {getAllChannelReducers} from "./reducers/chBasicReducers";
import {CartReducer} from "./reducers/cartReducer";


const finalReducer = combineReducers({
    getAllChannelReducers: getAllChannelReducers,
    CartReducer: CartReducer
})

const cartItem = localStorage.getItem('cartItem') ? JSON.parse(localStorage.getItem('cartItem')) : []

const initialState = {
//    cart local storage ......
    CartReducer: {
        cartItem: cartItem
    }
}

const composeEnhancer = composeWithDevTools({})

const store = createStore(finalReducer, initialState, composeEnhancer(applyMiddleware(thunk)));


export default store;
