
export const AuthActionTypes = {
    'AUTH_INIT': 'AUTH_INIT',
    'AUTH_SUCCESS': 'AUTH_ERROR',
    'AUTH_ERROR': 'AUTH_ERROR',
};

const authInit = () => ({
    type: AuthActionTypes.AUTH_INIT,
});

const authSuccess = () => ({
    type: AuthActionTypes.AUTH_SUCCESS,
});

const authError = () => ({
    type: AuthActionTypes.AUTH_ERROR,
});