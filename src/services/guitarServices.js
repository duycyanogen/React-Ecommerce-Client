import axios from 'axios'
axios.defaults.headers = {
    'Content-Type': 'application/json',
    // ...
}
const getAll = async () => {

    // const url = "/GetAllFlower";
    // const options = {
    //     method: "GET",
    //     headers: {
    //         'Accept': "application/json",
    //         "Content-Type": "application/json;charset=UTF-8",
    //         'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJEb2FuQ3VvbmdEYWkiLCJuYW1lIjoiSERWIEdyb3VwIiwiaWF0IjoyNTAxMjAyMjA5MTE3MTE5MDB9.2VaeS_V11otO0TX6P1w9eIPQQKtlNHbGfUoS55AzkGg'
    //     },

    // };
    // fetch(url, options)
    //     .then((response) => response.json())
    //     .then((data) => {
    //         console.log(data);
    //     });
    // return await axios.get('/GetAllFlower', {
    //     headers: {
    //         'Content-Type': 'application/json'
    //     }
    // });
    // axios({
    //     method: 'get',
    //     url: '/GetAllFlower',
    //     headers: {
    //         'content-type': 'application/json'
    //     }
    // });
    //return axios({ method: 'get', url: api + '/api/user/getUserInfo?UserId=1', headers: { 'Authorization': 'Bearer ' + accessToken } })
    //console.log(axios.request.headers)
    return await axios.get('http://localhost:8080/flower/get');
    //return await axios.post("/post/select");
    //return await axios.post("http://localhost:8889/api/v1/post/select");
    //return axios.get('http://localhost:8889/api/v1/guitar');
}

const handleAddNewGuitar = (input) => {
    let formData = new FormData();
    formData.append('name', input.name);
    formData.append('price', input.price);
    formData.append('contents', input.contents);
    formData.append('discount', input.discount);
    formData.append('file', input.file);
    console.log("form", formData);
    return axios.post('http://localhost:8889/api/v1/guitar/add', formData)
}

const handleUpdateGuitar = (input) => {
    let formData = new FormData();
    formData.append('id', input.id);
    formData.append('name', input.name);
    formData.append('price', input.price);
    formData.append('contents', input.contents);
    formData.append('discount', input.discount);
    formData.append('file', input.file);
    console.log("form", formData);
    return axios.post('http://localhost:8889/api/v1/guitar/update', formData)
}

const handleDeleteGuitar = (id) => {
    return axios.post('http://localhost:8889/api/v1/guitar/delete', { id: id })
}

export {
    getAll,
    handleAddNewGuitar,
    handleUpdateGuitar,
    handleDeleteGuitar
}