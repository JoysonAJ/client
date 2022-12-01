import {communityQuestionActiom} from "../actions/communityAction";

export const communityQuestionReducer = (state = {}, action) => {
    switch (action.type) {
        case 'USER_QUESTION_REQUEST':
            return ({
                loading: true
            });
        case 'USER_QUESTION_SUCCESS':
            return ({
                loading: false,
                success: true
            })
        case 'USER_QUESTION_FAILED':
            return ({
                loading: false,
                error: action.payload
            })
        default:
            return state;
    }
}