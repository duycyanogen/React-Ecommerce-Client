const { Component } = require("react");
export default class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="login-background">
                <div className="login-container">
                    <div className="login-content row">
                        <div className="col-12 text-center">Login</div>
                        <div className="col-12 form-group">
                            <label>Tên đăng nhập</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col-12 form-group">
                            <label>Mật khẩu</label>
                            <input type="password" className="form-control" />
                        </div>
                        <div className="col-12">
                            <button>Login</button>
                        </div>
                        <div className="col-12">
                            <span>Quên mật khẩu?</span>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}