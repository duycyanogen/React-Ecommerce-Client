import React, { useState } from 'react'
import styled from 'styled-components';
import { Bar } from "react-chartjs-2";
import { Line } from "react-chartjs-2";
import { Pie } from "react-chartjs-2";
import Chart from 'chart.js/auto';


const MyChartStyled = styled.div`
    width: 600px;
`;

//props: 
// dataChart :
// const dataChart = [
//     {
//       year: 2016,
//       value: 80000,
//     },
//     {
//       year: 2017,
//       value: 10000,
//     },
//     ... 
// ];
// labelChart: string

export const  MyChart = (props) => {
    const dataChart = props.dataChart;
    const labelChart = props.labelChart;
    const chartType = props.chartType;
    const [dataRender, setDataRender] = useState({
        labels: dataChart?.map((data) => data.year),
        datasets: [
          {
            label: labelChart,
            data: dataChart?.map((data) => data.value),
            backgroundColor: [
                  "rgba(75,192,192,1)",
                  "#ecf0f1",
                  "#50AF95",
                  "#f3ba2f",
                  "#fff",
            ],
            borderColor: "black",
            borderWidth: 2,
          },
        ],
      });

    return (
    <MyChartStyled>
      {(chartType === 'bar') && <Bar data={dataRender} />}
      {(chartType === 'line' && <Line data={dataRender} />)} 
      {(chartType === 'pie' && <Pie data = {dataRender}/>)}
    </MyChartStyled>
  )
}
