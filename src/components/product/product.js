import { React, useState, useEffect } from "react";
import './product.scss'
import { getAll, handleDeleteGuitar } from '../../services/guitarServices'
import { useSelector } from 'react-redux';
import GuitarModal from "../guitarModal/guitarModal";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
const Product = () => {
    const [productList, setProductList] = useState([]);
    const userInfo = useSelector(state => state.user.userInfo);
    const [pageNumber, setPageNumber] = useState(1);
    const [limitNumber] = useState(5);
    const currentPageNumber = (pageNumber * limitNumber) - limitNumber;
    const listRender = productList?.slice(currentPageNumber, currentPageNumber + limitNumber);
    const [productInfo, setProductInfo] = useState(null);
    const handlePrev = () => {
        if (pageNumber === 1) return
        setPageNumber(pageNumber - 1)
    }
    const handleNext = () => {
        if (pageNumber > productList.length / limitNumber)
            return
        setPageNumber(pageNumber + 1)
    }

    useEffect(() => {

        async function fetchProduct() {
            await getAll().then(res => {
                setProductList(res.data.data.sort((a, b) => {
                    return - a.id + b.id
                }));
            });
        }
        fetchProduct();
    }, []);


    const [isOpenChildModal, setIsOpenChildModal] = useState(false);

    const showModal = () => {
        setIsOpenChildModal(true);
    }

    const fetch = async () => {
        showToastSuccess("Đang fetch API nè!");
        await getAll().then(res => {
            setProductList(res.data.data.sort((a, b) => {
                return - a.id + b.id
            }));
        });
    }

    const deleteProduct = async (productID) => {
        try {
            await handleDeleteGuitar(productID).then(res => {
                showToastSuccess("Xóa sản phẩm thành công!");
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

    const updateProduct = async (product) => {
        setProductInfo(product);
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
    return (
        listRender && listRender.length > 0 ? (
            <div className="product-page">
                <div className="product-page-container">

                    <div className="product-page-table">
                        <table className="product-table-product">
                            <thead>
                                <tr className="product-table-header">
                                    <th className="product-table-img" style={{ textAlign: "center" }}>Hình ảnh</th>
                                    <th className="product-table-desktop product-table-product-name" style={{ textAlign: "center" }}>Tên sản phẩm</th>
                                    <th className="product-table-desktop product-table-payment" style={{ textAlign: "center" }}>Giá</th>
                                    <th className="product-table-desktop product-table-size" style={{ textAlign: "center" }}>Chiết khấu (%)</th>
                                    <th className="product-table-size right-text-mobile" style={{ textAlign: "center" }}>Mô tả</th>
                                    <th className="product-table-desktop product-table-small-size" style={{ textAlign: "center" }}></th>
                                </tr>
                            </thead>
                            <tbody>
                                {listRender.map((product, index) => {
                                    return (
                                        <tr className="product-table-content" key={index}>
                                            <td className="product-table-image-info" style={{ textAlign: "center", verticalAlign: "middle" }}><img src={product.imageURL} /></td>
                                            <td className="bold-text red-text product-table-desktop" style={{ textAlign: "center", verticalAlign: "middle" }}>{product.name}</td>
                                            <td className="product-table-desktop" style={{ textAlign: "center", verticalAlign: "middle" }}><span className="bold-text" >{product.price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</span>
                                            </td>
                                            <td className="product-table-desktop" style={{ textAlign: "center", verticalAlign: "middle" }}>
                                                <p>{product.discount}</p>
                                            </td>
                                            <td className="product-table-desktop" style={{ textAlign: "center", verticalAlign: "middle" }}>{product.contents}</td>
                                            <td className="product-table-icon red-text right-text-mobile" style={{ textAlign: "center", verticalAlign: "middle" }}><div>
                                                <button className="product-header-cta orange-bg" style={{ marginBottom: "5px" }} onClick={() => updateProduct(product)}>Sửa</button>
                                                <button className="product-header-cta red-bg" onClick={() => deleteProduct(product.id)}>Xóa</button></div></td>
                                        </tr>
                                    )

                                })}


                            </tbody>
                        </table>
                    </div>
                    <div className="product-block-right">

                        <div className="product-header-footer">
                            <button href="#" className="product-header-cta green-bg" target="_blank" onClick={() => showModal()}>Thêm mới sản phẩm</button>
                        </div>
                    </div>
                    <div>Page {pageNumber} </div>
                    <div style={{ marginBottom: "20px" }}>
                        <button className="product-header-cta green-bg" style={{ marginRight: "5px" }} onClick={() => handlePrev()}>prev</button>
                        <button className="product-header-cta green-bg" onClick={() => handleNext()}>next</button>
                    </div>
                </div>
                <GuitarModal
                    productInfo={productInfo}
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

export default Product