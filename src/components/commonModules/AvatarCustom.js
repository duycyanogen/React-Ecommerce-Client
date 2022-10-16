import React from 'react';
import { Avatar, Image } from 'antd';
import styled from 'styled-components';
import { style } from '../../constants/style';

const AvatarCustomStyled = styled.div`
  height: ${style.heightModule};
  width: ${style.heightModule};
  display: flex ;
  align-items: center;
  justify-content: center ;
  span {
    width: 100%;
    height: 100%;
  }
`
export const AvatarCustom = (props) => {
  return (
    <AvatarCustomStyled>
        <Avatar src={props.src} />
    </AvatarCustomStyled>
  )
}
