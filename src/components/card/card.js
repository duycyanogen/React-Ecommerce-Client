
import './card.scss'
const { Component } = require("react");

export default class Card extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <a href={'/products/' + this.props.id} className="col-md-2" onClick={this.props.onclick}>
                <div className="card">
                    <div className="card_img">
                        <img src={this.props.imageURL} alt="" />
                    </div>
                    <div className="card_content">
                        <div className="card_content-head">
                            <p>{this.props.name}</p>

                        </div>
                        <span className='discount'>Giảm giá {this.props.discount}%</span>
                        <span className='views'>{this.props.views} luợt xem</span>
                        <span>
                            <b>{this.props.price}đ</b>
                        </span>
                    </div>
                </div>
            </a>
        )
    }
}