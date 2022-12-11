import React, { useRef, useState } from 'react'
import styled from 'styled-components';
import {InputItem} from '../commonModules/InputItem';
import '../../constant/style.scss'
import { useNavigate } from 'react-router-dom';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { ContainerTitle } from '../commonModules/ContainerTitle';
import { useSelector } from 'react-redux';
import { handleLogin, handleUpdateInfo } from '../../services/userServices';
import { userLoginSuccess } from '../../store/actions';

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
  const userInfo = useSelector(state => state.user.userInfo);
  console.log('infoooo', userInfo)
  const [email,setEmail] = useState(()=>{return userInfo.email});
  const [phone,setPhone] = useState(()=>{return userInfo.phone});
  const [address,setAddress] = useState(()=>{return userInfo.address});
  const [name,setName] = useState(()=>{return userInfo.fullName});
  const [loyaltyPoint,setLoyaltyPoint] = useState(()=>{return userInfo.loyaltyPoint});

  const getEmail = (value) => {
    setEmail(value);
  }

  const getPhone = (value) => {
    setPhone(value);
  }

  const getAddress = (value) => {
    setAddress(value);
  }

  const getName = (value) => {
    setName(value);
  }

  const handleSubmitUpdate = async () => {
    let newInfo = {
      id:userInfo.id,
      idRole:userInfo.idRole,
      email:email,
      phone:phone,
      address:address,
      name:name,
      loyaltyPoint:loyaltyPoint
    };
    console.log('newInfo',newInfo);
    await handleUpdateInfo(newInfo);
    try {
      await handleLogin(phone, userInfo.password).then(res => {
          userLoginSuccess(res.data.object);
          localStorage.removeItem("user");
          localStorage.setItem("user", JSON.stringify(res.data.object));
          console.log('info', res.data.object);
          window.location.reload();
      })
    }
    catch (err) {
      console.log(err)
    }
  }

  const handleChangeValueInput = (e, func)=> {
    func(e.target.value);
  }
 
  return (
    <UserAccountStyled>
         <ContainerTitle title = 'Quản lí tài khoản'/>
         <p className='primary-title'>Thông tin cá nhân</p>
         <div className='container'>
           <InputItem
            valueInput = {email} 
            title = 'Email' 
            placeholder = 'Email' 
            className = 'container__item' 
            onChange = {(e)=>handleChangeValueInput(e,getEmail)}/>
           <InputItem 
            valueInput ={name} 
            title = 'Tên' 
            placeholder = 'Tên' 
            className = 'container__item'  
            onChange = {(e)=>handleChangeValueInput(e,getName)}/>
           <InputItem 
            valueInput = {phone} 
            title = 'Số điện thoại' 
            placeholder = 'Số điện thoại' 
            className = 'container__item'  
            onChange = {(e)=>handleChangeValueInput(e,getPhone)}/>
           <InputItem 
            valueInput = {address} 
            title = 'Địa chỉ' 
            placeholder = 'Địa chỉ' 
            className = 'container__item'  
            onChange = {(e)=>handleChangeValueInput(e,getAddress)}/>
         </div>
         <div className='btn-block'>
           <button className='primary-button' onClick={handleSubmitUpdate}>Cập nhật tài khoản</button>
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

