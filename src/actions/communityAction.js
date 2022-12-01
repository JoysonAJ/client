import axios from "axios";

export const communityQuestionActiom = (questionObj) => async (dispatch) => {
    //register request dispatched from here............
    dispatch({type: 'USER_QUESTION_REQUEST'})

    try {
        console.log(questionObj)

        const response = await axios.post('/api/community/question', questionObj);
        console.log(response);
        dispatch({type: 'USER_QUESTION_SUCCESS', payload: response.data});
    } catch (e) {
        console.log("error ocured.....");
        console.log(e);
        dispatch({type: 'USER_QUESTION_FAILED', payload: e});
    }
}