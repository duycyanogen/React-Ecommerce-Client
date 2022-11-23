import React from 'react'
import styled from 'styled-components'
import { Rate } from 'antd';

const CommentViewStyled =  styled.div`
    .header {
        display: flex;
        justify-content: flex-start ;
        align-items: center ;
        height: 60px;
        &__left {
            width: 50px;
            &__avt {
                height: 40px;
                width: 40px;
                border-radius: 50% ;
                overflow: hidden ;
                img {
                width: 100%;
               }
            }
            
        }
        &__right {
            height: 40px;
            display: flex ;
            flex-direction: column ;
            justify-content: space-between ;
            &__name {
                color: #d1c7bc;
                font-size: 14px ;
                font-weight: 500;
                margin: 0px;
                text-align: left ;
            }
            .ant-rate  {
              font-size: 14px ;
            }
        }
    }
    .main {
        padding-left: 50px;
        padding-top: 12px;
        display: flex ;
        align-items: flex-start ;
        flex-direction: column ;
        &__time {
            color: #d1c7bc;
            font-size:  12px;
            opacity: 0.6 ;
        }
        &__content {
            margin-top: 20px;
            color: #d1c7bc;
            font-size: 14px ;
        }
    }
`
export const  CommentView = (props) => {
  const {userAvatar, userName, starValue, timeComment, commentContent} = props;

 
  return (
    <CommentViewStyled>
      <div className='header'>
        <div className='header__left'>
            <div className='header__left__avt'>
              <img src={userAvatar}/>
            </div>
        </div>
        <div className='header__right'>
            <p className='header__right__name'>{userName}</p>
            <Rate disabled defaultValue={starValue} />;
        </div>
      </div>
      <div className='main'>
        <span className='main__time'>{timeComment}</span>
        <p className='main__content'>{commentContent}</p>
      </div>
    </CommentViewStyled>
  )
}
