// import './navbar.css'
import guitar from '../../assets/img/guitar.jpg'

const { Component } = require("react");


export default class Navbar extends Component {
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
            <div class="wrapper">
                <div class="top_navbar">
                    <div class="hamburger">
                        <div class="one"></div>
                        <div class="two"></div>
                        <div class="three"></div>
                    </div>
                    <div class="top_menu">
                        <div class="logo">
                            <img src={guitar} />
                        </div>
                        <ul>
                            <li><a href="#">
                                <i class="fas fa-search"></i>
                            </a></li>
                            <li><a href="#">
                                <i class="fas fa-bell"></i>
                            </a></li>
                            <li><a href="#">
                                <i class="fas fa-user"></i>
                            </a></li>
                        </ul>
                    </div>
                </div>
                <div class="sidebar">
                    <ul>
                        <li><a href="#">
                            <span class="icon"><i class="fas fa-book"></i></span>
                            <span class="title">Books</span>
                        </a></li>
                        <li><a href="#">
                            <span class="icon"><i class="fas fa-file-video"></i></span>
                            <span class="title">Movies</span>
                        </a></li>
                        <li><a href="#">
                            <span class="icon"><i class="fas fa-volleyball-ball"></i></span>
                            <span class="title">Sports</span>
                        </a></li>
                        <li><a href="#" class="active">
                            <span class="icon"><i class="fas fa-blog"></i></span>
                            <span class="title">Blogs</span>
                        </a></li>
                        <li><a href="#">
                            <span class="icon"><i class="fas fa-leaf"></i></span>
                            <span class="title">Nature</span>
                        </a></li>
                    </ul>
                </div>

                <div class="main_container">
                    <div class="item">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut sapiente adipisci nemo atque eligendi reprehenderit minima blanditiis eum quae aspernatur!
                    </div>
                    <div class="item">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut sapiente adipisci nemo atque eligendi reprehenderit minima blanditiis eum quae aspernatur!
                    </div>
                    <div class="item">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut sapiente adipisci nemo atque eligendi reprehenderit minima blanditiis eum quae aspernatur!
                    </div>
                    <div class="item">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut sapiente adipisci nemo atque eligendi reprehenderit minima blanditiis eum quae aspernatur!
                    </div>
                </div>
            </div>
        )
    }
}