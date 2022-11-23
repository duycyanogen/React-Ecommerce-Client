import { DatePicker, Space } from 'antd';
import moment from 'moment';
import React, { useState } from 'react';
const { RangePicker } = DatePicker;
export const DatePickerCustom = (props) => {
  const [dates, setDates] = useState([])
  // console.log(dates)

  return (
    <RangePicker format="YYYY-MM-DD" className = {props.className} onChange={(values) => {
         setDates(values.map(item=>{
           return  moment(item).format('YYYY-DD-MM')
         }))
       }} />
  )
}
