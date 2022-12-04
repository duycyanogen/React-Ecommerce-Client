import { React, useState, useEffect } from "react";
import './order.scss'
import { handleGetAllTransactionByUser } from '../../services/transactionService'
import { useSelector } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { handleDeleteTransaction } from '../../services/transactionService'
import { TableCustom } from "../commonModules/TableCustom";
import "../../assets/img/guitar.jpg"
import { useNavigate } from "react-router-dom";
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Container } from "reactstrap";
import { ContainerTitle } from "../commonModules/ContainerTitle";

const Order = () => {
    const navigate = useNavigate();
    const [orderList, setOrderList] = useState([]);
    const userInfo = useSelector(state => state.user.userInfo);
    const [listUniqueTrans, setListUniqueTrans] = useState([]);


    useEffect(() => {
        async function fetchTransaction() {
            await handleGetAllTransactionByUser(userInfo.id).then(res => {
                let listTrans = res.data.object;
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
        fetchTransaction();
    }, []);


    const deleteTransaction = async (transactionID) => {
        try {
            await handleDeleteTransaction(transactionID).then(res => {
                showToastSuccess(res.data.object);
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
        await handleGetAllTransactionByUser(userInfo.id).then(res => {
            let listTrans = res.data.object;
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


    const columns = [
        {
            title: 'Hình ảnh',
            dataIndex: 'img',
            key: 'img',
            render: (img) => <img src={img} />
        },
        {
            title: 'Tên sản phẩm',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Số lượng',
            dataIndex: 'count',
            key: 'count',
        },
        {
            title: 'Thành tiền',
            dataIndex: 'money',
            key: 'money',
        },
        {
            title: 'Hủy đơn hàng',
            dataIndex: 'deleteOrder',
            key: 'deleteOrder',
            render: () => <button className="primary-button">Hủy đơn</button>
        }
    ];

    return (
        orderList && orderList.length > 0 ? (
            <div className="order-page">
                <ContainerTitle title='Đơn hàng của bạn' />
                <div className="order-page-container">
                    {/* {listUniqueTrans && listUniqueTrans.length > 0} */}

                    {listUniqueTrans?.map((trans, index) => {
                        return (
                            <div key={index} className="order-page-table" style={{ marginTop: "20px" }}>
                                <table className="order-table-product">
                                    <div style={{ display: "flex", marginBottom: '10px', justifyContent: 'space-between' }}>
                                        <h2 className="order-table-product-title">Đơn hàng {trans}</h2>
                                        <button disabled={orderList.find(x => x.transactionID == trans).transactionStatus} className={orderList.find(x => x.transactionID == trans).transactionStatus ? "order-header-cta gray-bg disable" : "order-header-cta primary-button"} onClick={() => deleteTransaction(trans)} style={{ width: 'fit-content' }}>Hủy đơn hàng</button>
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
                                                    <td className="bold-text order-table-desktop" style={{ textAlign: "center", verticalAlign: "middle" }}>{order.flowerName}</td>
                                                    <td className="order-table-desktop" style={{ textAlign: "center", verticalAlign: "middle" }}>
                                                        <p>{order.quantity}</p>
                                                    </td>
                                                    <td className="order-table-desktop" style={{ textAlign: "center", verticalAlign: "middle" }}><span className="bold-text" >{order.amount.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</span></td>
                                                    <td className="order-table-desktop" style={{ textAlign: "center", verticalAlign: "middle" }}>{order.transacitionStatusName}</td>
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
                    {/* <TableCustom dataTable={dataSource} columnsTable={columns} pageSize={2} /> */}
                </div>
                <ToastContainer />
            </div>

        ) : <p className='primary-title'>Chưa có sản phẩm nào</p>

    )
}

export default Order