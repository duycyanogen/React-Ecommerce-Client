import axios from 'axios'

const handleLogin = (userName, password) => {
    return axios.post('http://localhost:8888/api/v1/login', {
        email: userName,
        password: password
    });
}

const handleRegis = () => {
    return axios.post('http://localhost:8888/api/v1/regis',)
}

export {
    handleLogin
}