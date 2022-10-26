import axios from "axios";
import {useSelector} from "react-redux";

export const rechargedPack = (token, subTotal) => async (dispatch, getState) => {
    dispatch({
        type: 'RECHARGE_ORDER_REQUEST'

    })
    const userState = useSelector(state => state.loginUserReducer)
    const {currentUser} = userState;

    const cartState = useSelector(state => state.CartReducer);
    const cartItem = cartState.cartItem;
    // const dispatch = useDispatch()

    try {
        const response = await axios.post("/api/orders/recharge_order", {token, subTotal, currentUser, cartItem})
        dispatch({
            type: 'RECHARGE_ORDER_SUCCESS'
        })
        console.log(response)
    } catch (e) {
        dispatch({
            type: 'RECHARGE_ORDER_FAILED'
        })
        console.log(e)
    }

}