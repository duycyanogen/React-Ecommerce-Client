import React from "react";
import { Select } from 'antd';
import styled from "styled-components";

const SelectStyled = styled.div`
    margin-right: 20px;
` 

export const  SelectCustom = (props) => {
    const dataSelect = props.dataSelect;
    const getValue = props.getValue;
    const { Option } = Select;
    const handleChange = (value) => {
      getValue(value);
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