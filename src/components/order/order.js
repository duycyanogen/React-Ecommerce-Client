import { React, useState, useEffect } from "react";
import './order.scss'
import { getOrder } from '../../services/orderServices'
import { useSelector } from 'react-redux';
import PayConfirmModal from "../payConfirmModal/payConfirmModal";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { handleDeleteTransaction } from '../../services/transactionService'
const Order = () => {
    const [orderList, setOrderList] = useState([]);
    const userInfo = useSelector(state => state.user.userInfo);
    const [listUniqueTrans, setListUniqueTrans] = useState([]);


    useEffect(() => {
        console.log("Đang fetch API nè!");
        console.log(orderList.find(x => x.transactionID == 8));
        async function fetchorder() {
            await getOrder(userInfo.id).then(res => {
                //console.log("Orders", );
                let listTrans = res.data.orderData;
                console.log(listTrans);
                let ids = [];
                listTrans.forEach((item) => {
                    ids.push(item.transactionID);
                })
                let unique = [...new Set(ids)].sort((a, b) => {
                    return - a + b
                });
                setListUniqueTrans(unique);
                setOrderList(listTrans.sort((a, b) => {
                    return - a.transactionID + b.transactionID
                }));
            });
        }
        fetchorder();
    }, []);


    const deleteTransaction = async (transactionID) => {
        //showToastSuccess("Hủy thành công đơn hàng " + transactionID);
        //console.log(transactionID);
        if (orderList.find(x => x.transactionID == transactionID).UserCanceled) {
            showToastWarning("Đơn hàng này đã hủy, không thể hủy nữa =))")
            return;
        }
        if (orderList.find(x => x.transactionID == transactionID).adminAccept) {
            showToastWarning("Đơn hàng này đã được xác nhận, không thể hủy nữa =))")
            return;
        }

        try {
            await handleDeleteTransaction(transactionID).then(res => {
                console.log(res);
                showToastSuccess("Hủy đơn hàng thành công");
                toggle();
                fetch();
            })
        }
        catch (error) {
            if (error.response) {
                if (error.response.data) {
                    showToastError(error.response.data.message);
                }
            }
        }
    }

    const [isOpenChildModal, setIsOpenChildModal] = useState(false);

    const showModal = () => {
        setIsOpenChildModal(true);
    }

    const fetch = async () => {
        await getOrder(userInfo.id).then(res => {
            //console.log("Orders", );
            let listTrans = res.data.orderData;
            console.log(listTrans);
            let ids = [];
            listTrans.forEach((item) => {
                ids.push(item.transactionID);
            })
            let unique = [...new Set(ids)].sort((a, b) => {
                return -a + b
            });
            setListUniqueTrans(unique);
            setOrderList(listTrans.sort((a, b) => {
                return - a.transactionID + b.transactionID
            }));
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
        orderList && orderList.length > 0 ? (
            <div className="order-page">
                <div className="order-page-container">
                    {/* {listUniqueTrans && listUniqueTrans.length > 0} */}

                    {listUniqueTrans?.map((trans, index) => {
                        return (
                            <div key={index} className="order-page-table" style={{ marginTop: "20px" }}>
                                <table className="order-table-product">
                                    <div style={{ display: "flex", margin: "10px" }}>
                                        <h2 style={{ lineHeight: "35px" }}>Đơn hàng {trans}</h2>
                                        <button className={orderList.find(x => x.transactionID == trans).adminAccept == true || orderList.find(x => x.transactionID == trans).UserCanceled == true ? "order-header-cta gray-bg" : "order-header-cta red-bg"} style={{ border: "none", marginLeft: "20px" }} onClick={() => deleteTransaction(trans)}>Hủy đơn hàng</button>
                                    </div>
                                    <thead>
                                        <tr className="order-table-header">
                                            {/* <th className="order-table-desktop order-table-transaction-id" style={{ textAlign: "center" }}>Mã đơn hàng</th> */}
                                            <th className="order-table-img" style={{ textAlign: "center" }}>Hình ảnh</th>
                                            <th className="order-table-desktop order-table-product-name" style={{ textAlign: "center" }}>Tên sản phẩm</th>
                                            <th className="order-table-desktop order-table-size" style={{ textAlign: "center" }}>Số lượng</th>
                                            <th className="order-table-desktop order-table-payment" style={{ textAlign: "center" }}>Thành tiền</th>
                                            <th className="order-table-size right-text-mobile" style={{ textAlign: "center" }}>Trạng thái</th>
                                            {/* <th className="order-table-desktop order-table-small-size" style={{ textAlign: "center" }}></th> */}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {orderList.filter(x => x.transactionID == trans).map((order, index) => {
                                            return (
                                                <tr className="order-table-content" key={index}>
                                                    {/* <td className="bold-text red-text order-table-desktop" style={{ textAlign: "center", verticalAlign: "middle" }}>{order.transactionID}</td> */}
                                                    <td className="order-table-image-info" style={{ textAlign: "center", verticalAlign: "middle" }}><img src={order.imageURL} /></td>
                                                    <td className="bold-text red-text order-table-desktop" style={{ textAlign: "center", verticalAlign: "middle" }}>{order.name}</td>
                                                    <td className="order-table-desktop" style={{ textAlign: "center", verticalAlign: "middle" }}>
                                                        <p>{order.quantity}</p>
                                                    </td>
                                                    <td className="order-table-desktop" style={{ textAlign: "center", verticalAlign: "middle" }}><span className="bold-text" >{order.amount.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</span></td>
                                                    <td className="order-table-desktop" style={{ textAlign: "center", verticalAlign: "middle" }}>{order.finalStatus}</td>
                                                    {/* <td className="order-table-icon red-text right-text-mobile" style={{ textAlign: "center", verticalAlign: "middle" }}><i className="fa fa-close"></i></td> */}
                                                </tr>
                                            )
                                        })}

                                        <tr className="order-table-content order-table-payment-content">
                                            <td className="order-table-payment-detail" colSpan="6">
                                                <div className="order-table-plan-payment">
                                                    <div className="order-plan-payment-container">
                                                        <table>
                                                            <tr>
                                                                <td className="order-table-desktop order-table-image-info"></td>
                                                                <td><span className="bold-text">Tổng tiền: </span>{orderList.filter(x => x.transactionID == trans).reduce(
                                                                    (prev, current) => prev + current.amount,
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
                        )
                    })}
                    {/* <div className="order-block-right">

                        <div className="order-header-footer">
                            <button href="#" className="order-header-cta red-bg" target="_blank" onClick={() => showModal()}>Thanh toán</button>
                        </div>
                    </div> */}
                </div>
                <ToastContainer />
                {/* <PayConfirmModal
                    payUserInfo={orderReq}
                    isOpen={isOpenChildModal}
                    toggle={toggle}
                    showToastError={showToastError}
                    showToastWarning={showToastWarning}
                    showToastSuccess={showToastSuccess}
                    fetch={fetch}
                /> */}
            </div>

        ) : <div>Chưa có sản phẩm nào</div>

    )
}

export default Order