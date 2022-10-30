import React, { useState } from 'react'
import styled from 'styled-components';
import BarChart from "./BarChart";
import { UserData } from './data';

const MyChartStyled = styled.div`

`;
export const  MyChart = () => {
    const [userData, setUserData] = useState({
        labels: UserData.map((data) => data.year),
        datasets: [
          {
            label: "Users Gained",
            data: UserData.map((data) => data.userGain),
            backgroundColor: [
              "rgba(75,192,192,1)",
              "#ecf0f1",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0",
            ],
            borderColor: "black",
            borderWidth: 2,
          },
        ],
      });
  return (
    <MyChartStyled> <BarChart chartData={userData} /></MyChartStyled>
  )
}
