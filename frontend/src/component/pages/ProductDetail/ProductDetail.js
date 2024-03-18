import {useParams} from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Breadcrumb from "../../Breadcrumb/Breadcrumb";
const ProductDetail = ({ productId }) => {
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/product/${productId}`);
                setProduct(response.data);
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };

        fetchProduct();
    }, [productId]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Breadcrumb/>
            <div class="main-product-thumbnail ptb-100 ptb-sm-60">
                <div class="container">
                    <div class="thumb-bg">
                        <div class="row">
                            <div class="col-lg-5 mb-all-40">
                                <div className="tab-content">
                                    <div id="thumb1" className="tab-pane fade show active">
                                        <a data-fancybox="images"
                                           href="https://khatra.com.vn/wp-content/uploads/2021/07/TD003.jpg"><img
                                            src="https://khatra.com.vn/wp-content/uploads/2021/07/TD003.jpg"
                                            alt="product-view"/></a>
                                    </div>
                                    <div id="thumb2" className="tab-pane fade">
                                        <a data-fancybox="images"
                                           href="https://khatra.com.vn/wp-content/uploads/2021/07/TD003-hinh-chup.jpg"><img
                                            src="https://khatra.com.vn/wp-content/uploads/2021/07/TD003-hinh-chup.jpg"
                                            alt="product-view"/></a>
                                    </div>
                                </div>
                                <div class="product-thumbnail mt-15">
                                    <div class="thumb-menu owl-carousel nav tabs-area" role="tablist">
                                        <a className="active" data-toggle="tab" href="#thumb1"><img
                                            src="https://khatra.com.vn/wp-content/uploads/2021/07/TD003.jpg"
                                            alt="product-thumbnail"/></a>
                                        <a data-toggle="tab" href="#thumb2"><img
                                            src="https://khatra.com.vn/wp-content/uploads/2021/07/TD003-hinh-chup.jpg"
                                            alt="product-thumbnail"/></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-7">
                                <div className="thubnail-desc fix">
                                    <h3 className="product-header">{product.title}</h3>
                                    <div className="rating-summary fix mtb-10">
                                        <div className="rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star-o"></i>
                                            <i className="fa fa-star-o"></i>
                                            <i className="fa fa-star-o"></i>
                                        </div>
                                    </div>
                                    <div className="pro-price mtb-30">
                                        <p className="d-flex align-items-center"><span
                                            className="prev-price">{product.price}</span><span
                                            className="price">{product.price * 0.88}</span><span
                                            className="saving-price">giảm 12%</span></p>
                                    </div>
                                    <p className="mb-20 pro-desc-details"> {product.description}</p>
                                    <div className="color clearfix mb-20">
                                        <label>Loại hàng</label>
                                        <p>{product.category}</p>

                                    </div>
                                    <div className="box-quantity d-flex hot-product2">
                                        <form action="#">
                                            <input className="quantity mr-15" type="number" min="1" value="1"/>
                                        </form>
                                        <div className="pro-actions">
                                            <div className="actions-primary">
                                                <a href="cart.html" title="" data-original-title="Add to Cart"> + Thêm
                                                    vào giỏ</a>
                                            </div>
                                            <div className="actions-secondary">
                                                <a href="compare.html" title="" data-original-title="Compare"><i
                                                    className="lnr lnr-sync"></i> <span>Thêm so sánh</span></a>
                                                <a href="wishlist.html" title="" data-original-title="WishList"><i
                                                    className="lnr lnr-heart"></i>
                                                    <span>Thêm vào danh sách yêu thích</span></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pro-ref mt-20">
                                        <p><span className="in-stock"><i className="ion-checkmark-round"></i> Trong kho</span>
                                        </p>
                                    </div>
                                    <div className="socila-sharing mt-25">
                                        <ul className="d-flex">
                                            <li>Chia sẻ</li>
                                            <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                                            </li>
                                            <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                                            </li>
                                            <li><a href="#"><i className="fa fa-google-plus-official"
                                                               aria-hidden="true"></i></a></li>
                                            <li><a href="#"><i className="fa fa-pinterest-p" aria-hidden="true"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="thumnail-desc pb-100 pb-sm-60">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12">
                            <ul className="main-thumb-desc nav tabs-area" role="tablist">
                                <li><a className="active" data-toggle="tab" href="#dtail">Thông tin chi tiết sản
                                    phẩm</a></li>
                                <li><a data-toggle="tab" href="#review">Đánh giá</a></li>
                            </ul>
                            <div className="tab-content thumb-content border-default">
                                <div id="dtail" className="tab-pane fade show active">
                                    <p>{product.description}</p>
                                </div>
                                <div id="review" class="tab-pane fade">
                                    <div className="review border-default universal-padding">
                                        <div className="group-title">
                                            <h2>Đánh giá của khách hàng</h2>
                                        </div>
                                        <h4 className="review-mini-title">Truemart</h4>
                                        <ul class="review-list">
                                            <li>
                                                <span>Hạng</span>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star-o"></i>
                                                <i className="fa fa-star-o"></i>
                                                <label>Truemart</label>
                                            </li>
                                            <li>
                                                <span>Giá</span>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star-o"></i>
                                                <i className="fa fa-star-o"></i>
                                                <i className="fa fa-star-o"></i>
                                                <label>Đánh giá bởi Truemart</label>
                                            </li>
                                            <li>
                                                <span>Giá trị</span>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star-o"></i>
                                                <label>Đăng vào 7/20/18</label>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="review border-default universal-padding mt-30">
                                        <h2 className="review-title mb-30">Bạn đang đánh giá: <br/><span>sản phẩm tốt, nhưng giá hơi đắt.</span>
                                        </h2>
                                        <p className="review-mini-title">your rating</p>
                                        <ul class="review-list">
                                            <li>
                                                <span>Hạng</span>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star-o"></i>
                                                <i className="fa fa-star-o"></i>
                                            </li>
                                            <li>
                                                <span>Giá</span>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star-o"></i>
                                                <i className="fa fa-star-o"></i>
                                                <i className="fa fa-star-o"></i>
                                            </li>
                                            <li>
                                                <span>Giá trị</span>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star-o"></i>
                                            </li>

                                        </ul>
                                        <div className="riview-field mt-40">
                                            <form autoComplete="off" action="#">
                                                <div className="form-group">
                                                    <label className="req" htmlFor="sure-name">Tên tài khoản</label>
                                                    <input type="text" className="form-control" id="sure-name"
                                                           required="required"/>
                                                </div>
                                                <div className="form-group">
                                                    <label className="req" htmlFor="subject">Bảng tóm tắt</label>
                                                    <input type="text" className="form-control" id="subject"
                                                           required="required"/>
                                                </div>
                                                <div className="form-group">
                                                    <label className="req" htmlFor="comments">Đánh giá</label>
                                                    <textarea className="form-control" rows="5" id="comments"
                                                              required="required"></textarea>
                                                </div>
                                                <button type="submit" className="customer-btn">Gửi</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="hot-deal-products off-white-bg pt-100 pb-90 pt-sm-60 pb-sm-50">
                <div className="container">
                    <div className="post-title pb-30">
                        <h2>Sản Phẩm Liên Quan</h2>
                    </div>
                    <div class="hot-deal-active owl-carousel">
                        <div className="single-product">
                            <div className="pro-img">
                                <a href="product.html">
                                    <img className="primary-img"
                                         src="https://khatra.com.vn/wp-content/uploads/2022/05/gach-JY885P025.jpg"
                                         alt="single-product"/>
                                    <img className="secondary-img"
                                         src="https://khatra.com.vn/wp-content/uploads/2022/05/JY885P025-web.jpg"
                                         alt="single-product"/>
                                </a>
                                <a href="#" className="quick_view" data-toggle="modal" data-target="#myModal"
                                   title="Quick View"><i className="lnr lnr-magnifier"></i></a>
                            </div>
                            <div className="pro-content">
                                <div className="pro-info">
                                    <h4><a href="product.html">Gạch lát nền 12620</a></h4>
                                    <p><span className="price">348.000đ</span>
                                        <del className="prev-price">370.500đ</del>
                                    </p>
                                    <div className="label-product l_sale">6<span className="symbol-percent">%</span>
                                    </div>
                                </div>
                                <div className="pro-actions">
                                    <div className="actions-primary">
                                        <a href="cart.html" title="Add to Cart"> + Thêm vào giỏ</a>
                                    </div>
                                    <div className="actions-secondary">
                                        <a href="compare.html" title="Compare"><i className="lnr lnr-sync"></i> <span>Thêm so sánh</span></a>
                                        <a href="wishlist.html" title="WishList"><i className="lnr lnr-heart"></i>
                                            <span>Thêm vào danh sách yêu thích</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="single-product">
                            <div className="pro-img">
                                <a href="product.html">
                                    <img className="primary-img"
                                         src="https://khatra.com.vn/wp-content/uploads/2022/07/TCH63528-view.jpg"
                                         alt="single-product"/>
                                    <img className="secondary-img"
                                         src="https://khatra.com.vn/wp-content/uploads/2022/06/TCH63528.jpg"
                                         alt="single-product"/>
                                </a>
                                <a href="#" className="quick_view" data-toggle="modal" data-target="#myModal"
                                   title="Quick View"><i className="lnr lnr-magnifier"></i></a>
                            </div>
                            <div className="pro-content">
                                <div className="pro-info">
                                    <h4><a href="product.html">Gạch ốp tường TCH-63528</a></h4>
                                    <p><span className="price">360.000đ</span>
                                        <del className="prev-price">400.000đ</del>
                                    </p>
                                    <div className="label-product l_sale">10<span className="symbol-percent">%</span>
                                    </div>
                                </div>
                                <div className="pro-actions">
                                    <div className="actions-primary">
                                        <a href="cart.html" title="Add to Cart"> + Thêm vào giỏ</a>
                                    </div>
                                    <div className="actions-secondary">
                                        <a href="compare.html" title="Compare"><i className="lnr lnr-sync"></i> <span>Thêm so sánh</span></a>
                                        <a href="wishlist.html" title="WishList"><i className="lnr lnr-heart"></i>
                                            <span>Thêm vào danh sách yêu thích</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="single-product">
                            <div className="pro-img">
                                <a href="product.html">
                                    <img className="primary-img"
                                         src="https://khatra.com.vn/wp-content/uploads/2020/09/KL8023.jpg"
                                         alt="single-product"/>
                                    <img className="secondary-img"
                                         src="https://khatra.com.vn/wp-content/uploads/2022/05/K87009-web.jpg"
                                         alt="single-product"/>
                                </a>
                                <a href="#" className="quick_view" data-toggle="modal" data-target="#myModal"
                                   title="Quick View"><i className="lnr lnr-magnifier"></i></a>
                            </div>
                            <div className="pro-content">
                                <div className="pro-info">
                                    <h4><a href="product.html">Gạch lát nền K87009</a></h4>
                                    <p><span className="price">420.000đ</span></p>
                                </div>
                                <div className="pro-actions">
                                    <div className="actions-primary">
                                        <a href="cart.html" title="Add to Cart"> + Thêm vào giỏ</a>
                                    </div>
                                    <div className="actions-secondary">
                                        <a href="compare.html" title="Compare"><i className="lnr lnr-sync"></i> <span>Thêm so sánh</span></a>
                                        <a href="wishlist.html" title="WishList"><i className="lnr lnr-heart"></i>
                                            <span>Thêm vào danh sách yêu thích</span></a>
                                    </div>
                                </div>
                            </div>
                            <span className="sticker-new">new</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="support-area bdr-top">
                <div class="container">
                    <div class="d-flex flex-wrap text-center">
                        <div class="single-support">
                            <div class="support-icon">
                                <i class="lnr lnr-gift"></i>
                            </div>
                            <div class="support-desc">
                                <h6>Quà tặng</h6>
                                <span>Nhiều phần quà tặng kèm hấp dẫn khi mua sắm.</span>
                            </div>
                        </div>
                        <div class="single-support">
                            <div class="support-icon">
                                <i class="lnr lnr-rocket"></i>
                            </div>
                            <div class="support-desc">
                                <h6>Giao hàng</h6>
                                <span>Miễn phí giao hàng trong phạm vi bán kính 10km.</span>
                            </div>
                        </div>
                        <div class="single-support">
                            <div class="support-icon">
                                <i class="lnr lnr-lock"></i>
                            </div>
                            <div class="support-desc">
                                <h6>Thanh toán an toàn</h6>
                                <span>Áp dụng nhiều phương thức thanh toán an toàn.</span>
                            </div>
                        </div>
                        <div class="single-support">
                            <div class="support-icon">
                                <i class="lnr lnr-enter-down"></i>
                            </div>
                            <div class="support-desc">
                                <h6>Tự tin mua sắm</h6>
                                <span>Thoải mái mua sắm với sản phẩm đa dạng.</span>
                            </div>
                        </div>
                        <div class="single-support">
                            <div class="support-icon">
                                <i class="lnr lnr-users"></i>
                            </div>
                            <div class="support-desc">
                                <h6>Hỗ trợ khách hàng 24/7</h6>
                                <span>Đội ngũ nhân viên tư vấn và hỗ trợ 24/7.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProductDetail;
