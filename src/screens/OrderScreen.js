import React, {useEffect} from 'react';
import {getUserOrder} from "../actions/oderAction";
import {useDispatch, useSelector} from "react-redux";
import {getUserOrderReducer} from "../reducers/GetOrderReducer";
import Loading from "../components/Loading";
import Error from "../components/Error";
import {Col, Row} from "react-bootstrap";

function OrderScreen(props) {
    const orderState = useSelector(state => state.getUserOrderReducer)
    const {loading, orders, error} = orderState;

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUserOrder())
    }, [dispatch]);

    return (

        <>
            {console.log(orders)}
            <div>
                <h1>
                    Orders Screen.......................
                </h1>
                {loading && <Loading/>}
                {error && (<Error error={"Something went wromg"}/>)}
                {
                    orders && orders.map(item => (
                        <Row>
                            <Col md={5}>
                                <h2>
                                    {item.name}
                                </h2>
                                <h2>
                                    {item.transcation_Id}
                                </h2>
                            </Col>
                            <Col md={5}>
                                {item.order_Items.map(packDetails => (
                                        <>
                                            <h2>
                                                pack name : {packDetails.name}
                                            </h2>

                                            <h2>
                                                Duration {packDetails.planTime}
                                            </h2>
                                        </>

                                    )
                                )
                                }
                                <h2>
                                    {item.orderAmount}
                                </h2>

                            </Col>

                        </Row>

                    ))
                }
            </div>
        </>
    );
}

export default OrderScreen;

// <div>
//     <h2>
//         {item.name}
//
//     </h2>
//     <h2>
//         {item.order_Items.map(packDetails => (
//             <>
//                 <h2>
//                     pack name : {packDetails.name}
//                 </h2>
//                 <h2>
//                     Duration {packDetails.planTime}
//                 </h2> <h2>
//                 Total amount {packDetails.total_amt}
//             </h2>