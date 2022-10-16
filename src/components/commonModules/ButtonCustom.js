import React from "react";
import styled from "styled-components";
import { style } from "../../constants/style";
const ButtonStyled = styled.button`
   height: ${style.heightModule};
   min-width: 100px;
   padding: 0px ${style.buttonPadding};
   cursor: pointer;
   border-radius: ${style.borderRadius};
   border: 0px;
   font-size: 16px;
   font-weight: 600 ;
   background-color: ${style.primaryColor} ;
   color: #fff !important;
   &:hover {
      background-color: ${style.primayHoverColor} ;
   }

   &.blackButton {
     background-color: #000 ;
     color: #fff;
   }
`;

export const ButtonCustom = (props) => {
    return (
       <ButtonStyled className={`button ${props.type}`} onClick= {props.event}>
        {props.text}
       </ButtonStyled>
    )
}