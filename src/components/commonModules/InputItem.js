import React from 'react'
import styled from 'styled-components';
import {style} from "../../constants/style";
import { InputCustom } from './InputCustom'

const InputItemStyled = styled.div`
  display: flex ;
  justify-content: space-between ;
  height: ${style.heightModule};
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
      margin-bottom:  ${style.mainMargin} ;
    }
    .input-custom {
      width: 100%;
    }
  }
`
//props: title + placeholder  vertical?
export const InputItem = (props) => {
  return (
    <InputItemStyled className = {props.vertical && 'vertical-item'}>
        <p>{props.title}</p>
        <InputCustom placeholder = {props.placeholder}/>
    </InputItemStyled>
  )
}
