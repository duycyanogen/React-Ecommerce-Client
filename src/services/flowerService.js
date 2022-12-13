import axios from 'axios'
axios.defaults.headers = {
    'Content-Type': 'application/json',
    // ...
}
const getAll = async () => {
    return axios.get('http://localhost:8080/flower/get');
}

const getByID = async (id) => {
    return axios.post('http://localhost:8080/flower/get-by-id', { id: id });
}

const getFlowerByKey = async(valueSearch) => {
        try {
           const res =  await axios.post('http://localhost:8080/flower/get-by-key',{
              keyword: valueSearch
            })
            return res.data.object;
        } catch(err) {
            console.log('err search',err)
        }
}

const handleAddNewFlower = (input) => {
    debugger
    let formData = new FormData();
    formData.append('name', input.name);
    formData.append('price', input.price);
    formData.append('contents', input.contents);
    formData.append('quantityIn', input.quantityIn);
    formData.append('discount', input.discount);
    for (const file of input.files) {
        formData.append('files', file);
    }
    return axios.post('http://localhost:8080/flower/add-flower', formData)
}

const handleUpdateFlower = (input) => {
    let formData = new FormData();
    formData.append('id', input.id);
    formData.append('name', input.name);
    formData.append('price', input.price);
    formData.append('contents', input.contents);
    formData.append('discount', input.discount);
    formData.append('file', input.file);
    return axios.post('http://localhost:8889/api/v1/Flower/update', formData)
}

const handleDeleteFlower = (id) => {
    return axios.post('http://localhost:8080/flower/delete-flower', { id: id })
}

const handleGetRatingFlower = async (ratingRequest) => {
    return axios.post('http://localhost:8080/rating/get-by-product', { idFlower: ratingRequest.idFlower });
}

const handleAddRatingFlower = async (ratingRequest) => {
    return axios.post('http://localhost:8080/rating/add-rating', {
        userID: ratingRequest.userID,
        idFlower: ratingRequest.idFlower,
        comment: ratingRequest.comment,
        score: ratingRequest.score

    });
}

const handleUpdateViews = (id) => {
    return axios.post('http://localhost:8080/flower/update-views', { id: id })
}


export {
    getAll,
    getFlowerByKey,
    handleAddNewFlower,
    handleUpdateFlower,
    handleDeleteFlower,
    getByID,
    handleGetRatingFlower,
    handleAddRatingFlower,
    handleUpdateViews
}