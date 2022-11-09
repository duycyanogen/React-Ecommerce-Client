import React from 'react'
import styled from 'styled-components';
import {useNavigate } from 'react-router-dom';
import { ArrowLeftOutlined } from '@ant-design/icons';

const ContainerTitleStyled = styled.div`
 display: flex ;
    align-items: center ;
    margin-bottom: 20px;
   
    button {
      background: transparent ;
      border: none; 
      display: flex;
      align-items: center ;
      
      span {
        padding: 0px;
       
        svg {
        color: #d1c7bc;
        font-size: 18;
        font-weight :  600;
        color: #f73173;
        }
      }
    }
    
    p {
      margin-bottom: 0px !important; 
    }
`

export const  ContainerTitle = (props) =>{
  const navigate = useNavigate();
  const title = props.title;
  return (
    <ContainerTitleStyled>
           <button onClick = {()=> {navigate(-1)}}><ArrowLeftOutlined/></button>
           <p className='primary-title'>{title}</p>
    </ContainerTitleStyled>
  )
}
