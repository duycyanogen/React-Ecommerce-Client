import axios from 'axios';
import { updateStatistics } from '../store/slice/statisticsSlice';

export const getStatisticsData = async(dispatch) => {
    try {
        const res = await axios.post('http://localhost:8080/stat/get-revenue', {
            dateTo:"01/10/2022",
            dateFrom:"01/09/2022",
            role:"y"
        })
        console.log('res.data.object',res.data.object)
        dispatch(updateStatistics(res.data.object));
      } catch (err) {
        console.log(err)
    }
}






  


