import React from 'react'
import styled from 'styled-components';
import {InputItem} from '../commonModules/InputItem';
import '../../constant/style.scss'
import { useNavigate } from 'react-router-dom';

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
         <p className='primary-title'>Quản lí tài khoản</p>
         <div className='container'>
           <InputItem title = 'Email' placeholder = 'Email' className = 'container__item' onChange = {()=> {}}/>
           <InputItem title = 'Mật khẩu' placeholder = '' className = 'container__item' inputType= 'password'  onChange = {()=> {}}/>
           <InputItem title = 'Tên' placeholder = 'Tên' className = 'container__item'  onChange = {()=> {}}/>
           <InputItem title = 'Số điện thoại' placeholder = 'Số điện thoại' className = 'container__item'  onChange = {()=> {}}/>
           <InputItem title = 'Địa chỉ' placeholder = 'Địa chỉ' className = 'container__item'  onChange = {()=> {}}/>
         </div>
         <div className='btn-block'>
           <button className='primary-button' onClick = {()=> {navigate(-1)}}>Hủy</button>
           <button className='primary-button'>Cập nhật tài khoản</button>
         </div>
    </UserAccountStyled>
  )
}

