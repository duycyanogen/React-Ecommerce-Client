import axios from 'axios'

const getCart = (userID) => {
    try {
        return axios.post('http://localhost:8080/shop-cart/get-shop-cart-by-userID', {
            userID: userID
        })
    } catch (error) {
        console.log(error);
    }

}

const handleAddNewCart = (input) => {
    return axios.post('http://localhost:8080/shop-cart/add-shop-cart', {
        userID: input.userID,
        idFlower: input.idFlower,
        amount: input.amount,
    })
}

export {
    getCart,
    handleAddNewCart
}