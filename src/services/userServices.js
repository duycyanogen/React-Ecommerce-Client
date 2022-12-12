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

const handleUpdateInfo = async (newInfo) => {
    try {
       const res=  await axios.post('http://localhost:8080/account/update-account',{
            id:newInfo.id,
            idRole:newInfo.idRole,
            email:newInfo.email,
            phone:newInfo.phone,
            address:newInfo.address,
            name:newInfo.name,
            loyaltyPoint:newInfo.loyaltyPoint
        })
        console.log('res update',res);
    } catch(err) {
        console.log('err update',err)
    }
}


const handleChangePass = async (dataUpdate) => {
    try {
       const res =  await axios.post('http://localhost:8080/account/changepw',{
         id:dataUpdate.userId,
         password:dataUpdate.newPassword
        })
        console.log('pass update',res);
    } catch(err) {
        console.log('err update',err)
    }
}

export {
    handleLogin,
    handleRegis,
    handleUpdateInfo,
    handleChangePass
}

