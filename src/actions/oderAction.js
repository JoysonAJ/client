import axios from "axios";


export const rechargedPack = (token, subTotal) => async (dispatch,getState) => {

    dispatch({
        type: 'RECHARGE_ORDER_REQUEST'
    })

    try {
        const currentUser = getState().loginUserReducer.currentUser;
        const cartItem = getState().CartReducer.cartItem;
        // const dispatch = useDispatch()

        const send_data = {
            token, subTotal, currentUser, cartItem
        }
        const response = await axios.post("/api/orders/recharge_order", send_data)
        // const response = await axios.post("/api/orders/recharge_order")
        // console.log(response)

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

};