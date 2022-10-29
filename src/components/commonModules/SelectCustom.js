// import React from "react";
// import { Select } from 'antd';
// import styled from "styled-components";
// // import {style} from "../../constants/style";
// import "../../constant/ "

// const SelectStyled = styled.div`
//     /* height: ${style.heightModule}; */
//     width: 100% !important;
    
//     .ant-select {
//         height: 100% !important;
//         width: 100%;
//         min-width: 120px;
//         .ant-select-selector {
//             height: 100% !important;
//             /* border-radius: ${style.borderRadius} !important ; */
//             .ant-select-selection-item {
//               display: flex ;
//               justify-content: center ;
//               align-items: center ;
//             }
//         }
//     }
// `

// // Truyền vào dataSelect  = [item1, item 2,...]
// export const  SelectCustom = (props) => {
//     const dataSelect = props.dataSelect;
//     const { Option } = Select;
//     const handleChange = (value) => {
//       console.log(`selected ${value}`);
//     };
//     return (
//         <SelectStyled>
//           <Select defaultValue={dataSelect ? dataSelect[0] : ""} onChange={handleChange}>
//             {dataSelect?.map((item) => (
//                <Option value={item.value} >{item.value}</Option>
//             ))}
//           </Select>
//         </SelectStyled>
//     )
// }