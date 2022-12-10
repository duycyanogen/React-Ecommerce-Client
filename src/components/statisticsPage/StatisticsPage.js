import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import  {ChartItem} from '../commonModules/chart/ChartItem';
import { MyChart } from '../commonModules/chart/MyChart'
import { DatePickerCustom } from '../commonModules/DatePickerCustom';
import { SelectCustom } from '../commonModules/SelectCustom';
import { ContainerTitle } from '../commonModules/ContainerTitle';
import { useDispatch, useSelector } from 'react-redux';
import { statisticsSelector } from '../../store/selectors';
import { getStatisticsData } from '../../services/statisticsService';

const StatisticsPageStyled = styled.div`
  .date-picker-custom {
    margin-bottom: 10px;
  }
`;

const dataChart = [
    {
      time: 2016,
      value: 80000,
    },
    {
      time: 2017,
      value: 10000,
    },
    {
      time: 2018,
      value: 78888,
    },
    {
      time: 2019,
      value: 90000,
    },
    {
      time: 2020,
      value: 4300,
    },
  ];

export const  StatisticsPage = () => {
  return (
    <StatisticsPageStyled>
      <ContainerTitle title = 'Thống kê'/>
      <p className='primary-title'>Chart 1</p>
      <ChartItem />
      <p className='primary-title' style={{marginTop: '40px'}}>Chart 2</p>
      <ChartItem />
      <p className='primary-title' style={{marginTop: '40px'}}>Chart 3</p>
      <ChartItem />
      <br/>
    </StatisticsPageStyled>
  )
}
