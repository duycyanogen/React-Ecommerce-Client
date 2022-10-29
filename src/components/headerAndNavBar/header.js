import './header.scss'
import guitar from '../../assets/img/guitar.png'
import UserModal from '../userModal/userModal';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import GuitarModal from '../guitarModal/guitarModal';
import { React, useState, useEffect } from "react";
import { connect, useSelector } from 'react-redux';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';
import { DropdownCustom } from '../commonModules/DropdownCustom';
import { UnorderedListOutlined, SettingOutlined} from '@ant-design/icons';
import { SelectCustom } from '../commonModules/SelectCustom';
import { Link } from 'react-router-dom';
import { Footer } from '../footer/Footer';
export default function Header(props) {

    const userInfo = useSelector(state => state.user.userInfo);
    const [isOpenChildModal, setIsOpenChildModal] = useState(false);

    const showModal = () => {
        setIsOpenChildModal(true);
    }

    const toggle = () => {
        setIsOpenChildModal(!isOpenChildModal);
    }

    const showToastError = (content) => {
        toast.error(content, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };

    const showToastSuccess = (content) => {
        toast.success(content, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };

    const showToastWarning = (content) => {
        toast.warning(content, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };

    const logOut = (e) => {
        e.preventDefault();
        localStorage.removeItem("user");
        window.location.reload(false);
    }
    
    const menu = (
        <Menu
          items={[
            {
              key: '1',
              label: (
                     <a href='/login' onClick={(e) => logOut(e)}>Đăng xuất</a>
              ),
            },
            {
              key: '2',
              label: (
                     <a href='/login' onClick={(e) => logOut(e)}>Quản lí tài khoản</a>
              ),
            },
           
          ]}
        />
      );

    return (
        <>
            {/* Same as */}

            <div className="wrapper">

                <div className="wrapper-top-menu">
                    <a href='http://localhost:3000' className='nav-logo'>
                        {/* <img src={guitar} /> */}
                        <img src = '../../image/app-logo.png' />
                        <span>FLOWER STORE</span>
                    </a>
                    <div className='nav-body'>
                        <div className="wrap-search-bar">
                            <input type="text" className="search-input" placeholder='Nhập gì đó...' />
                            <button>
                              <i className="fa-solid fa-magnifying-glass"></i>
                            </button>
                        </div>
                    </div>
                    {userInfo ? <div className='nav-action'>
                        <div className='action-item'>
                            <p className="my-text">Xin chào {userInfo ? userInfo.name : ""}</p>
                        </div>
                        <div className='action-item user-icon'>
                            <span className="icon"><i className="fa-solid fa-user"></i></span>
                            <a href='/login' className='log-out' onClick={(e) => logOut(e)}>
                                       Đăng xuất
                            </a> 
                        </div>
                       
                      </div> : <a href='/login' className='nav-action login-btn'>
                                       Đăng nhập
                    </a>}
                </div >

                <div className="sidebar">
                    <div className='sidebar__menu'>
                      <p className='sidebar__menu__title'>Menu</p>
                      <ul>
                        <li>
                            {/* <a  href='http://localhost:3000'>
                             <span className="icon"><UnorderedListOutlined/></span>
                             <span className="title">Danh sách sản phẩm</span>
                            </a> */}
                            <Link to="/">
                              <span className="icon"><UnorderedListOutlined/></span>
                              <span className="title">Danh sách sản phẩm</span>
                            </Link>
                        </li>
                        <li>
                          <Link to="/cart">
                            <span className="icon"><i className="fas fa-book"></i></span>
                            <span className="title">Giỏ hàng</span>
                          </Link></li>
                        <li>
                           <Link to="/order">
                            <span className="icon"><i className="fas fa-file-video"></i></span>
                            <span className="title">Đơn hàng</span>
                           </Link>
                        </li>{
                            userInfo && userInfo.idRole == 1 ? <li><a href="/products">
                                <span className="icon"><i className="fas fa-volleyball-ball"></i></span>
                                <span className="title">Quản lý sản phẩm</span>
                            </a></li> : null
                        }
                        <li>
                            <Link  to='/user'>
                             <span className="icon"><SettingOutlined /></span>
                             <span className="title">Quản lí tài khoản</span>
                            </Link>
                        </li>
                      </ul>
                    </div>
                   
                </div>
                <div className="props-container">
                    {props.children}
                    <Footer/>
                </div>

            </div>
            {/* <GuitarModal
                isOpen={isOpenChildModal}
                toggle={toggle}
                showToastError={showToastError}
                showToastWarning={showToastWarning}
                showToastSuccess={showToastSuccess}
            />
            <ToastContainer /> */}

        </>
    )

}