import axios from 'axios'

const handleGetAllTransactionByUser = (userID) => {
    return axios.post('http://localhost:8080/transaction/get-transaction-by-user', {
        "userID": userID
    })
}

const handleGetAllTransaction = () => {
    return axios.post('http://localhost:8080/transaction/get-all-transaction')
}

const handleAddNewTransaction = (input) => {
    return axios.post('http://localhost:8080/transaction/add-transaction', input)
}

const handleDeleteTransaction = (transactionID) => {
    return axios.post('http://localhost:8080/transaction/cancel-transaction', {
        id: transactionID
    })
}

const handleUpdateStatusTransaction = (transactionID, status) => {
    return axios.post('http://localhost:8080/transaction/update-status-transaction', {
        id: transactionID,
        status: status
    })
}



export {
    handleAddNewTransaction,
    handleDeleteTransaction,
    handleGetAllTransactionByUser,
    handleGetAllTransaction,
    handleUpdateStatusTransaction
}