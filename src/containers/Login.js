import './Login.scss'
import { handleLogin } from '../services/userServices'
import { React, useState, useEffect } from "react";
import { connect, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import * as actions from '../store/actions/index'
import { useNavigate } from 'react-router-dom';
import UserModal from '../components/userModal/userModal';
function Login(props) {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isOpenChildModal, setIsOpenChildModal] = useState(false);
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
    const showModal = (e) => {
        e.preventDefault();
        setIsOpenChildModal(true);
    }
    const toggle = () => {
        setIsOpenChildModal(!isOpenChildModal);
    }
    const navigate = useNavigate();
    const handleChangeUserName = (e) => {
        setUserName(e.target.value);
    }

    const handleChangePassword = (e) => {

        setPassword(e.target.value);

    }

    const handleLoginClick = async () => {
        setErrorMessage('');
        try {

            await handleLogin(userName, password).then(res => {
                showToastSuccess("Đăng nhập thành công!");
                props.userLoginSuccess(res.data.user);
                localStorage.setItem("user", JSON.stringify(res.data.user));
                navigate("/");
            })
        }
        catch (error) {
            if (error.response) {
                if (error.response.data) {
                    setErrorMessage(error.response.data.message);
                    showToastError(error.response.data.message);
                }
            }
        }

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

    return (
        <div className="login-background">
            <div className="login-container col-3">
                <div className="login-content row">
                    <div className="col-12">
                        <h1>
                            Login
                        </h1>
                    </div>
                    <div className="col-12">
                        <label className=''>Tên đăng nhập</label>
                        <input type="text" className="" id='txtUserName' value={userName} onChange={(e) => handleChangeUserName(e)} />
                    </div>
                    <div className="col-12">
                        <label className='' id='txtPassword' >Mật khẩu</label>
                        <input type="password" className="" value={password} onChange={(e) => handleChangePassword(e)} />
                    </div>
                    <div className="col-12">
                        <button className='btn-login btn-success' id='btnLogin' onClick={() => handleLoginClick()}>Đăng nhập</button>

                    </div>
                    <div className="col-12 regis-now" style={{ display: errorMessage.length > 0 ? "flex" : "none" }}>
                        <span className='err-message'>{errorMessage}</span>
                    </div>
                    <div className="col-12 regis-now">
                        <div className="suggest">

                            <span>Bạn chưa có tài khoản? </span>
                            <a href='#' onClick={(e) => showModal(e)}>Đăng kí ngay</a>
                        </div>
                    </div>
                </div>

            </div>
            <UserModal
                isOpen={isOpenChildModal}
                toggle={toggle}
                showToastError={showToastError}
                showToastWarning={showToastWarning}
                showToastSuccess={showToastSuccess}
            />
            <ToastContainer />
        </div >
    )
}

function mapStateToProps(state) {

    return {
        //dataRedux1: state.users,
        //listProducts: state.product.listProducts
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userLoginSuccess: (userInfo) => dispatch(actions.userLoginSuccess(userInfo))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);