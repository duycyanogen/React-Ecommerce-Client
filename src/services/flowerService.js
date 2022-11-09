import axios from 'axios'
axios.defaults.headers = {
    'Content-Type': 'application/json',
    // ...
}
const getAll = async () => {
    return axios.get('http://localhost:8080/flower/get');
}

const handleAddNewGuitar = (input) => {
    let formData = new FormData();
    formData.append('name', input.name);
    formData.append('price', input.price);
    formData.append('contents', input.contents);
    formData.append('discount', input.discount);
    formData.append('file', input.file);
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