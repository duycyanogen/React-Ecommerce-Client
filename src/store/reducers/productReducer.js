
import actionTypes from '../actions/actionTypes';
const initialState = {
    listProducts: []
}
const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_PRODUCT_START:
            return {
                state
            }
        case actionTypes.FETCH_PRODUCT_STOP:
            let copyState = { ...state };
            copyState.listProducts = action.listProducts;
            return { ...copyState }
        case actionTypes.FETCH_PRODUCT_END:
            return {
                state
            }
        default:
            return state;
    }
}

export default productReducer;