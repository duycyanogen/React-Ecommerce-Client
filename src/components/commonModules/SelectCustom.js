import React from "react";
import { Select } from 'antd';
import styled from "styled-components";

const SelectStyled = styled.div`
    
    /* .ant-select {
        height: 100% !important;
        width: 100%;
        min-width: 120px;
        color: black !important;
        .ant-select-selector {
            height: 100% !important;
            .ant-select-selection-item {
              display: flex ;
              justify-content: center ;
              align-items: center ;
            }
        }
    } */
` 

// Truyền vào dataSelect  = [item1, item 2,...] và getValue(value)
export const  SelectCustom = (props) => {
    const dataSelect = props.dataSelect;
    const getValue = props.getValue;
    const { Option } = Select;
    const handleChange = (value) => {
      getValue(value);
      console.log(`selected ${value}`);
    };
    return (
        <SelectStyled>
          <Select defaultValue={dataSelect ? dataSelect[0] : ""} onChange={handleChange}>
            {dataSelect?.map((item) => (
               <Option value={item.value} >{item.value}</Option>
            ))}
          </Select>
        </SelectStyled>
    )
}