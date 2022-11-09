import { React, useState, useEffect } from "react";
import './cart.scss'
import { getCart } from '../../services/cartService'
import { useSelector } from 'react-redux';
import PayConfirmModal from "../payConfirmModal/payConfirmModal";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
import { ContainerTitle } from "../ContainerTitle";

const Cart = () => {
    const navigate  = useNavigate();
    const [cartList, setCartList] = useState([]);
    const [fetching, setFetching] = useState(false)
    const userInfo = useSelector(state => state.user.userInfo);
    const orderReq = {
        "listCart": cartList,
        "userID": userInfo?.id,
        "customerName": userInfo?.name,
        "customerEmail": userInfo?.email,
        "customerPhone": userInfo?.phone,
        "customerAddress": userInfo?.address,
        "amount": cartList?.reduce((prev, current) => prev + current.price * current.quantity, 0),
        "message": "Đặt hàng",
        "status": 0,
        "note": "Đặt hàng"
    }
    //const cartList = [];

    useEffect(() => {
        async function fetchCart() {
            await getCart(userInfo.id).then(res => {
                setCartList(res.data.cartsData);
            });
        }
        fetchCart();
    }, []);


    const [isOpenChildModal, setIsOpenChildModal] = useState(false);

    const showModal = () => {
        setIsOpenChildModal(true);
    }

    const fetch = async () => {
        await getCart(userInfo.id).then(res => {
            setCartList(res.data.cartsData);
        });
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
    return (
        <div className="cart-container">
<<<<<<< HEAD
            <ContainerTitle title = 'Giỏ hàng'/>
            { cartList && cartList.length > 0 ? (
            <div className="cart-page">
                <div className="cart-page-container">

                    <div className="cart-page-table">
                        <table className="cart-table-product">
                            <thead>
                                <tr className="cart-table-header">
                                    <th className="" style={{ textAlign: "center" }}>Hình ảnh</th>
                                    <th className="" style={{ textAlign: "center" }}>Tên sản phẩm</th>
                                    <th className="" style={{ textAlign: "center" }}>Giá</th>
                                    <th className="" style={{ textAlign: "center" }}>Số lượng</th>
                                    <th className="" style={{ textAlign: "center" }}>Thành tiền</th>
                                    <th className="" style={{ textAlign: "center" }}>Xóa</th>
                                </tr>
                            </thead>
                            <tbody style={{position:"relative"}}>
                                {cartList.map((cart, index) => {
                                    return (
                                        <tr className="cart-table-content" key={index}>
                                            <td className="" style={{ textAlign: "center", verticalAlign: "middle" }}><img src={cart.imageURL} /></td>
                                            <td className="" style={{ textAlign: "center", verticalAlign: "middle" }}>{cart.guitarName}</td>
                                            <td className="" style={{ textAlign: "center", verticalAlign: "middle" }}><span className="bold-text" >{cart.price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</span>
                                            </td>
                                            <td className="" style={{ textAlign: "center", verticalAlign: "middle" }}>
                                                <span>{cart.amount}</span>
                                            </td>
                                            <td className="" style={{ textAlign: "center", verticalAlign: "middle" }}>{(cart.price * cart.quantity * (100 - cart.discount) / 100).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</td>
                                            <td className="cart-table-icon red-text right-text-mobile" style={{ textAlign: "center", verticalAlign: "middle" }}><i className="fa fa-close"></i></td>
                                        </tr>
                                    )

                                })}

                                <tr className="cart-table-content cart-table-payment-content cart-table-payment-content-sum" style={{position:"absolute", right: "0px"}}>
                                    <div className="cart-table-payment-detail">
                                        <span className="payment-sum">Tổng tiền: </span>{cartList.reduce(
                                             (prev, current) => prev + current.price * current.quantity * (100 - current.discount) / 100,
=======
            <p className="primary-title">Giỏ hàng</p>
            {cartList && cartList.length > 0 ? (
                <div className="cart-page">
                    <div className="cart-page-container">

                        <div className="cart-page-table">
                            <table className="cart-table-product">
                                <thead>
                                    <tr className="cart-table-header">
                                        <th className="" style={{ textAlign: "center" }}>Hình ảnh</th>
                                        <th className="" style={{ textAlign: "center" }}>Tên sản phẩm</th>
                                        <th className="" style={{ textAlign: "center" }}>Giá</th>
                                        <th className="" style={{ textAlign: "center" }}>Số lượng</th>
                                        <th className="" style={{ textAlign: "center" }}>Thành tiền</th>
                                        <th className="" style={{ textAlign: "center" }}>Xóa</th>
                                    </tr>
                                </thead>
                                <tbody style={{ position: "relative" }}>
                                    {cartList.map((cart, index) => {
                                        return (
                                            <tr className="cart-table-content" key={index}>
                                                <td className="" style={{ textAlign: "center", verticalAlign: "middle" }}><img src={cart.imageURL} /></td>
                                                <td className="" style={{ textAlign: "center", verticalAlign: "middle" }}>{cart.guitarName}</td>
                                                <td className="" style={{ textAlign: "center", verticalAlign: "middle" }}><span className="bold-text" >{cart.price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</span>
                                                </td>
                                                <td className="" style={{ textAlign: "center", verticalAlign: "middle" }}>
                                                    <span>{cart.amount}</span>
                                                </td>
                                                <td className="" style={{ textAlign: "center", verticalAlign: "middle" }}>{(cart.price * cart.quantity * (100 - cart.discount) / 100).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</td>
                                                <td className="cart-table-icon red-text right-text-mobile" style={{ textAlign: "center", verticalAlign: "middle" }}><i className="fa fa-close"></i></td>
                                            </tr>
                                        )

                                    })}

                                    <tr className="cart-table-content cart-table-payment-content cart-table-payment-content-sum" style={{ position: "absolute", right: "0px" }}>
                                        <div className="cart-table-payment-detail">
                                            <span className="payment-sum">Tổng tiền: </span>{cartList.reduce(
                                                (prev, current) => prev + current.price * current.quantity * (100 - current.discount) / 100,
>>>>>>> d258e081971aa67a94233179f29fb4d99f648bb9
                                                0
                                            ).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}
                                        </div>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="cart-block-right">
                            <div className="cart-header-footer">
                                <button href="#" className="cart-header-cta red-bg primary-button cart-header-footer-btn" target="_blank" onClick={() => showModal()}>Thanh toán</button>
                            </div>
                        </div>
                    </div>
                    <PayConfirmModal
                        payUserInfo={orderReq}
                        isOpen={isOpenChildModal}
                        toggle={toggle}
                        showToastError={showToastError}
                        showToastWarning={showToastWarning}
                        showToastSuccess={showToastSuccess}
                        fetch={fetch}
                    />
                    <ToastContainer />
                </div>

            ) : <p className='primary-title'>Chưa có sản phẩm nào</p>}
        </div>


    )
}

export default Cart