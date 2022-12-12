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
import { handleChangePass } from '../../services/userServices';
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

  .err-message {
    color: #f73173;
    padding-left: 30%;
  }
`


export const  UserAccount = () => {
  const userInfo = useSelector(state => state.user.userInfo);
  console.log('infoooo', userInfo)
  const [email,setEmail] = useState(()=>{return userInfo.email});
  const [phone,setPhone] = useState(()=>{return userInfo.phone});
  const [address,setAddress] = useState(()=>{return userInfo.address});
  const [name,setName] = useState(()=>{return userInfo.fullName});
  const [loyaltyPoint,setLoyaltyPoint] = useState(()=>{return userInfo.loyaltyPoint});
  const [currentPass,setCurrentPass] = useState('');
  const [newPass,setNewPass] = useState('');
  const [passConfirm,setPassConfirm] = useState('');
  const [currentPassErr,setCurrentPassErr] =  useState();
  const [newPassErr,setNewPassErr] =  useState();
  const [passConfirmErr,setPassConfirmErr] = useState();


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
  
  const getCurrentPass = (value)=> {
    setCurrentPass(value)
  }
  const getNewPass = (value) => {
    setNewPass(value);
  }
  const getPassConfirm = (value)=> {
    setPassConfirm(value)
  }


  const handleChangeValueInput = (e, func)=> {
    func(e.target.value);
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
  
  const handleUpdatePass = () => {
    if(currentPass === userInfo.password && newPass!='' && newPass === passConfirm) {
      let dataUpdate = {
        userId :  userInfo.id,
        newPassword :  newPass,
      }
      setCurrentPassErr('');
      setNewPassErr('');
      setPassConfirmErr('');
      handleChangePass(dataUpdate);
      return;
    }
    if(currentPass !== userInfo.password) {
      setCurrentPassErr('Mật khẩu hiện tại không chính xác')
    } else setCurrentPassErr('')
    if(newPass === '') {
      setNewPassErr('Mật khẩu mới không hợp lệ');
    } else setNewPassErr('');
    if(passConfirm === '' || passConfirm != newPass ) {
      setPassConfirmErr('Nhập lại mật khẩu mới !')
    } else {
      setPassConfirmErr(''); 
    }
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
           <InputItem 
            title = 'Nhập mật khẩu hiện tại'
            placeholder = '' 
            className = 'container__item' 
            inputType= 'password'  
            onChange = {(e)=>handleChangeValueInput(e,getCurrentPass)}/>
           {currentPassErr !='' && <p className='err-message'>{currentPassErr}</p>}
           <InputItem title = 'Nhập mật khẩu mới'
             placeholder = ''
             className = 'container__item'
             inputType= 'password' 
             onChange = {(e)=>handleChangeValueInput(e,getNewPass)}/>
           {newPassErr != '' && <p className='err-message'>{newPassErr}</p>}
           <InputItem
            title = 'Nhập lại mật khẩu mới' 
            placeholder = '' 
            className = 'container__item' 
            inputType= 'password'  
            onChange = {(e)=>handleChangeValueInput(e,getPassConfirm)}/>
           {passConfirmErr !='' && <p className='err-message'>{passConfirmErr}</p>}
         </div>
         <div className='btn-block'>
           <button className='primary-button' onClick = {handleUpdatePass}>Cập nhật mật khẩu</button>
         </div>
    </UserAccountStyled>
  )
}

