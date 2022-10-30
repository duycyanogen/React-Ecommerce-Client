import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import  {ChartItem} from '../commonModules/chart/ChartItem';
import { MyChart } from '../commonModules/chart/MyChart'
import { DatePickerCustom } from '../commonModules/DatePickerCustom';
import { SelectCustom } from '../commonModules/SelectCustom';

const StatisticsPageStyled = styled.div`
  .date-picker-custom {
    margin-bottom: 10px;
  }
`;

const dataChart = [
    {
      year: 2016,
      value: 80000,
    },
    {
      year: 2017,
      value: 10000,
    },
    {
      year: 2018,
      value: 78888,
    },
    {
      year: 2019,
      value: 90000,
    },
    {
      year: 2020,
      value: 4300,
    },
  ];

export const  StatisticsPage = () => {
   
  return (
    <StatisticsPageStyled>
      <p className='primary-title'>Chart 1</p>
      <ChartItem dataChart = {dataChart}/>
      <p className='primary-title' style={{marginTop: '30px'}}>Chart 2</p>
      <ChartItem dataChart = {dataChart}/>
      <p className='primary-title' style={{marginTop: '30px'}}>Chart 3</p>
      <ChartItem dataChart = {dataChart}/>
    </StatisticsPageStyled>
  )
}
