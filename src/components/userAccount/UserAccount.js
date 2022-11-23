import React from 'react'
import styled from 'styled-components';
import {InputItem} from '../commonModules/InputItem';
import '../../constant/style.scss'
import { useNavigate } from 'react-router-dom';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { ContainerTitle } from '../commonModules/ContainerTitle';

const UserAccountStyled = styled.div`
  .container {
    background-color: #2b2f3b; 
    padding: 20px;
    border-radius: 20px ;

    .container__item {
      margin: 10px 0px;
      p {
        color: #d1c7bc;
      }
      .input-custom {
        border-radius: 12px !important;

        input { 
        background-color:   #1f2028;
        border: 0px;
        color:  #d1c7bc;
          &::placeholder {
          color: #d1c7bc8c;
          }
       }
      }

      .ant-input {
        border-radius: 10px;
      }
    }
  }

  .change-pass-title {
    margin-top: 30px;
  }

  .btn-block {
    padding: 20px 0px;
    display: flex;
    justify-content: flex-end ;
    button:first-child {
      margin-right: 10px;
    }
  }
`

export const  UserAccount = () => {
  const navigate = useNavigate();
  return (
    <UserAccountStyled>
         <ContainerTitle title = 'Quản lí tài khoản'/>
         <p className='primary-title'>Thông tin cá nhân</p>
         <div className='container'>
           <InputItem title = 'Email' placeholder = 'Email' className = 'container__item' onChange = {()=> {}}/>
           <InputItem title = 'Tên' placeholder = 'Tên' className = 'container__item'  onChange = {()=> {}}/>
           <InputItem title = 'Số điện thoại' placeholder = 'Số điện thoại' className = 'container__item'  onChange = {()=> {}}/>
           <InputItem title = 'Địa chỉ' placeholder = 'Địa chỉ' className = 'container__item'  onChange = {()=> {}}/>
         </div>
         <div className='btn-block'>
           <button className='primary-button'>Cập nhật tài khoản</button>
         </div>

         <p className='primary-title change-pass-title'>Đổi mật khẩu</p>
         <div className='container'>
           <InputItem title = 'Nhập mật khẩu hiện tại' placeholder = '' className = 'container__item' inputType= 'password'  onChange = {()=> {}}/>
           <InputItem title = 'Nhập mật khẩu mới' placeholder = '' className = 'container__item' inputType= 'password'  onChange = {()=> {}}/>
           <InputItem title = 'Nhập lại mật khẩu mới' placeholder = '' className = 'container__item' inputType= 'password'  onChange = {()=> {}}/>
         </div>
         <div className='btn-block'>
           <button className='primary-button' onClick = {()=> {}}>Cập nhật mật khẩu</button>
         </div>
    </UserAccountStyled>
  )
}

