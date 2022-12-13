import './header.scss'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Menu } from 'antd';

import { UnorderedListOutlined, SettingOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Footer } from '../footer/Footer';
import { updateActivePage } from '../../store/slice/activePage';
import { activePageSelector } from '../../store/selectors';

export default function Header(props) {
  const userInfo = useSelector(state => state.user.userInfo);
  const activePage = useSelector(activePageSelector);
  const dispatch = useDispatch();
  const [isOpenChildModal, setIsOpenChildModal] = useState(false);

  const showModal = () => {
    setIsOpenChildModal(true);
  }

  const toggle = () => {
    setIsOpenChildModal(!isOpenChildModal);
  }

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

  const queryString = window.location.search;
  console.log(queryString);

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

  const handleLoadStatisticsPage = () => {
    dispatch(updateActivePage("statistics"));
  }

  return (
    <>
      {/* Same as */}

      <div className="wrapper">

        <div className="wrapper-top-menu">
          <a href='http://localhost:3000' className='nav-logo'>
            {/* <img src={flower} /> */}
            <img src='../../image/logo.png' />
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
              <p className="my-text">Xin chào {userInfo ? userInfo.fullName : ""}</p>
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
              <li className={activePage == 'listProduct' ? 'menu-item-active' : ''}>
                <Link to="/" onClick={() => { dispatch(updateActivePage("listProduct")) }}>
                  <span className="icon"><UnorderedListOutlined /></span>
                  <span className="title">Danh sách sản phẩm</span>
                </Link>
              </li>
              {(userInfo) && <li className={activePage == 'cart' ? 'menu-item-active' : ''}>
                <Link to="/cart" onClick={() => { dispatch(updateActivePage("cart")) }}>
                  <span className="icon"><i className="fas fa-book"></i></span>
                  <span className="title">Giỏ hàng</span>
                </Link></li>}
              <li className={activePage == 'order' ? 'menu-item-active' : ''}>
                <Link to="/order" onClick={() => { dispatch(updateActivePage("order")) }}>
                  <span className="icon"><i className="fas fa-file-video"></i></span>
                  <span className="title">Đơn hàng</span>
                </Link>
              </li>
              {
                // (userInfo && userInfo.idRole == 1) && 
                <li className={activePage == 'transactionmanager' ? 'menu-item-active' : ''}>
                  <Link to="/transactionmanager" onClick={() => { dispatch(updateActivePage("transactionmanager")) }}>
                    <span className="icon"><i className="fas fa-volleyball-ball"></i></span>
                    <span className="title">Quản lý đơn hàng</span>
                  </Link></li>
              }
              {
                (userInfo && userInfo.idRole == 1) && <li className={activePage == 'products' ? 'menu-item-active' : ''}>
                  <Link to="/products" onClick={() => { dispatch(updateActivePage("products")) }}>
                    <span className="icon"><i className="fas fa-volleyball-ball"></i></span>
                    <span className="title">Quản lý sản phẩm</span>
                  </Link></li>
              }
              <li className={activePage == 'user' ? 'menu-item-active' : ''}>
                <Link to='/user' onClick={() => { dispatch(updateActivePage("user")) }}>
                  <span className="icon"><SettingOutlined /></span>
                  <span className="title">Quản lí tài khoản</span>
                </Link>
              </li>
              {(userInfo && userInfo.idRole == 1) && <li className={activePage == 'statistics' ? 'menu-item-active' : ''}>
                <Link to='/statistics' onClick={handleLoadStatisticsPage}>
                  <span className="icon"><SettingOutlined /></span>
                  <span className="title">Thống kê</span>
                </Link>
              </li>}
            </ul>
          </div>

        </div>
        <div className="props-container">
          {props.children}
          <Footer />
        </div>

      </div>
      {/* <flowerModal
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