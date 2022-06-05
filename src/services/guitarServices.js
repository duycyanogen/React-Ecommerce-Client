import axios from 'axios'

const getAll = () => {
    return axios.get('http://localhost:8889/api/v1/guitar');
}

const handleRegis = () => {
    return axios.post('http://localhost:8889/api/v1/regis',)
}

export {
    getAll
}