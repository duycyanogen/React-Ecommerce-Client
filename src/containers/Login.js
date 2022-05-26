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
                        <div className="col-12 text-center">
                            <h1>
                                Login
                            </h1>
                        </div>
                        <div className="col-12 form-group">
                            <label>Tên đăng nhập</label>
                            <input type="text" className="form-control" id='txtUserName' value={this.state.userName} onChange={(e) => this.handleChangeUserName(e)} />
                        </div>
                        <div className="col-12 form-group">
                            <label className='text-left' id='txtPassword' >Mật khẩu</label>
                            <input type="password" className="form-control" value={this.state.password} onChange={(e) => this.handleChangePassword(e)} />
                        </div>
                        <div className="col-12 text-center">
                            <button className='btn btn-success' id='btnLogin' onClick={() => this.handleLogin()}>Đăng nhập</button>

                        </div>
                        <div className="col-12 regis-now text-center" style={{ display: this.state.errorMessage.length > 0 ? "block" : "none" }}>
                            <span>{this.state.errorMessage}</span>
                        </div>
                        <div className="col-12 regis-now text-center">
                            <span>Bạn chưa có tài khoản? </span>
                            <a href='#'>Đăng kí ngay</a>
                        </div>
                    </div>

                </div>
            </div >
        )
    }
}