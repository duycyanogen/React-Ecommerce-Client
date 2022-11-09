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
    <ChartItemStyled>
      <div className='chart-option'>
         <DatePickerCustom className='date-picker-custom'/>
         <SelectCustom dataSelect = {dataSelect} getValue = {getValue}/>
      </div>
      <MyChart dataChart= {dataChart} labelChart = 'label 1' chartType = {chartType}/>
    </ChartItemStyled>
  )
}
