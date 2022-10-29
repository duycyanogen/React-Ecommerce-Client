import { Input } from 'antd'
import React from 'react'
import styled from 'styled-components'


const InputStyled = styled.div`
  height: 100% !important;
  background-color: #999 ;
  input {
    height: 100% !important;
    background-color: #888 ;
  }
  &.input-custom {
    height: 40px !important;
  }
`
export const InputCustom = (props) => {
  return (
    <InputStyled className='input-custom'>
      <Input.Password placeholder="input password" />
    </InputStyled>
  )
}
