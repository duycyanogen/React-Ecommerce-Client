import React, { useEffect, useState } from 'react'
import { DatePickerCustom } from '../DatePickerCustom'
import { SelectCustom } from '../SelectCustom'
import { MyChart } from './MyChart'

const dataSelect  = [
    {
        value: 'Bar chart'
    },
    {
        value: 'Line chart'
    },
    {
        value: 'Pie chart'
    },
]

export const ChartItem = (props) => {
    const dataChart = props.dataChart;
    const [chartTypeRender,setChartTypeRender] = useState('Bar chart');
    const [chartType,setChartType] = useState('bar');
   
    useEffect(()=> {
        handleChangeChartType();
    },[chartTypeRender])

    const getValue = (value) => {
        setChartTypeRender(value);
    }

    const handleChangeChartType = () => {
       
           if(chartTypeRender== 'Bar chart'){
                setChartType('bar');
               return
            };
            
           if(chartTypeRender== 'Line chart'){
            setChartType('line');
              return
           }
        
           if(chartTypeRender== 'Pie chart'){
            setChartType('pie');
            };
        }
  return (
    <div>
         <DatePickerCustom className='date-picker-custom'/>
         <SelectCustom dataSelect = {dataSelect} getValue = {getValue}/>
         <MyChart dataChart= {dataChart} labelChart = 'label 1' chartType = {chartType}/>
    </div>
  )
}
