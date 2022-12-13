import { DatePicker, Space } from 'antd';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getStatisticsData } from '../../services/statisticsService';
const { RangePicker } = DatePicker;
export const DatePickerCustom = (props) => {
  const getChartData = props.getChartData;
  const [dates, setDates] = useState(['','']);

 const handleData = async ()=> {
  let tempData = await getStatisticsData(dates)
  console.log(tempData);
  getChartData(tempData);
 }
  useEffect(()=> {
    if(dates[0]!='')
    handleData();
  },[dates])

  return (
    <RangePicker format="DD-MM-YYYY" className = {props.className} onChange={(values) => {
       setDates(values.map(item=>{
          return  moment(item).format('DD-MM-YYYY').replaceAll('-','/')
       }));
       }} />
  )
}
