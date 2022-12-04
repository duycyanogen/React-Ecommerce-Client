import { React, useState, useEffect } from "react";
import './transactionManager.scss'
import { handleGetAllTransaction, handleUpdateStatusTransaction } from '../../services/transactionService'
import { useSelector } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { TableCustom } from "../commonModules/TableCustom";
import { useNavigate } from "react-router-dom";

import { ContainerTitle } from "../commonModules/ContainerTitle";

const TransactionManager = () => {
    const navigate = useNavigate();
    const [orderList, setOrderList] = useState([]);
    const userInfo = useSelector(state => state.user.userInfo);
    const [listUniqueTrans, setListUniqueTrans] = useState([]);


    useEffect(() => {
        async function fetchTransaction() {
            await handleGetAllTransaction().then(res => {
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

    const updateStatusTransaction = async (transactionID, status) => {
        try {
            await handleUpdateStatusTransaction(transactionID, status).then(res => {
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
        await handleGetAllTransaction().then(res => {
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
            dataIndex: 'deleteTransactionManager',
            key: 'deleteTransactionManager',
            render: () => <button className="primary-button">Hủy đơn</button>
        }
    ];

    return (
        orderList && orderList.length > 0 ? (
            <div className="transactionManager-page">
                <ContainerTitle title='Quản lý đơn hàng' />
                <div className="transactionManager-page-container">
                    {/* {listUniqueTrans && listUniqueTrans.length > 0} */}

                    {listUniqueTrans?.map((trans, index) => {
                        return (
                            <div key={index} className="transactionManager-page-table" style={{ marginTop: "20px" }}>
                                <table className="transactionManager-table-product">
                                    <div style={{ display: "flex", marginBottom: '10px', justifyContent: 'space-between' }}>
                                        <h2 className="transactionManager-table-product-title">Đơn hàng {trans} - Khách hàng {orderList.find(x => x.transactionID == trans).customerName}</h2>
                                        <button className={orderList.find(x => x.transactionID == trans).adminAccept == true || orderList.find(x => x.transactionID == trans).UserCanceled == true ? "transactionManager-header-cta gray-bg" : "transactionManager-header-cta primary-button"} onClick={() => updateStatusTransaction(trans, 1)} style={{ width: 'fit-content' }}>Xác nhận đơn hàng</button>
                                        <button className={orderList.find(x => x.transactionID == trans).adminAccept == true || orderList.find(x => x.transactionID == trans).UserCanceled == true ? "transactionManager-header-cta gray-bg" : "transactionManager-header-cta primary-button"} onClick={() => updateStatusTransaction(trans, 2)} style={{ width: 'fit-content' }}>Từ chối đơn hàng</button>
                                    </div>
                                    <thead>
                                        <tr className="transactionManager-table-header">
                                            {/* <th className="transactionManager-table-desktop transactionManager-table-transaction-id" style={{ textAlign: "center" }}>Mã đơn hàng</th> */}
                                            <th className="transactionManager-table-img" style={{ textAlign: "center" }}>Hình ảnh</th>
                                            <th className="transactionManager-table-desktop transactionManager-table-product-name" style={{ textAlign: "center" }}>Tên sản phẩm</th>
                                            <th className="transactionManager-table-desktop transactionManager-table-size" style={{ textAlign: "center" }}>Số lượng</th>
                                            <th className="transactionManager-table-desktop transactionManager-table-payment" style={{ textAlign: "center" }}>Thành tiền</th>
                                            <th className="transactionManager-table-size right-text-mobile" style={{ textAlign: "center" }}>Trạng thái</th>
                                            {/* <th className="transactionManager-table-desktop transactionManager-table-small-size" style={{ textAlign: "center" }}></th> */}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {orderList.filter(x => x.transactionID == trans).map((transactionManager, index) => {
                                            return (
                                                <tr className="transactionManager-table-content" key={index}>
                                                    {/* <td className="bold-text red-text transactionManager-table-desktop" style={{ textAlign: "center", verticalAlign: "middle" }}>{transactionManager.transactionID}</td> */}
                                                    <td className="transactionManager-table-image-info" style={{ textAlign: "center", verticalAlign: "middle" }}><img src={transactionManager.imageURL} /></td>
                                                    <td className="bold-text transactionManager-table-desktop" style={{ textAlign: "center", verticalAlign: "middle" }}>{transactionManager.flowerName}</td>
                                                    <td className="transactionManager-table-desktop" style={{ textAlign: "center", verticalAlign: "middle" }}>
                                                        <p>{transactionManager.quantity}</p>
                                                    </td>
                                                    <td className="transactionManager-table-desktop" style={{ textAlign: "center", verticalAlign: "middle" }}><span className="bold-text" >{transactionManager.amount.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</span></td>
                                                    <td className="transactionManager-table-desktop" style={{ textAlign: "center", verticalAlign: "middle" }}>{transactionManager.transacitionStatusName}</td>
                                                    {/* <td className="transactionManager-table-icon red-text right-text-mobile" style={{ textAlign: "center", verticalAlign: "middle" }}><i className="fa fa-close"></i></td> */}
                                                </tr>
                                            )
                                        })}

                                        <tr className="transactionManager-table-content transactionManager-table-payment-content">
                                            <td className="transactionManager-table-payment-detail" colSpan="6">
                                                <div className="transactionManager-table-plan-payment">
                                                    <div className="transactionManager-plan-payment-container">
                                                        <table>
                                                            <tr>
                                                                <td className="transactionManager-table-desktop transactionManager-table-image-info"></td>
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

export default TransactionManager