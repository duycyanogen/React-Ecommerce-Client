import axios from 'axios'

const handleGetAllTransactionByUser = (userID) => {
    return axios.post('http://localhost:8080/transaction/get-transaction-by-user', {
        "userID": userID
    })
}

const handleAddNewTransaction = (input) => {
    return axios.post('http://localhost:8080/transaction/add-transaction', input)
}

const handleDeleteTransaction = (transactionID) => {
    return axios.post('http://localhost:8080/transaction/cancel-transaction', {
        id: transactionID
    })
}



export {
    handleAddNewTransaction,
    handleDeleteTransaction,
    handleGetAllTransactionByUser
}