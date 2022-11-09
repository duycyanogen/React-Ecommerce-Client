//import style from './productDetail.module.scss'
import './productDetail.scss'
import { React, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { connect, useSelector } from 'react-redux';
import * as actions from '../../store/actions/index'
import { ToastContainer, toast } from 'react-toastify';
import { handleAddNewCart } from '../../services/cartService'
function ProductDetail(props) {
    const listProducts = useSelector(state => state.product.listProducts)
    const { id } = useParams();
    const product = listProducts?.find((product => product.id == id))
    const userInfo = useSelector(state => state.user.userInfo);
    const navigate = useNavigate();
    useEffect(() => {
        async function fetchProduct() {
            await props.getAllProduct();
        }
        fetchProduct();
    }, []);

    const showToastError = (content) => {
        toast.error(content, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };

    const showToastSuccess = (content) => {
        toast.success(content, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };

    const showToastWarning = (content) => {
        toast.warning(content, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };

    const handleAddToCart = async () => {
        if (!userInfo) {
            navigate("/login");
            return;
        }
        let input = {
            userID: userInfo.id,
            idGuitar: id,
            quantity: 1,
            amount: 1
        }

        try {
            await handleAddNewCart(input).then(res => {
                showToastSuccess(res.data.cartData.message)
            })
        }
        catch (error) {
            if (error.response) {
                if (error.response.data) {
                    showToastError(error.response.data.message);
                }
            }
        }

    }

    return (
        product ?
            (<div className="wrapper-detail">
                <section className="overview">
                    <div className="overview__title">
                        {product.name}
                    </div>
                    <div className="overview__detail">
                        <div className="overview__info">
                            <span className="overview__star-icon">
                                <i className="fas fa-star"></i>
                            </span>
                            <span className="overview__star-rating">
                                5
                            </span>
                            <span className="overview__rating-amount">
                                <span className="text">({product.views} lượt xem)</span>
                            </span>
                            <span className="overview__location">
                                Quận 1, Hồ Chí Minh, Việt Nam
                            </span>
                        </div>
                        <div className="overview__operation">
                            <span className="overview__share">
                                <span className="share-icon">
                                    <i className="far fa-share-square"></i>
                                </span>
                                <span className="text">Chia sẻ</span>
                            </span>
                            <span className="overview__save">
                                <span className="save-icon">
                                    <i className="far fa-heart"></i>
                                </span>
                                <span className="text">Lưu</span>
                            </span>
                        </div>
                    </div>
                </section>
                <section className="image-zone grid-row">
                    <div className="image-zone__left grid-column-2">
                        <img src={product.imageURL}
                            alt="" />
                    </div>
                    <div className="image-zone__right grid-column-2 grid-column">
                        <div className="right-top grid-row-2 grid-row">
                            <div className="top-left grid-column-2  ">
                                <img src={product.imageURL}
                                    alt="" />
                            </div>
                            <div className="top-right grid-column-2">
                                <img src={product.imageURL}
                                    alt="" />
                            </div>
                        </div>
                        <div className="right-bottom grid-row-2 grid-row">
                            <div className="bottom-left grid-column-2">
                                <img src={product.imageURL}
                                    alt="" />
                            </div>
                            <div className="bottom-right grid-column-2">
                                <img src={product.imageURL}
                                    alt="" />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="room-info">
                    <div className="room-info__benefit">
                        <div className="description">
                            <h2>Thông tin đàn</h2>
                            <p>• Tên:  {product.name}</p>
                            <p>• Giá bán : {product.price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</p>
                            <p>• Loại đàn: Cổ điển (Classic)</p>
                            <p>• Dáng: Dáng D</p>
                            <p>• {product.contents}</p>
                        </div>
                    </div>
                    <div className="room-info__check-form">
                        <div className="form">
                            <div className="form__header">
                                <span className="form__price">{product.price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</span>
                                <span className="form__rating">
                                    <i className="fas fa-star"></i>
                                    <span>5({product.views} lượt xem)</span>
                                </span>
                            </div>
                            <div className="form__button">
                                <button className='primary-button' onClick={() => handleAddToCart()}>Thêm vào giỏ hàng</button>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="comment-rating">
                    <div className="comment-rating__heading">
                        <span className="comment-rating__star-icon"><i className="fas fa-star"></i></span>
                        <span className="comment-rating__average-rating">4,51</span>
                        <span className="comment-rating__rating-amount">· 216 đánh giá</span>
                    </div>
                    <div className="comments grid-row">
                        <div className="comments__item grid-column-2">
                            <div className="comments__item-header">
                                <div className="comments__item-avatar">
                                    <img src="https://images.unsplash.com/photo-1633092468175-2f68b173e4e4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80"
                                        alt="" />
                                </div>
                                <div className="comment__item-author">
                                    <div className="comments__item-name">Văn Minh</div>
                                    <div className="comments__item-date">tháng 6 năm 2021</div>
                                </div>
                            </div>
                            <div className="comments__item-content">
                                <span>Vị trí phòng thuận lợi, tuy nhiên phòng chỉ được 50%-60% trong ảnh. Cần cải thiện thêm về
                                    độ sạch sẽ, máy lạnh yếu.</span>
                            </div>
                        </div>
                        <div className="comments__item grid-column-2">
                            <div className="comments__item-header">
                                <div className="comments__item-avatar">
                                    <img src="https://images.unsplash.com/photo-1471897488648-5eae4ac6686b?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
                                        alt="" />
                                </div>
                                <div className="comment__item-author">
                                    <div className="comments__item-name">Ngọc Đại </div>
                                    <div className="comments__item-date">tháng 6 năm 2021</div>
                                </div>
                            </div>
                            <div className="comments__item-content">
                                <span>Mọi thứ khá là ok. Chỉ tiếc là điều hoà chạy quá yếu như hết gas. Chủ nhà nên thay gas
                                    hoặc bảo dưỡng lại điều hoà. Mình thì ko chịu đc nóng nên thường về phòng bật điều hoà mức
                                    nhỏ nhất nhưng mãi chả thấy mát</span>
                            </div>
                        </div>
                        <div className="comments__item grid-column-2">
                            <div className="comments__item-header">
                                <div className="comments__item-avatar">
                                    <img src="https://images.unsplash.com/photo-1633085272509-43df38a78aed?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
                                        alt="" />
                                </div>
                                <div className="comment__item-author">
                                    <div className="comments__item-name">Minh Đoan</div>
                                    <div className="comments__item-date">tháng 5 năm 2021</div>
                                </div>
                            </div>
                            <div className="comments__item-content">
                                <span>Phòng sạch sẽ, dụng cụ làm bếp có nhưng chưa đủ, thiếu thớt và dao hơi cùn. Máy lạnh có
                                    cũng như không, mình để 17 độ nhưng vẫn nóng.</span>
                            </div>
                        </div>
                        <div className="comments__item grid-column-2">
                            <div className="comments__item-header">
                                <div className="comments__item-avatar">
                                    <img src="https://images.unsplash.com/photo-1593642531955-b62e17bdaa9c?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80"
                                        alt="" />
                                </div>
                                <div className="comment__item-author">
                                    <div className="comments__item-name">Hưng</div>
                                    <div className="comments__item-date">tháng 6 năm 2021</div>
                                </div>
                            </div>
                            <div className="comments__item-content">
                                <span>Chỗ ở tốt để chill cùng bạn bè người yêu</span>
                            </div>
                        </div>
                        <div className="comments__item grid-column-2">
                            <div className="comments__item-header">
                                <div className="comments__item-avatar">
                                    <img src="https://images.unsplash.com/photo-1567000833363-b25413f86c35?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80"
                                        alt="" />
                                </div>
                                <div className="comment__item-author">
                                    <div className="comments__item-name">Mai</div>
                                    <div className="comments__item-date">tháng 5 năm 2021</div>
                                </div>
                            </div>
                            <div className="comments__item-content">
                                <span>Vị trí thuận tiện. Anh chủ rất dth và nhiệt tình. Mọi thứ đều khá tốt như mong đợi của
                                    mình. ❤️</span>
                            </div>
                        </div>
                        <div className="comments__item grid-column-2">
                            <div className="comments__item-header">
                                <div className="comments__item-avatar">
                                    <img src="https://images.unsplash.com/photo-1632950154909-b52702d4b994?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80"
                                        alt="" />
                                </div>
                                <div className="comment__item-author">
                                    <div className="comments__item-name">Khách</div>
                                    <div className="comments__item-date">tháng 5 năm 2021</div>
                                </div>
                            </div>
                            <div className="comments__item-content">
                                <span>Chỗ ở thuận lợi cho việc đi lại, phòng sạch sẽ, mát, sẽ quay lại nếu có dịp</span>
                            </div>
                        </div>
                        <div className="comments__item grid-column-2">
                            <div className="comments__item-header">
                                <div className="comments__item-avatar">
                                    <img src="https://images.unsplash.com/photo-1632952745637-a104d96d8405?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=735&q=80"
                                        alt="" />
                                </div>
                                <div className="comment__item-author">
                                    <div className="comments__item-name">Trấn Thành</div>
                                    <div className="comments__item-date">tháng 5 năm 2021</div>
                                </div>
                            </div>
                            <div className="comments__item-content">
                                <span>Hạ tầng dịch vụ cần cải thiện</span>
                            </div>
                        </div>
                        <div className="comments__item grid-column-2">
                            <div className="comments__item-header">
                                <div className="comments__item-avatar">
                                    <img src="https://images.unsplash.com/photo-1632945273090-daa594d65885?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
                                        alt="" />
                                </div>
                                <div className="comment__item-author">
                                    <div className="comments__item-name">Alex</div>
                                    <div className="comments__item-date">tháng 6 năm 2021</div>
                                </div>
                            </div>
                            <div className="comments__item-content">
                                <span>Good place</span>
                            </div>
                        </div>
                        <button className="show-more-comments">
                            Hiển thị tất cả 216 đánh giá
                        </button>
                    </div>
                </section>
                <section className="about-owner">
                    <div className="owner">
                        <div className="owner__avatar">
                            <img src="https://images.unsplash.com/photo-1632968583371-bc69555e92ca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                                alt="" />
                        </div>
                        <div className="owner__info">
                            <div className="owner__name">Guitar shop Duy Nguyễn</div>
                            <div className="owner__date">Thành lập từ tháng 9 năm 2010</div>
                        </div>
                    </div>
                    <div className="authen">
                        <span className="star-icon">
                            <i className="fas fa-star"></i>
                        </span>
                        <span className="rating-amount">
                            3.894 đánh giá
                        </span>
                        <span className="validate-icon">
                            <i className="fas fa-shield-virus"></i>
                        </span>
                        <span className="validate-text">
                            Đã được xác minh danh tính
                        </span>
                        <div className="description">
                            Các bạn biết không? 99% nguyên nhân khiến những người chơi bỏ đàn Guitar lại chính là từ cây đàn của họ.

                            Nhất là các bạn nữ.Đau tay, thậm chí hỏng tay nhưng các bạn đâu biết có thể do chính cây đàn của các bạn ko đạt yêu cầu.Khổ 1 nỗi, hầu như lúc chọn mua 1 sản phẩm, nhất là phải mua Online; đúng ra khi các bạn nói các bạn chưa biết gì về đàn sẽ nhận được sự tư vấn giúp các bạn  thêm kiến thức và mua được cây đàn tốt, phù hợp để tiếp tục đam mê thì chính các bạn lại bị lừa đảo. Cũng như tôi (Tiến Nguyễn) đã từng là nạn nhân ngày tôi mới tự tập đàn vì bị lợi dụng sự chưa hiểu biết nhiều của bản thân. Hàng Fake thì nói hàng thương hiệu Ngoại Chính Hãng. Gỗ Ép kém chất lượng nói gỗ thịt, gỗ này thì nói gỗ kia,... đàn lỗi, đàn kém, đàn hỏng sẽ được bán ra khi gặp những người như vậy. Tôi thấy tội nghiệp thay cho mình lúc ấy và bao nhiêu người đồng cảnh: tiền mất thì còn có thể làm ra, nhưng cái niềm tin và hi vọng thắp sáng đam mê bị dập vùi mất rồi.

                            Tiến Nguyễn Music ra đời với bao tâm nguyện, tâm huyết của chính tôi sau gần 10 năm gắn bó với cây đàn. Không đơn thuần là 1 người kinh doanh thông thường, tôi may mắn có kiến thức, có Đam Mê với cây đàn. Cũng vì vậy nên tôi muốn Tiến Nguyễn Music không chỉ là 1 cửa hàng nhạc Cụ. Mà là 1 điểm đến Đặc Biệt:

                            "Một nơi gặp gỡ, giao lưu học hỏi tuyệt vời của những trái tim yêu âm nhạc, cây đàn."

                            Ở đây không có sự phân biệt: Màu da, sắc áo, ngôn ngữ...đặc biệt là trình độ. Ở đây không có sự giấu nghề, nên các bạn hãy mạnh dạn trao đổi, giao lưu.Ở đây có Đam Mê, có những chân thành của cảm xúc & tình cảm.Là nơi các bạn có thể chia sẻ, cũng có thể lắng nghe. Các bạn cho đi, cũng sẽ có thể nhận lại, chúng ta là những người bạn thực sự !

                            Ở Tiến Nguyễn Music các bạn hoàn toàn Yên Tâm khi chọn mua bất kỳ món đồ nào. Giá trị của 1 sản phẩm khi bạn mua tại Tiến Nguyễn Music nằm ở cả trước, trong và sau khi bán chứ không phải lúc các bạn đưa tiền mua là xong. Chúng tôi luôn tôn trọng, lắng nghe và tận tâm dù là ở bất cứ thời điểm nào. Tận tình tư vấn khi các bạn có nhu cầu.Sau khi mua hàng, có bất cứ vấn đề gì dù là nhỏ nhất chúng tôi cũng hết mực hỗ trợ. Ở đây, chúng tôi có lắng nghe, chứ ko có đổ thừa. Dù bạn bỏ ra số tiền ít hay nhiều nhưng hãy yên tâm là sản phẩm luôn đúng với giá trị nó mang lại, và phải đạt tiêu chuẩn tốt. Dù các bạn không có điều kiện trực tiếp đến Shop thì các bạn vẫn có thể dễ dàng đặt mua Online được 1 sản phẩm đúng nhu cầu, chất lượng. Mọi công đoạn từ khi test đàn đến đóng gói đều thực hiện cực kì cẩn thận, tỉ mỉ dù bạn thậm chí không dặn dò. Vì đơn giản chúng tôi hiểu được rằng các bạn mua đàn ở xa đã phải thiệt thòi hơn khi không được trực tiếp đến chơi giao lưu, ko được trực tiếp chọn lựa, phải chờ đợi, lại lo lắng về việc vận chuyển,... nên chúng tôi cực kì trân trọng, cảm thông và luôn tự nhủ sẽ phải cẩn thận, triệt để!



                            Sản Phẩm của chúng tôi mang 2 sứ mệnh :

                            1. Cung cấp những sản phẩm thương hiệu Ngoại chính hãng.Đó là những thương hiệu tốt, phù hợp với điều kiện trong nước. Bên cạnh đó, hi vọng sẽ đầy lùi được việc lừa đảo khi mà hàng Fake lại cam đoan Chính Hãng. Kể cả các bạn chưa mua mặt hàng này cũng mong các bạn có thêm kiến thức, hiểu biết về chúng.

                            2. Những sản phẩm Thương Hiệu Việt Nam, nhằm tôn vinh nghệ nhân Việt để họ thêm động lực sang tạo & phát triển cho thương hiệu nước nhà. Tôi sẽ trực tiếp quản lý chất lượng từng cây đàn Việt & cùng phát triển ý tưởng với các nghệ nhân, tôi mong 1 ngày không xa Guitar Thương Hiệu Việt vươn tâm ra Thế Giới.

                            Tiến Nguyễn Music luôn đặt chất lượng sản phẩm & sự hài lòng của khách hàng lên hàng đầu. Chính vì điều này mà dù mới được thành lập chưa lâu nhưng Tiến Nguyễn Music đã và đang là 1 địa chỉ uy tín, tin cậy và là 1 sân chơi vô cùng thú vị cho những anh em yêu âm nhạc trong và ngoài nước. Và Tiến Nguyễn Music cũng vừa nhận bằng khen, Cúp vàng cho “Thương Hiệu, Sản Phẩm, Dịch vụ thương hiệu hàng đầu Việt Nam 2017” do Hiệp Hội Chống Hàng Giả và Bảo vệ Thương Hiệu Việt Nam Bình Chọn!
                        </div>
                        <div className="response">Tỉ lệ phản hồi: 96%</div>
                    </div>
                    <button className="contact-button">Liên hệ với chúng tôi</button>
                </section>
                <ToastContainer />
            </div>
            )
            : null
    )

}

function mapStateToProps(state) {

    return {
        //dataRedux1: state.users,
        listProducts: state.product.listProducts
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getAllProduct: () => dispatch(actions.getAllProduct()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);