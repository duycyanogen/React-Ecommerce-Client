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
                            <li>Option 1</li>
                            <li>Option 2</li>
                            <li>Option 3</li>
                            <li>Option 4</li>
                        </ul>
                    </div>
                    <div className='action-item'>
                        <span className="icon"><i class="fa-solid fa-cart-shopping"></i></span>
                    </div>
                </div>
            </div >
        )
    }
}