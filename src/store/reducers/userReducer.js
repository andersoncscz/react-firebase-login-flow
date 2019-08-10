import { SIGNIN_SUCCESS, SIGNOUT } from "../actions";

const INITIAL_STATE = null

export default function userReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SIGNIN_SUCCESS:
            const { email, displayName, token } = action.user
            return {
                ...state, 
                ...{ email, displayName, token }
            };
        case SIGNOUT:
            return INITIAL_STATE;
        default:
            return state;
    }
}