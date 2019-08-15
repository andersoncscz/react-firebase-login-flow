import { 
    SIGNIN_SUCCESS, 
    SIGNUP_SUCCESS, 
    SIGNOUT 
} from "../actions";

const INITIAL_STATE = null

export default function userReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SIGNIN_SUCCESS: 
        case SIGNUP_SUCCESS:
            const { email, displayName, photoURL, token } = action.user
            return {
                ...state, 
                ...{ email, displayName, photoURL, token }
            };
        case SIGNOUT:
            return INITIAL_STATE;
        default:
            return state;
    }
}