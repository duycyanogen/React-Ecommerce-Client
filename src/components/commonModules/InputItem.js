import React from 'react'
import styled from 'styled-components';
import { InputCustom } from './InputCustom'

const InputItemStyled = styled.div`
  display: flex ;
  justify-content: space-between ;
  height: 40px;
  width: 100%;
  align-items: center ;
  p {
    margin: 0px;
  }
  
  .input-custom {
      width: 70%;
    }
    
  &.vertical-item {
    flex-direction: column ;
    align-items: flex-start ;
    height: fit-content;
    p {
      margin-bottom:  10px ;
    }
    .input-custom {
      width: 100%;
    }
  }
`
//props: title + placeholder +  onChange  vertical? 
export const InputItem = (props) => {
  return (
    <InputItemStyled className = {`${props.vertical && 'vertical-item'} ${props.className}`}>
        <p>{props.title}</p>
        <InputCustom placeholder = {props.placeholder} handleChange= {props.onChange} inputType = {props.inputType}/>
    </InputItemStyled>
  )
}
