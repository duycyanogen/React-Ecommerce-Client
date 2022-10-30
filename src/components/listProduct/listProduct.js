import Card from "../card/card"
import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { connect, useSelector } from 'react-redux';
import './listProduct.scss'
import * as actions from '../../store/actions/index'
import {DoubleLeftOutlined, DoubleRightOutlined} from '@ant-design/icons';
function ListProduct(props) {

    const listProducts = useSelector(state => state.product.listProducts);
    const [pageNumber, setPageNumber] = useState(1);
    const [limitNumber] = useState(12);
    const currentPageNumber = (pageNumber * limitNumber) - limitNumber;
    const listRender = listProducts?.slice(currentPageNumber, currentPageNumber + limitNumber);
    console.log("List All", listProducts);
    console.log("List paginate", listRender);

    const handlePrev = () => {
        if (pageNumber === 1) return
        setPageNumber(pageNumber - 1)
    }
    const handleNext = () => {
        if (pageNumber > listProducts.length / limitNumber)
            return
        setPageNumber(pageNumber + 1)
    }
    useEffect(() => {
        async function fetchProduct() {
            await props.getAllProduct();
        }
        fetchProduct();
    }, []);


    return (
        <div className="container">
            <p className="container__title">Danh sách sản phẩm</p>
            <div className="container__content row hidden-md-up mg">
                {
                    listRender && listRender.length > 0 ? (listRender.map((item, index) => {
                        return (<Card
                            key={index}
                            id={item.id}
                            name={item.name}
                            price={item.price}
                            discount={item.discount}
                            content={item.contents}
                            views={item.views}
                            imageURL={item.imageURL} />)
                    })) : null

                }
                <div className="list-product-footer">
                    <button className="product-header-cta green-bg" style={{ marginRight: "5px" }} onClick={() => handlePrev()}><DoubleLeftOutlined /></button>
                    <p className="list-product-footer__index">Page {pageNumber} </p>
                    <button className="product-header-cta green-bg" style={{ marginRight: "5px" }} onClick={() => handleNext()}><DoubleRightOutlined /></button>
                </div>
            </div>
        </div>

    )

}

const mapStateToProps = (state) => {
    return {
        //dataRedux1: state.users,
        //listProducts: state.product.listProducts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAllProduct: () => dispatch(actions.getAllProduct()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListProduct);