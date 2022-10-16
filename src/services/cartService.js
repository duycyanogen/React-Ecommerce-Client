import axios from 'axios'

const getCart = (userID) => {
    return axios.post('http://localhost:8889/api/v1/getCart', {
        userID: userID
    })
}

const handleAddNewCart = (input) => {
    return axios.post('http://localhost:8889/api/v1/cart/add', {
        userID: input.userID,
        idGuitar: input.idGuitar,
        quantity: input.quantity,
        amount: input.amount,
    })
}

export {
    getCart,
    handleAddNewCart
}