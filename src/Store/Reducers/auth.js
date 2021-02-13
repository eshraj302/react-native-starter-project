import { AuthActionTypes } from "../Actions/auth";

const initialState = {
    isLoggedIn: false,
    error: null,
    data: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case AuthActionTypes.AUTH_INIT:
        case AuthActionTypes.AUTH_SUCCESS:
        case AuthActionTypes.AUTH_ERROR:
            return state;
        default:
            return state;
    }
}