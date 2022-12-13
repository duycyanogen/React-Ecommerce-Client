import React, { useState } from 'react'
import styled from 'styled-components';
import { Bar } from "react-chartjs-2";
import { Line } from "react-chartjs-2";
import { Pie } from "react-chartjs-2";
import Chart from 'chart.js/auto';


const MyChartStyled = styled.div`
    width: 100%;
`;

//props: 
// dataChart :
const dataChart2 = [
    {
      time: 2016,
      value: 80000,
    },
    {
      time: 2017,
      value: 10000,
    },

]
// labelChart: string

export const  MyChart = (props) => {
    const dataChart= props.dataChart?.map((item,index)=> {
      return {time:item.time, value: parseFloat(item.value)}
    })
    console.log('data nè', dataChart);
    const labelChart = props.labelChart;
    const chartType = props.chartType;
    const  dataRender = {
        labels: dataChart.map((data) => data.time),
        datasets: [
          {
            label: labelChart,
            data: dataChart.map((data) => data.value),
            backgroundColor: [
                  "#f3ba2f",
                  // "#ecf0f1",
                  // "#50AF95",
                  // "#f3ba2f",
                  // "#fff",
            ],
            borderColor: '#f73173',
            borderWidth: 1,
            barThickness: 20,  
            color: "red"
          },
        ],
      };

      console.log('data render', dataRender)
    const optionCustom = {
      plugins: { 
        legend: {
          labels: {
            color: "#fff",  
            font: {
              size: 12 
            }
          }
        }
      },
      scales: {
        y: {  
          ticks: {
            color: "#fff", 
            font: {
              size: 12, 
            },
            stepSize: 1,
            beginAtZero: true
          }
        },
        x: { 
          ticks: {
            color: "#fff",  
            font: {
              size: 12 
            },
            stepSize: 1,
            beginAtZero: true
          }
        }
      }
    }
    return (
    <MyChartStyled>
      {(chartType === 'bar') && <Bar data={dataRender} options = {optionCustom}/>}
      {(chartType === 'line' && <Line data={dataRender} options = {optionCustom}/>)} 
      {/* {(chartType === 'pie' && <Pie data = {dataRender}/>)} */}
    </MyChartStyled>
  )
}
