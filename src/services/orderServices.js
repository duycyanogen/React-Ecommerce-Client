import axios from 'axios'

const getOrder = (userID) => {
    return axios.post('http://localhost:8889/api/v1/getOrder', {
        userID: userID
    })
}


export {
    getOrder
}