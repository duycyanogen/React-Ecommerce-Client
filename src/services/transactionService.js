import axios from 'axios'



const handleAddNewTransaction = (input) => {
    return axios.post('http://localhost:8889/api/v1/transaction/add', input)
}

const handleDeleteTransaction = (input) => {
    return axios.post('http://localhost:8889/api/v1/transaction/delete', {
        id: input
    })
}



export {
    handleAddNewTransaction,
    handleDeleteTransaction
}