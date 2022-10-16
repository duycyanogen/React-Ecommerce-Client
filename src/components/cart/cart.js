import { React, useState, useEffect } from "react";
import './cart.scss'
import { getCart } from '../../services/cartService'
import { useSelector } from 'react-redux';
import PayConfirmModal from "../payConfirmModal/payConfirmModal";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
const Cart = () => {
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
        console.log("Đang fetch API nè!");
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
        cartList && cartList.length > 0 ? (
            <div className="cart-page">
                <div className="cart-page-container">

                    <div className="cart-page-table">
                        <table className="cart-table-product">
                            <thead>
                                <tr className="cart-table-header">
                                    <th className="cart-table-img" style={{ textAlign: "center" }}>Hình ảnh</th>
                                    <th className="cart-table-desktop cart-table-product-name" style={{ textAlign: "center" }}>Tên sản phẩm</th>
                                    <th className="cart-table-desktop cart-table-payment" style={{ textAlign: "center" }}>Giá</th>
                                    <th className="cart-table-desktop cart-table-size" style={{ textAlign: "center" }}>Số lượng</th>
                                    <th className="cart-table-size right-text-mobile" style={{ textAlign: "center" }}>Thành tiền</th>
                                    <th className="cart-table-desktop cart-table-small-size" style={{ textAlign: "center" }}></th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartList.map((cart, index) => {
                                    return (
                                        <tr className="cart-table-content" key={index}>
                                            <td className="cart-table-image-info" style={{ textAlign: "center", verticalAlign: "middle" }}><img src={cart.imageURL} /></td>
                                            <td className="bold-text red-text cart-table-desktop" style={{ textAlign: "center", verticalAlign: "middle" }}>{cart.guitarName}</td>
                                            <td className="cart-table-desktop" style={{ textAlign: "center", verticalAlign: "middle" }}><span className="bold-text" >{cart.price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</span>
                                            </td>
                                            <td className="cart-table-desktop" style={{ textAlign: "center", verticalAlign: "middle" }}>
                                                <p>{cart.amount}</p>
                                            </td>
                                            <td className="cart-table-desktop" style={{ textAlign: "center", verticalAlign: "middle" }}>{(cart.price * cart.quantity * (100 - cart.discount) / 100).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</td>
                                            <td className="cart-table-icon red-text right-text-mobile" style={{ textAlign: "center", verticalAlign: "middle" }}><i className="fa fa-close"></i></td>
                                        </tr>
                                    )

                                })}

                                <tr className="cart-table-content cart-table-payment-content">
                                    <td className="cart-table-payment-detail" colspan="6">
                                        <div className="cart-table-plan-payment">
                                            <div className="cart-plan-payment-container">
                                                <table>
                                                    <tr>
                                                        <td className="cart-table-desktop cart-table-image-info"></td>
                                                        <td><span className="bold-text">Tổng tiền: </span>{cartList.reduce(
                                                            (prev, current) => prev + current.price * current.quantity * (100 - current.discount) / 100,
                                                            0
                                                        ).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</td>
                                                    </tr>
                                                </table>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="cart-block-right">

                        <div className="cart-header-footer">
                            <button href="#" className="cart-header-cta red-bg" target="_blank" onClick={() => showModal()}>Thanh toán</button>
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

        ) : <div>Chưa có sản phẩm nào</div>

    )
}

export default Cart