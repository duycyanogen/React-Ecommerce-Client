import axios from 'axios';
import { updateStatistics } from '../store/slice/statisticsSlice';

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








