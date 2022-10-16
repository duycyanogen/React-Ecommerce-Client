import './header.scss'
import guitar from '../../assets/img/guitar.png'
import UserModal from '../userModal/userModal';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import GuitarModal from '../guitarModal/guitarModal';
import { React, useState, useEffect } from "react";
import { connect, useSelector } from 'react-redux';
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


    return (
        <>
            {/* Same as */}

            <div className="wrapper">

                <div className="wrapper-top-menu">
                    <a href='http://localhost:3000' className='nav-logo'>
                        <img src={guitar} />
                    </a>
                    <div className='nav-body'>
                        <div className="wrap-search-bar">
                            <span className="icon"><i className="fa-solid fa-magnifying-glass"></i></span>
                            <input type="text" className="search-input" placeholder='Nhập gì đó...' />

                        </div>
                    </div>
                    <div className='nav-action'>
                        <div className='action-item'>
                            <p className="my-text">Xin chào {userInfo ? userInfo.name : ""}</p>
                        </div>
                        <div className='action-item user-icon'>
                            <span className="icon"><i className="fa-solid fa-user"></i></span>
                            <ul className='user-action'>
                                {
                                    userInfo ? <a href='/login' onClick={(e) => logOut(e)}><li>Đăng xuất</li></a> : <a href='/login'><li>Đăng nhập</li></a>
                                }
                                {/* <a href='/login'><li>Đăng nhập</li></a>
                                <a href='/logout'><li>Đăng xuất</li></a> */}
                            </ul>
                        </div>
                        <div className='action-item'>
                            <a style={{ textDecoration: "none", color: "#1d2129" }} href='/cart' className="icon"><i className="fa-solid fa-cart-shopping"></i></a>
                        </div>
                    </div>
                </div >

                <div className="sidebar">
                    <ul>
                        <li><a href="/cart">
                            <span className="icon"><i className="fas fa-book"></i></span>
                            <span className="title">Giỏ hàng</span>
                        </a></li>
                        <li><a href="order">
                            <span className="icon"><i className="fas fa-file-video"></i></span>
                            <span className="title">Đơn hàng</span>
                        </a></li>{
                            userInfo && userInfo.idRole == 1 ? <li><a href="/products">
                                <span className="icon"><i className="fas fa-volleyball-ball"></i></span>
                                <span className="title">Quản lý sản phẩm</span>
                            </a></li> : null
                        }


                    </ul>
                </div>
                <div className="props-container">
                    {props.children}
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