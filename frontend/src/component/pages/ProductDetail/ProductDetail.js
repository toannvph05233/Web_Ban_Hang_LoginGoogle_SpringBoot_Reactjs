import {useParams} from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Breadcrumb from "../../component/Breadcrumb/Breadcrumb";
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
                                           href="https://khatra.com.vn/wp-content/uploads/2019/09/FN6029.jpg"><img
                                            src="https://khatra.com.vn/wp-content/uploads/2019/09/FN6029.jpg"
                                            alt="product-view"/></a>
                                    </div>
                                    <div id="thumb2" class="tab-pane fade">
                                        <a data-fancybox="images"
                                           href="https://khatra.com.vn/wp-content/uploads/2019/09/FN-seri-all.jpg"><img
                                            src="https://khatra.com.vn/wp-content/uploads/2019/09/FN-seri-all.jpg"
                                            alt="product-view"/></a>
                                    </div>
                                </div>
                                <div class="product-thumbnail mt-15">
                                    <div class="thumb-menu owl-carousel nav tabs-area" role="tablist">
                                        <a className="active" data-toggle="tab" href="#thumb1"><img
                                            src="https://khatra.com.vn/wp-content/uploads/2019/09/FN6029.jpg"
                                            alt="product-thumbnail"/></a>
                                        <a data-toggle="tab" href="#thumb2"><img
                                            src="https://khatra.com.vn/wp-content/uploads/2019/09/FN-seri-all.jpg"
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
                                        <p className="d-flex align-items-center"><span className="price">{product.price}</span>
                                        </p>
                                    </div>
                                    <p class="mb-20 pro-desc-details"> {product.description}</p>
                                    <div className="product-size mb-20 clearfix">
                                        <label>Kích thước</label>
                                        <select className="">
                                            <option>150x800</option>
                                            <option>150x1000</option>
                                            <option>200x1200</option>
                                        </select>
                                    </div>
                                    <div className="color clearfix mb-20">
                                        <label>Ứng dụng</label>
                                        <p>Lát nền</p>
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Hiển thị các thông tin khác của sản phẩm */}
        </div>
    );
};

export default ProductDetail;
