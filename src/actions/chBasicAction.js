import axios from "axios";

console.log("chBasicAction File in hand.............")
export const getAllChannel = () => async dispatch => {
    // dispatch({type:'GET_PIZZAS_REQUEST'})
    console.log("First Request for the channel");
    dispatch({type: 'GET_CHANNEL_REQUEST'});

    try {
        // const response = await axios.get("/api/channel/getallchannel");
        //path from backend to front end...... half a day wasted
        console.log("Request Sent here")
        const response = await axios.get("api/channel/channelbasic");

        dispatch({type: 'GET_PIZZAS_SUCCESS', payload: response.data})
        console.log(response)
    } catch (e) {
        console.log(e);
        dispatch({type: 'GET_PIZZAS_FAILED', payload: e});
    }
}