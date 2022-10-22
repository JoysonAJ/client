import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {CartReducer} from "../reducers/cartReducer";

function CartScreen(props) {

    const cartState = useSelector(state => state.CartReducer);
    const cartItem = cartState.cartItem;
    return (
        <>
            <div className={"cart-heading"}>
                <h1 className={"d-flex justify-content-center"}>
                    Cart Screen.......
                </h1>

                <div className={"row justify-content-center"}>
                    <div className={"col-md-6"}>

                    </div>
                    <div className={"col-md-4"}>

                    </div>

                </div>
            </div>
        </>
    );
}

export default CartScreen;