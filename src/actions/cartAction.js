// import {cartReducer} from "../reducers/cartReducer";

export const addToCart = (channel, planTime, planType) => (dispatch, getState) => {

    let cartItem = {
        name: channel.name,
        _id: channel._id,
        image: channel.image,
        planTime: planTime,
        planType: planType,
        price: channel.price,
        total_amt: channel.price[0][planType] * planTime
    }

    dispatch({
        type: 'ADD_TO_CART',
        payload: cartItem
    })
    const cartItems = getState().CartReducer.cartItem
    localStorage.setItem('cartItem',JSON.stringify(cartItems))
}