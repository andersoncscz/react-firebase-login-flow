export const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS';
export const SIGNIN_FAILED = 'SIGNIN_FAILED';
export const SIGNOUT = 'SIGNOUT';

export const signInSuccess = user => ({
    type: SIGNIN_SUCCESS,
    user
});

export const signInFailed = () => ({ 
    type: SIGNIN_FAILED 
});

export const signOut = () => ({ 
    type: SIGNOUT 
});