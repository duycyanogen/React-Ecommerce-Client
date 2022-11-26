
import actionTypes from '../actions/actionTypes';
const initialState = {
    isLoggedIn: false,
    // userInfo: JSON.parse(localStorage.getItem("user"))
    userInfo: localStorage.getItem("user")
}
const userReducer = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.USER_LOGIN_SUCCESS:
            let copyState = { ...state };
            copyState.userInfo = action.userInfo;
            copyState.isLoggedIn = true;
            return { ...copyState }
        case actionTypes.USER_LOGIN_FAIL:
            return {
                state
            }
        default:
            return state;
    }
}

export default userReducer;