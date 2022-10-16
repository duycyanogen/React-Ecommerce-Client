import actionTypes from './actionTypes'
import { getAll } from '../../services/guitarServices';
// export const fetchProductStart = () => ({
//     type: actionTypes.FETCH_PRODUCT_START
// })

export const getAllProduct = () => {
    return async (dispatch, getState) => {
        try {

            dispatch(fetchProductStart());
            await getAll().then(res => {
                //console.log("Response data", res.data.data);
                dispatch(fetchProductStop(res.data.data))
            })

        } catch (error) {
            dispatch(fetchProductStop([]))
        }
        //type: actionTypes.FETCH_PRODUCT_START
    }
}

export const fetchProductStart = () => ({
    type: actionTypes.FETCH_PRODUCT_START
})

export const fetchProductStop = (listProducts) => ({
    type: actionTypes.FETCH_PRODUCT_STOP,
    listProducts: listProducts
})

