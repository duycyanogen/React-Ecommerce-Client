import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { DatePickerCustom } from '../DatePickerCustom'
import { SelectCustom } from '../SelectCustom'
import { MyChart } from './MyChart'

const ChartItemStyled = styled.div`
    width: 60%;
    .chart-option {
        width: 100%;
        display: flex;
        .date-picker-custom {
            margin-right: 30px;
        }
    }
`
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

const typeTimeSelect = [
    {
        value: "Ngày"
    },
    {
        value: "Tháng" 
    },
    {
        value: "Năm"
    }
]

export const ChartItem = (props) => {
    const [chartTypeRender,setChartTypeRender] = useState('Bar chart');
    const [chartType,setChartType] = useState('bar');
    const [dataChart,setDataChart] = useState([]);
    const [typeTime,setTypeTime] = useState('d');
   
    useEffect(()=> {
        handleChangeChartType();
    },[chartTypeRender])

    const getValue = (value) => {
        setChartTypeRender(value);
    }

    const getTypeTime = (value) => {
        if(value === "Ngày"){
            console.log('Ngày nè');
            setTypeTime('d');
        }
        else if(value  === "Tháng") {
            console.log('tháng nè')
            setTypeTime('m');
        }
        else if(value === "Năm"){
            console.log('năm nè');
            setTypeTime('y');
        }
    }


    const getChartData = (data) => {
        console.log('data chart', data);
        if(data) {
            setDataChart(data);
        }
        return data;
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
    <ChartItemStyled>
      <div className='chart-option'>
         <DatePickerCustom className='date-picker-custom' getChartData={getChartData} typeTime = {typeTime}/>
         <SelectCustom dataSelect = {dataSelect} getValue = {getValue}/>
         <SelectCustom dataSelect = {typeTimeSelect} getValue = {getTypeTime}/>
      </div>
      <MyChart dataChart= {dataChart} labelChart = 'value' chartType = {chartType}/>
    </ChartItemStyled>
  )
}
