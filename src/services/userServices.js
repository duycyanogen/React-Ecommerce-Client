import axios from 'axios'

const handleLogin = (userName, password) => {
    return axios.post('http://localhost:8080/account/login', {
        // email: userName,
        phone: userName,
        password: password
    });
}

const handleRegis = (input) => {
    return axios.post('http://localhost:8889/api/v1/regis', {
        email: input.email,
        password: input.password,
        name: input.name,
        address: input.address,
        phone: input.phone
    })
}

export {
    handleLogin,
    handleRegis
}