
import { React, useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Modal, ModalBody
} from "reactstrap"
import { useNavigate } from 'react-router-dom';
import './payConfirmModal.scss'
import { handleAddNewTransaction } from '../../services/transactionService'
export default function PayConfirmModal(props) {


    const [isOpen, setIsOpen] = useState(props.isOpen);
    const [name, setName] = useState(props.payUserInfo?.customerName);
    const [phone, setPhone] = useState(props.payUserInfo?.customerPhone);
    const [address, setAddress] = useState(props.payUserInfo?.customerAddress);
    const [email, setEmail] = useState(props.payUserInfo?.customerEmail);
    const [amount, setAmount] = useState(props.payUserInfo?.amount);
    const [note, setNote] = useState(props.payUserInfo?.note);
    const navigate = useNavigate();

    const toggle = () => {
        props.toggle();
    }

    const fetch = () => {
        props.fetch();
    }

    const showToastError = (content) => {
        props.showToastError(content);
    }

    const showToastWarning = (content) => {
        props.showToastWarning(content);
    }

    const showToastSuccess = (content) => {
        props.showToastSuccess(content);
    }

    const handleChangeInput = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    const createOrder = async () => {
        let orderRequest = {};
        let listCartTemp = props.payUserInfo?.listCart.map(item => {
            return {
                ...item,
                amount: item.quantity * item.price * (100 - item.discount) / 100
            }
        })
        // console.log(listCartTemp);
        orderRequest.listCart = listCartTemp;
        orderRequest.userID = props.payUserInfo?.userID;
        orderRequest.customerName = name;
        orderRequest.customerEmail = email;
        orderRequest.customerPhone = phone;
        orderRequest.customerAddress = address;
        orderRequest.amount = amount;
        orderRequest.message = note;
        orderRequest.status = 0;
        orderRequest.note = note;
        //console.log("req", orderRequest);
        try {
            await handleAddNewTransaction(orderRequest).then(res => {
                console.log(res);
                showToastSuccess("Đặt hàng thành công");
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

        //console.log("req", JSON.stringify(orderRequest));
    }


    return (
        // <div style={{
        //     display: 'block', width: 700, padding: 30, zIndex: 9999
        // }}>
        <Modal isOpen={props.isOpen}
            toggle={() => toggle()}
            modalTransition={{ timeout: 500 }}
            centered={true}
            contentClassName="modal">
            <ModalBody>
                <div className='header'>Thông tin thanh toán</div>
                <div className='field'>
                    <label className='label'>Khách hàng</label>
                    <input type="text" className="input" name='name' value={name} onChange={(e) => handleChangeInput(e)} />
                </div>
                <div className='field'>
                    <label className='label' >Địa chỉ</label>
                    <input type="text" className="input" name='address' value={address} onChange={(e) => handleChangeInput(e)} />
                </div>
                <div className='field'>
                    <label className='label' >email</label>
                    <input type="text" className="input" name='email' value={email} onChange={(e) => handleChangeInput(e)} />
                </div>
                <div className='field'>
                    <label className='label' >Số điện thoại</label>
                    <input type="text" className="input" name='phone' value={phone} onChange={(e) => handleChangeInput(e)} />
                </div>

                <div className='field'>
                    <label className='label' >Ghi chú</label>
                    <input type="text" className="input" name='note' value={note} onChange={(e) => handleChangeInput(e)} />
                </div>
                <div className='field'>
                    <label className='label' >Tổng tiền:</label>
                    <span style={{ lineHeight: "40px", fontSize: "20px" }}>{amount.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</span>
                </div>
                <div className='button-bar'>
                    <button className='btn-regis' onClick={() => createOrder()}>Xác nhận</button>
                    <button className='btn-cancel' onClick={() => toggle()}>Thoát</button>
                </div>
            </ModalBody>
        </Modal>
        // </div >
    )

}