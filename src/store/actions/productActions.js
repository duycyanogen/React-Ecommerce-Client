import actionTypes from './actionTypes'
import { getAll } from '../../services/flowerService';
// export const fetchProductStart = () => ({
//     type: actionTypes.FETCH_PRODUCT_START
// })

export const getAllProduct = () => {
    return async (dispatch, getState) => {
        try {

            dispatch(fetchProductStart());
            await getAll().then(res => {
                console.log(res.data.object)
                dispatch(fetchProductStop(res.data.object))
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

