import React from 'react';
import StripeCheckout from "react-stripe-checkout";
import {useSelector} from "react-redux";

function CheckOut(props) {
    const HandleToken = (token)=>{
        console.log(token)
        console.log(currentUser)
    }
    const userState = useSelector(state => state.loginUserReducer)
    const {currentUser} = userState;
    return (

        <>
            <div>

               <StripeCheckout
                   token={HandleToken}
                   stripeKey={
                   "pk_test_51LwRWZSG6dv3OaeASSYzZ2F6aMHk5CB1rE0iUFo8PH6SitnIYUfAHGbvMj3OhKd44iAdLnkzzCuvfBuI4DIWk5uZ00IIpMmmWW"
                   }
                   amount={(props.totalAmount)*-100}
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