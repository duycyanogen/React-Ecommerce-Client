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

export const getStatisticsData = async (dates) => {
    try {
        const res = await axios.post('http://localhost:8080/stat/get-revenue', {
            dateTo: dates[1],
            dateFrom: dates[0],
            role: "d"
        })
        console.log('res.data.object', res.data.object) // xem thử res. cái gì thì trả ra dữ liệu, t đoán đoán là res.data.object là cái cần
        return res.data.object; // chỗ return này có thể sai, log res ra coi để thay cho đúng 
    } catch (err) {
        console.log(err)
    }
}


export {
    handleLogin,
    handleRegis,
    handleUpdateInfo
}

