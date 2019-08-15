export const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS';
export const SIGNIN_FAILED = 'SIGNIN_FAILED';

export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILED = 'SIGNUP_FAILED';

export const SIGNOUT = 'SIGNOUT';

export const signInSuccess = user => ({
    type: SIGNIN_SUCCESS,
    user
});

export const signInFailed = () => ({ 
    type: SIGNIN_FAILED 
});

export const signUpSuccess = user => ({
    type: SIGNUP_SUCCESS,
    user
});

export const signUpFailed = () => ({ 
    type: SIGNUP_FAILED 
});

export const signOut = () => ({ 
    type: SIGNOUT 
});