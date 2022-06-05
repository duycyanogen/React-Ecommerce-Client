import './header.scss'
import guitar from '../../assets/img/guitar.jpg'

const { Component } = require("react");


export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: '',
            errorMessage: ''

        }
    }

    render() {
        return (
            <div className="wrapper">


                <div className="wrapper-top-menu">
                    <div className='nav-logo'>
                        <img src={guitar} />
                    </div>
                    <div className='nav-body'>
                        <div className="wrap-search-bar">
                            <span className="icon"><i class="fa-solid fa-magnifying-glass"></i></span>
                            <input type="text" className="search-input" placeholder='Nhập gì đó...' />

                        </div>
                    </div>
                    <div className='nav-action'>
                        <div className='action-item'>
                            <p className="my-text">Xin chào Nguyễn Thế Duy</p>
                        </div>
                        <div className='action-item user-icon'>
                            <span className="icon"><i class="fa-solid fa-user"></i></span>
                            <ul className='user-action'>
                                <a href='/login'><li>Đăng nhập</li></a>
                                <a href='/logout'><li>Đăng xuất</li></a>
                                <a href='/regis'><li>Đăng kí</li></a>
                            </ul>
                        </div>
                        <div className='action-item'>
                            <span className="icon"><i class="fa-solid fa-cart-shopping"></i></span>
                        </div>
                    </div>
                </div >

                <div className="sidebar">
                    <ul>
                        <li><a href="#">
                            <span className="icon"><i className="fas fa-book"></i></span>
                            <span className="title">Books</span>
                        </a></li>
                        <li><a href="#">
                            <span className="icon"><i className="fas fa-file-video"></i></span>
                            <span className="title">Movies</span>
                        </a></li>
                        <li><a href="#">
                            <span className="icon"><i className="fas fa-volleyball-ball"></i></span>
                            <span className="title">Sports</span>
                        </a></li>
                        <li><a href="#" class="active">
                            <span className="icon"><i className="fas fa-blog"></i></span>
                            <span className="title">Blogs</span>
                        </a></li>
                        <li><a href="#">
                            <span className="icon"><i class="fas fa-leaf"></i></span>
                            <span className="title">Nature</span>
                        </a></li>
                    </ul>
                </div>
                <div className="props-container">
                    {this.props.children}
                </div>

            </div>
        )
    }
}