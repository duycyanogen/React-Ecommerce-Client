import React from 'react'
import styled from 'styled-components'
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import { style } from '../../constants/style';

const InputSearchStyled =  styled.div`
  height: ${style.heightModule};
  width: 100%;

  .ant-input-affix-wrapper {
    border-bottom-left-radius: ${style.borderRadius} !important;
    border-top-left-radius: ${style.borderRadius} !important;
    background-color: ${style.backgroundInput} ;

  }
  input {
    border-bottom-left-radius: ${style.borderRadius} !important;
    border-top-left-radius: ${style.borderRadius} !important;
    background-color: ${style.backgroundInput} ;
  }
  button {
    background-color: ${style.primaryColor} ;
    border-bottom-right-radius: ${style.borderRadius} !important;
    border-top-right-radius: ${style.borderRadius} !important;
    color: #fff;
    &:hover {
      background-color: ${style.primayHoverColor} ;
    }
  }
`
export const InputSearch = () => {
  const { Search } = Input;
  const onSearch = (value) => console.log(value);

  return (
    <InputSearchStyled>
      <Search
       placeholder="input search text"
       allowClear
       enterButton="Search"
       size="large"
       onSearch={onSearch}
      />
    </InputSearchStyled>
  )
}

