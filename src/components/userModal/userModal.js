
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Modal, ModalBody
} from "reactstrap"
import './userModal.scss'
import { handleRegis } from '../../services/userServices'
const { Component } = require("react");

export default class UserModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: props.isOpen,
            email: '',
            password: '',
            name: '',
            address: '',
            phone: '',
            errorMessage: ''
        }
    }

    toggle = () => {
        this.props.toggle();
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
        let arrInput = ['email', 'password', 'name', 'phone', 'address'];
        for (let i = 0; i < arrInput.length; i++) {
            if (!this.state[arrInput[i]]) {
                isValid = false;
                this.showToastWarning(`Vui lòng nhập ${arrInput[i]}`);
                break;
            }
        }
        return isValid;
    }

    handleRegis = async () => {
        if (!this.checkValidateInput())
            return;
        try {
            let input = this.state;
            await handleRegis(input).then(res => {
                this.showToastSuccess(res.data.message)
            })
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

    render() {
        return (
            // <div style={{
            //     display: 'block', width: 700, padding: 30, zIndex: 9999
            // }}>
            <Modal isOpen={this.props.isOpen}
                toggle={() => this.toggle()}
                modalTransition={{ timeout: 500 }}
                centered={true}
                contentClassName="modal">
                <ModalBody>
                    <div className='header'>Đăng kí tài khoản</div>
                    <div className='field'>
                        <label className='label'>Email</label>
                        <input type="text" className="input" name='email' value={this.state.email} onChange={(e) => this.handleChangeInput(e)} />
                    </div>
                    <div className='field'>
                        <label className='label' >Mật khẩu</label>
                        <input type="password" className="input" name='password' value={this.state.password} onChange={(e) => this.handleChangeInput(e)} />
                    </div>
                    <div className='field'>
                        <label className='label' >Tên</label>
                        <input type="text" className="input" name='name' value={this.state.name} onChange={(e) => this.handleChangeInput(e)} />
                    </div>
                    <div className='field'>
                        <label className='label' >Số điện thoại</label>
                        <input type="text" className="input" name='phone' value={this.state.phone} onChange={(e) => this.handleChangeInput(e)} />
                    </div>
                    <div className='field'>
                        <label className='label' >Địa chỉ</label>
                        <input type="text" className="input" name='address' value={this.state.address} onChange={(e) => this.handleChangeInput(e)} />
                    </div>
                    <div className='button-bar'>
                        <button className='btn-regis' onClick={() => this.handleRegis()}>Đăng kí</button>
                        <button className='btn-cancel' onClick={() => this.toggle()}>Thoát</button>
                    </div>
                </ModalBody>
            </Modal>
            // </div >
        )
    }
}