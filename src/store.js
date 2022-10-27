import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {getAllChannelReducers} from "./reducers/chBasicReducers";
import {CartReducer} from "./reducers/cartReducer";
import {loginUserReducer, registerUserReducer} from "./reducers/userReducer";
import {rechargeOrderReducer} from "./reducers/orderReducer";


const finalReducer = combineReducers({
    getAllChannelReducers: getAllChannelReducers,
    CartReducer: CartReducer,
    registerUserReducer: registerUserReducer,
    loginUserReducer: loginUserReducer,
    rechargeOrderReducer:rechargeOrderReducer
})

const cartItem = localStorage.getItem('cartItem') ? JSON.parse(localStorage.getItem('cartItem')) : []

const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null

const initialState = {
//    cart local storage ......
    CartReducer: {
        cartItem: cartItem
    },
    loginUserReducer: {
        currentUser: currentUser
    },
    rechargeOrderReducer:{
        cartItem:cartItem,
        currentUser:currentUser
    }

}

const composeEnhancer = composeWithDevTools({})

const store = createStore(finalReducer, initialState, composeEnhancer(applyMiddleware(thunk)));


export default store;
