
import React, { Fragment } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Modal,
    ModalBody
} from "reactstrap"
import './flowerModal.scss'
import { handleAddNewFlower, handleUpdateFlower } from '../../services/flowerService'
const { Component } = require("react");

export default class flowerModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            productInfo: props.productInfo,
            isOpen: props.isOpen,
            id: props.productInfo?.id,
            name: props.productInfo ? props.productInfo?.name : 'flower Taylor x100 acoustic',
            price: props.productInfo ? props.productInfo?.price : '345000',
            contents: props.productInfo ? props.productInfo?.contents : 'Đàn được làm hoàn toàn từ gỗ nguyên miếng, sử dụng càng lâu âm thanh càng hay, đó là đặc điểm nổi bật nhất của đàn Việt Nam so với đa số các dòng đàn nước ngoài khác.',
            discount: props.productInfo ? props.productInfo?.discount : '30',
            errorMessage: '',
            file: null,
            previewUrl: props.productInfo ? props.productInfo?.imageURL : ''
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.productInfo !== nextProps.productInfo) {
            this.setState({
                id: nextProps.productInfo?.id,
                name: nextProps.productInfo ? nextProps.productInfo?.name : 'flower Taylor x100 acoustic',
                price: nextProps.productInfo ? nextProps.productInfo?.price : '345000',
                contents: nextProps.productInfo ? nextProps.productInfo?.contents : 'Đàn được làm hoàn toàn từ gỗ nguyên miếng, sử dụng càng lâu âm thanh càng hay, đó là đặc điểm nổi bật nhất của đàn Việt Nam so với đa số các dòng đàn nước ngoài khác.',
                discount: nextProps.productInfo ? nextProps.productInfo?.discount : '30',
                errorMessage: '',
                file: null,
                previewUrl: nextProps.productInfo ? nextProps.productInfo?.imageURL : ''
            });
        }
        return true;
    }


    // static getDerivedStateFromProps(nextProps, currentState) {
    //     // Any time props.email changes, update state.
    //     if (nextProps.productInfo !== currentState.productInfo) {

    //     }
    // }

    toggle = () => {
        this.props.toggle();
    }

    fetch = () => {
        this.props.fetch();
    }

    showToastError = (content) => {
        this.props.showToastError(content);
    }



    showToastWarning = (content) => {
        this.props.showToastWarning(content);
    }

    showToastSuccess = (content) => {
        this.props.showToastSuccess(content);
    }
    checkValidateInput = () => {
        let isValid = true;
        let arrInput = ['name', 'price', 'contents', 'discount', 'file'];
        for (let i = 0; i < arrInput.length; i++) {
            if (!this.state[arrInput[i]]) {
                isValid = false;
                this.showToastWarning(`Vui lòng nhập ${arrInput[i]}`);
                break;
            }
        }
        return isValid;
    }

    handleAddNewFlower = async () => {
        if (!this.checkValidateInput())
            return;
        try {
            let input = this.state;
            if (input.id > 0)
                await handleUpdateFlower(input).then(res => {
                    this.showToastSuccess(res.data.flowerData.message);
                })
            else
                await handleAddNewFlower(input).then(res => {
                    this.showToastSuccess(res.data.flowerData.message);
                })
            this.fetch();
        }
        catch (error) {
            if (error.response) {
                if (error.response.data) {
                    this.showToastError(error.response.data.message);
                }
            }
        }

    }

    handleChangeInput = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleChangeFile = (e) => {
        const file = e.target.files[0];
        if (!file) {
            this.setState({
                file: null,
                previewUrl: undefined
            })
            return;
        }
        else {
            const objectUrl = URL.createObjectURL(file);
            this.setState({
                file: file,
                previewUrl: objectUrl
            })
        }
    }

    handleCancelImage = (e) => {
        e.preventDefault();
        this.setState({
            file: null,
            previewUrl: undefined
        })
    }

    render() {

        return (

            <Modal isOpen={this.props.isOpen}
                toggle={() => this.toggle()}
                modalTransition={{ timeout: 500 }}
                centered={true}>
                <ModalBody>
                    <div className='header'>{this.state.id > 0 ? "Cập nhật thông tin sản phẩm" : "Thêm mới sản phẩm"}</div>
                    <div className='container-content'>
                        <div className='field'>
                            <label className='label'>Tên đàn</label>
                            <input type="text" className="input" name='name' value={this.state.name} onChange={(e) => this.handleChangeInput(e)} />
                        </div>
                        <div className='field'>
                            <label className='label' >Giá</label>
                            <input type="text" className="input" name='price' value={this.state.price} onChange={(e) => this.handleChangeInput(e)} />
                        </div>
                        <div className='field'>
                            <label className='label' >Mô tả</label>
                            <input type="text" className="input" name='contents' value={this.state.contents} onChange={(e) => this.handleChangeInput(e)} />
                        </div>
                        <div className='field'>
                            <label className='label' >Giảm giá (%)</label>
                            <input type="text" className="input" name='discount' value={this.state.discount} onChange={(e) => this.handleChangeInput(e)} />
                        </div>
                        <div className='field'>
                            <div className='container'>
                                <div className='img-block'>
                                    <div className='img-block__left'>
                                        <label id="image-preview" htmlFor="file" className='label' >
                                            {this.state.file ?
                                                (<Fragment>
                                                    <img src={this.state.previewUrl}></img>
                                                    <div className='file-name'>{this.state.file.name}</div>
                                                    <span className='close-btn' onClick={(e) => this.handleCancelImage(e)}><i class="fa-solid fa-xmark"></i></span>
                                                </Fragment>) : (<Fragment>
                                                    <div className='content'>
                                                        <div className='icon'>
                                                            <i className="fa fa-cloud-upload icon" aria-hidden="true"></i>
                                                        </div>
                                                        <div className='text'>Chưa có file nào được chọn</div>
                                                    </div>
                                                </Fragment>)}
                                        </label>
                                    </div>
                                    <div className='img-block__right'>
                                        <div className='img-block__right__top'>
                                            <label id="image-preview" htmlFor="file" className='label' >
                                                {this.state.file ?
                                                    (<Fragment>
                                                        <img src={this.state.previewUrl}></img>
                                                        <div className='file-name'>{this.state.file.name}</div>
                                                        <span className='close-btn' onClick={(e) => this.handleCancelImage(e)}><i class="fa-solid fa-xmark"></i></span>
                                                    </Fragment>) : (<Fragment>
                                                        <div className='content'>
                                                            <div className='icon'>
                                                                <i className="fa fa-cloud-upload icon" aria-hidden="true"></i>
                                                            </div>
                                                            <div className='text'>Chưa có file nào được chọn</div>
                                                        </div>
                                                    </Fragment>)}
                                            </label>
                                        </div>
                                        <div className='img-block__right__bottom'></div>
                                    </div>
                                </div>
                                <label id="image-preview" htmlFor="file" className='label' >
                                    {this.state.file ?
                                        (<Fragment>
                                            <img src={this.state.previewUrl}></img>
                                            <div className='file-name'>{this.state.file.name}</div>
                                            <span className='close-btn' onClick={(e) => this.handleCancelImage(e)}><i class="fa-solid fa-xmark"></i></span>
                                        </Fragment>) : (<Fragment>
                                            <div className='content'>
                                                <div className='icon'>
                                                    <i className="fa fa-cloud-upload icon" aria-hidden="true"></i>
                                                </div>
                                                <div className='text'>Chưa có file nào được chọn</div>
                                            </div>
                                        </Fragment>)}
                                </label>
                            </div>
                            <input type="file" className="input" name='file' id="file" style={{ display: "none" }} onChange={(e) => this.handleChangeFile(e)} />
                        </div>
                    </div>

                    <div className='button-bar'>
                        <button className='primary-button' onClick={() => this.toggle()}>Thoát</button>
                        <button className='primary-button' onClick={() => this.handleAddNewflower()}>{this.props.productInfo?.id > 0 ? "Cập nhật" : "Thêm mới"}</button>
                    </div>
                </ModalBody>
            </Modal>
            // </div >
        )
    }


}

flowerModal.defaultProps = {
    productInfo: {
        id: 0,
        name: "",
        price: "",
        contents: "",
        discount: "",
        imageURL: ""
    }

}