
import './card.scss'
const { Component } = require("react");
// import { formatPrice } from '../../constant/temp';

export default class Card extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <a href={'/products/' + this.props.id} className="col-md-3 card-item" onClick={this.props.onclick}>
                <div className="product-detail">
                    <div>
                      <div className="card_img">
                        <img src={this.props.imageURL} alt="" />
                      </div>
                    </div>
                    <div className='flower-info'>
                      <p className='product-name'>{this.props.name}</p>
                      <div className="card_content">
                        <div className='cart-content__detail'>
                          <p>Giảm giá {this.props.discount}%</p>
                          <p>{this.props.views} luợt xem</p>
                        </div>
                       {/* <span className='cart-content_price'>{this.props.price}đ</span> */}
                       <span className='cart-content_price'>{Intl.NumberFormat('it-IT', { style : 'currency', currency:'VND'}).format(this.props.price)}</span>

                    </div>
                    </div>
                    
                </div>
            </a>
        )
    }
}