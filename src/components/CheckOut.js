import React from 'react';
import StripeCheckout from "react-stripe-checkout";
import {useDispatch, useSelector} from "react-redux";
import {rechargeOrderReducer} from "../reducers/orderReducer";
import {rechargedPack} from "../actions/oderAction";

function CheckOut(props) {

    const dispatch = useDispatch();
    //oderAction file is rechargedPack

    const HandleToken = (token) => {
        console.log(token)
        console.log(currentUser)
        console.log("\n\n\n\n");
        dispatch(rechargedPack(token, props.totalAmount))
    }
    const userState = useSelector(state => state.loginUserReducer)
    const {currentUser} = userState;


    return (

        <>
            <div>

            </div>

            <div>
                <StripeCheckout
                    token={HandleToken}
                    // shippingAddress
                    stripeKey={
                        "pk_test_51LwRWZSG6dv3OaeASSYzZ2F6aMHk5CB1rE0iUFo8PH6SitnIYUfAHGbvMj3OhKd44iAdLnkzzCuvfBuI4DIWk5uZ00IIpMmmWW"
                    }
                    amount={(props.totalAmount) * 100}
                    currency={"INR"}
                >
                    <button className={"btn btn-warning btn-outline-dark btn-lg m-3"}>
                        RECHARGE NOW !
                    </button>

                </StripeCheckout>

            </div>
        </>
    );
}

export default CheckOut;