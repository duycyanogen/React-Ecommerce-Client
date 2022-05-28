import './Login.scss'
import { handleLogin } from '../services/userServices'
const { Component } = require("react");
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: '',
            errorMessage: ''

        }
    }

    handleChangeUserName = (e) => {
        this.setState({
            ...this.state,
            userName: e.target.value,
        }
        )
    }

    handleChangePassword = (e) => {
        this.setState({
            ...this.state,
            password: e.target.value,
        }
        )
    }

    handleLogin = async () => {
        this.setState({
            errorMessage: ''
        })
        try {

            await handleLogin(this.state.userName, this.state.password).then(res => {
                console.log(res.data);
            })
        }
        catch (error) {
            if (error.response) {
                if (error.response.data) {
                    this.setState({
                        errorMessage: error.response.data.message
                    })
                }
            }
        }

    }


    render() {
        return (
            <div className="login-background">
                <div className="login-container col-3">
                    <div className="login-content row">
                        <div className="col-12">
                            <h1>
                                Login
                            </h1>
                        </div>
                        <div className="col-12">
                            <label className=''>Tên đăng nhập</label>
                            <input type="text" className="" id='txtUserName' value={this.state.userName} onChange={(e) => this.handleChangeUserName(e)} />
                        </div>
                        <div className="col-12">
                            <label className='' id='txtPassword' >Mật khẩu</label>
                            <input type="password" className="" value={this.state.password} onChange={(e) => this.handleChangePassword(e)} />
                        </div>
                        <div className="col-12">
                            <button className='btn-login btn-success' id='btnLogin' onClick={() => this.handleLogin()}>Đăng nhập</button>

                        </div>
                        <div className="col-12 regis-now" style={{ display: this.state.errorMessage.length > 0 ? "flex" : "none" }}>
                            <span className='err-message'>{this.state.errorMessage}</span>
                        </div>
                        <div className="col-12 regis-now">
                            <div className="suggest">

                                <span>Bạn chưa có tài khoản? </span>
                                <a href='#'>Đăng kí ngay</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div >
        )
    }
}