import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import Footer from "../../component/Footer/Footer";
import Header from "../../component/Header/Header";
import Breadcrumb from "../../component/Breadcrumb/Breadcrumb";
import ProductItem from "../../component/ProductItem/ProductItem";

const ListProduct=() => {

    return (
        <div>
            <div className="wrapper">

                <Header/>
                <Breadcrumb title={'Danh sách sản phẩm'}/>
                <div className="popup_banner">
                    <span className="popup_off_banner">×</span>
                    <div className="banner_popup_area">
                        <img src="img/banner/logo.png" alt=""/>
                    </div>
                </div>
                <div className="main-shop-page pt-100 pb-100 ptb-sm-60">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 order-2 order-lg-1"    >
                                <div className="sidebar">
                                    {/*The Loai*/}
                                    <div className="electronics mb-40">
                                        <h3 className="sidebar-title">Electronics</h3>
                                        <div id="shop-cate-toggle" className="category-menu sidebar-menu sidbar-style">
                                            <ul>
                                                <li className="has-sub"><a href="#">Camera</a>
                                                    <ul className="category-sub">
                                                        <li><a href="shop.html">Card</a></li>
                                                        <li><a href="shop.html">gps accessories</a></li>
                                                        <li><a href="shop.html">Microphones</a></li>
                                                        <li><a href="shop.html">Wireless Transmitters</a></li>
                                                    </ul>
                                                </li>
                                                <li className="has-sub"><a href="#">P</a>
                                                    <ul className="category-sub">
                                                        <li><a href="shop.html">cube lifestyle hd</a></li>
                                                        <li><a href="shop.html">gopro hero4</a></li>
                                                        <li><a href="shop.html">bhandycam cx405ags</a></li>
                                                        <li><a href="shop.html">vixia hf r600</a></li>
                                                    </ul>
                                                </li>
                                                <li className="has-sub"><a href="#">Digital Cameras</a>
                                                    <ul className="category-sub">
                                                        <li><a href="shop.html">Gold eye</a></li>
                                                        <li><a href="shop.html">Questek</a></li>
                                                        <li><a href="shop.html">Snm</a></li>
                                                        <li><a href="shop.html">vantech</a></li>
                                                    </ul>
                                                </li>
                                                <li className="has-sub"><a href="#">Virtual Reality</a>
                                                    <ul className="category-sub">
                                                        <li><a href="shop.html">Samsung</a></li>
                                                        <li><a href="shop.html">Toshiba</a></li>
                                                        <li><a href="shop.html">Transcend</a></li>
                                                        <li><a href="shop.html">Sandisk</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="search-filter mb-40">
                                        <h3 className="sidebar-title">filter by price</h3>
                                        <form action="#" className="sidbar-style">
                                            <div id="slider-range"></div>
                                            <input type="text" id="amount" className="amount-range" readOnly=""/>
                                        </form>
                                    </div>
                                    <div className="sidebar-categorie mb-40">
                                        <h3 className="sidebar-title">categories</h3>
                                        <ul className="sidbar-style">
                                            <li className="form-check">
                                                <input className="form-check-input" value="#" id="camera"
                                                       type="checkbox"/>
                                                <label className="form-check-label" htmlFor="camera">Cameras
                                                    (8)</label>
                                            </li>
                                            <li className="form-check">
                                                <input className="form-check-input" value="#" id="GamePad"
                                                       type="checkbox"/>
                                                <label className="form-check-label" htmlFor="GamePad">GamePad
                                                    (8)</label>
                                            </li>
                                            <li className="form-check">
                                                <input className="form-check-input" value="#" id="Digital"
                                                       type="checkbox"/>
                                                <label className="form-check-label" htmlFor="Digital">Digital
                                                    Cameras (8)</label>
                                            </li>
                                            <li className="form-check">
                                                <input className="form-check-input" value="#" id="Virtual"
                                                       type="checkbox"/>
                                                <label className="form-check-label" htmlFor="Virtual"> Virtual
                                                    Reality (8) </label>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="size mb-40">
                                        <h3 className="sidebar-title">size</h3>
                                        <ul className="size-list sidbar-style">
                                            <li className="form-check">
                                                <input className="form-check-input" value="" id="small" type="checkbox"/>
                                                <label className="form-check-label" htmlFor="small">S (6)</label>
                                            </li>
                                            <li className="form-check">
                                                <input className="form-check-input" value="" id="medium"
                                                       type="checkbox"/>
                                                <label className="form-check-label" htmlFor="medium">M (9)</label>
                                            </li>
                                            <li className="form-check">
                                                <input className="form-check-input" value="" id="large" type="checkbox"/>
                                                <label className="form-check-label" htmlFor="large">L (8)</label>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="color mb-40">
                                        <h3 className="sidebar-title">color</h3>
                                        <ul className="color-option sidbar-style">
                                            <li>
                                                <span className="white"></span>
                                                <a href="#">white (4)</a>
                                            </li>
                                            <li>
                                                <span className="orange"></span>
                                                <a href="#">Orange (2)</a>
                                            </li>
                                            <li>
                                                <span className="blue"></span>
                                                <a href="#">Blue (6)</a>
                                            </li>
                                            <li>
                                                <span className="yellow"></span>
                                                <a href="#">Yellow (8)</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="top-new mb-40">
                                        <h3 className="sidebar-title">Top New</h3>
                                        <div className="side-product-active owl-carousel">
                                            <div className="side-pro-item">
                                                <div className="single-product single-product-sidebar">
                                                    <div className="pro-img">
                                                        <a href="product.html">
                                                            <img className="primary-img" src="img\products\20.jpg"
                                                                 alt="single-product"/>
                                                            <img className="secondary-img" src="img\products\19.jpg"
                                                                 alt="single-product"/>
                                                        </a>
                                                        <div className="label-product l_sale">30<span
                                                            className="symbol-percent">%</span></div>
                                                    </div>
                                                    <div className="pro-content">
                                                        <h4><a href="product.html">Work Lamp Silver Proin</a></h4>
                                                        <p><span className="price">$130.45</span>
                                                            <del className="prev-price">180.50</del>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="single-product single-product-sidebar">
                                                    <div className="pro-img">
                                                        <a href="product.html">
                                                            <img className="primary-img" src="img\products\2.jpg"
                                                                 alt="single-product"/>
                                                            <img className="secondary-img" src="img\products\1.jpg"
                                                                 alt="single-product"/>
                                                        </a>
                                                    </div>
                                                    <div className="pro-content">
                                                        <h4><a href="product.html">Silver Work Lamp Proin</a></h4>
                                                        <p><span className="price">$320.45</span>
                                                            <del className="prev-price">$400.50</del>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="single-product single-product-sidebar">
                                                    <div className="pro-img">
                                                        <a href="product.html">
                                                            <img className="primary-img" src="img\products\3.jpg"
                                                                 alt="single-product"/>
                                                            <img className="secondary-img" src="img\products\4.jpg"
                                                                 alt="single-product"/>
                                                        </a>
                                                    </div>
                                                    <div className="pro-content">
                                                        <h4><a href="product.html">Proin Work Lamp Silver </a></h4>
                                                        <p><span className="price">$150.45</span>
                                                            <del className="prev-price">$200.50</del>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="side-pro-item">
                                                <div className="single-product single-product-sidebar">
                                                    <div className="pro-img">
                                                        <a href="product.html">
                                                            <img className="primary-img" src="img\products\41.jpg"
                                                                 alt="single-product"/>
                                                            <img className="secondary-img" src="img\products\42.jpg"
                                                                 alt="single-product"/>
                                                        </a>
                                                    </div>
                                                    <div className="pro-content">
                                                        <h4><a href="product.html">Silver Work Lamp Proin</a></h4>
                                                        <p><span className="price">$80.45</span>
                                                            <del className="prev-price">$100.50</del>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="single-product single-product-sidebar">
                                                    <div className="pro-img">
                                                        <a href="product.html">
                                                            <img className="primary-img" src="img\products\36.jpg"
                                                                 alt="single-product"/>
                                                            <img className="secondary-img" src="img\products\35.jpg"
                                                                 alt="single-product"/>
                                                        </a>
                                                    </div>
                                                    <div className="pro-content">
                                                        <h4><a href="product.html">Silver Work Lamp Proin</a></h4>
                                                        <p><span className="price">$320.45</span>
                                                            <del className="prev-price">$400.50</del>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="single-product single-product-sidebar">
                                                    <div className="pro-img">
                                                        <a href="product.html">
                                                            <img className="primary-img" src="img\products\33.jpg"
                                                                 alt="single-product"/>
                                                            <img className="secondary-img" src="img\products\34.jpg"
                                                                 alt="single-product"/>
                                                        </a>
                                                    </div>
                                                    <div className="pro-content">
                                                        <h4><a href="product.html">Lamp Proin Work Silver </a></h4>
                                                        <p><span className="price">$120.45</span>
                                                            <del className="prev-price">130.50</del>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="single-product single-product-sidebar">
                                                    <div className="pro-img">
                                                        <a href="product.html">
                                                            <img className="primary-img" src="img\products\31.jpg"
                                                                 alt="single-product"/>
                                                            <img className="secondary-img" src="img\products\32.jpg"
                                                                 alt="single-product"/>
                                                        </a>
                                                    </div>
                                                    <div className="pro-content">
                                                        <h4><a href="product.html">Work Lamp Silver Proin</a></h4>
                                                        <p><span className="price">$140.45</span>
                                                            <del className="prev-price">$150.50</del>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="side-pro-item">
                                                <div className="single-product single-product-sidebar">
                                                    <div className="pro-img">
                                                        <a href="product.html">
                                                            <img className="primary-img" src="img\products\15.jpg"
                                                                 alt="single-product"/>
                                                            <img className="secondary-img" src="img\products\16.jpg"
                                                                 alt="single-product"/>
                                                        </a>
                                                    </div>
                                                    <div className="pro-content">
                                                        <h4><a href="product.html">Lamp Work Silver Proin</a></h4>
                                                        <p><span className="price">$320.45</span>
                                                            <del className="prev-price">$400.50</del>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="single-product single-product-sidebar">
                                                    <div className="pro-img">
                                                        <a href="product.html">
                                                            <img className="primary-img" src="img\products\17.jpg"
                                                                 alt="single-product"/>
                                                            <img className="secondary-img" src="img\products\18.jpg"
                                                                 alt="single-product"/>
                                                        </a>
                                                        <div className="label-product l_sale">30<span
                                                            className="symbol-percent">%</span></div>
                                                    </div>
                                                    <div className="pro-content">
                                                        <h4><a href="product.html">Silver Work Lamp Proin</a></h4>
                                                        <p><span className="price">$320.45</span>
                                                            <del className="prev-price">$400.50</del>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="single-product single-product-sidebar">
                                                    <div className="pro-img">
                                                        <a href="product.html">
                                                            <img className="primary-img" src="img\products\23.jpg"
                                                                 alt="single-product"/>
                                                            <img className="secondary-img" src="img\products\24.jpg"
                                                                 alt="single-product"/>
                                                        </a>
                                                    </div>
                                                    <div className="pro-content">
                                                        <h4><a href="product.html">Proin Work Lamp Silver </a></h4>
                                                        <p><span className="price">$320.45</span>
                                                            <del className="prev-price">$400.50</del>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="single-product single-product-sidebar">
                                                    <div className="pro-img">
                                                        <a href="product.html">
                                                            <img className="primary-img" src="img\products\25.jpg"
                                                                 alt="single-product"/>
                                                            <img className="secondary-img" src="img\products\26.jpg"
                                                                 alt="single-product"/>
                                                        </a>
                                                    </div>
                                                    <div className="pro-content">
                                                        <h4><a href="product.html">Work Lamp Silver Proin</a></h4>
                                                        <p><span className="price">$320.45</span>
                                                            <del className="prev-price">$400.50</del>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-img">
                                        <a href="shop.html"><img src="img\banner\banner-sidebar.jpg"
                                                                 alt="slider-banner"/></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9 order-1 order-lg-2">
                                <div
                                    className="grid-list-top border-default universal-padding d-md-flex justify-content-md-between align-items-center mb-30">
                                    <div className="grid-list-view  mb-sm-15">
                                        <ul className="nav tabs-area d-flex align-items-center">
                                            <li><a className="active" data-toggle="tab" href="#grid-view"><i
                                                className="fa fa-th"></i></a></li>
                                            <li><a data-toggle="tab" href="#list-view"><i className="fa fa-list-ul"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="main-toolbar-sorter clearfix">
                                        <div className="toolbar-sorter d-flex align-items-center">
                                            <label>Sort By:</label>
                                            <select className="sorter wide">
                                                <option value="Position">Sắp xếp</option>
                                                <option value="Price">Giá giảm dần</option>
                                                <option value="Price" selected="">Giá tăng dần</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="main-toolbar-sorter clearfix">
                                        <div className="toolbar-sorter d-flex align-items-center">
                                            <label>Hiển thị:</label>
                                            <select className="sorter wide">
                                                <option value="12">12</option>
                                                <option value="25">25</option>
                                                <option value="50">50</option>
                                                <option value="75">75</option>
                                                <option value="100">100</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="main-categorie mb-all-40">
                                    <div className="tab-content fix">
                                        <div id="grid-view" className="tab-pane fade show active">
                                            <ProductItem/>
                                        </div>
                                        <div id="list-view" className="tab-pane fade">
                                            <div className="single-product">
                                                <div className="row">
                                                    <div className="col-lg-4 col-md-5 col-sm-12">
                                                        <div className="pro-img">
                                                            <a href="product.html">
                                                                <img className="primary-img" src="img\products\23.jpg"
                                                                     alt="single-product"/>
                                                                <img className="secondary-img"
                                                                     src="img\products\24.jpg" alt="single-product"/>
                                                            </a>
                                                            <a href="#" className="quick_view" data-toggle="modal"
                                                               data-target="#myModal" title="Quick View"><i
                                                                className="lnr lnr-magnifier"></i></a>
                                                            <span className="sticker-new">new</span>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-8 col-md-7 col-sm-12">
                                                        <div className="pro-content hot-product2">
                                                            <h4><a href="product.html">Accessorize with a straw hat</a>
                                                            </h4>
                                                            <p><span className="price">$15.19</span></p>
                                                            <p>Faded short sleeves t-shirt with high neckline. Soft and
                                                                stretchy material for a comfortable fit. Accessorize
                                                                with a straw hat and you're ready for summer!Faded short
                                                                sleeves t-shirt with high neckline.
                                                                Soft and stretchy material.</p>
                                                            <div className="pro-actions">
                                                                <div className="actions-primary">
                                                                    <a href="cart.html" title=""
                                                                       data-original-title="Add to Cart"> + Add To
                                                                        Cart</a>
                                                                </div>
                                                                <div className="actions-secondary">
                                                                    <a href="compare.html" title=""
                                                                       data-original-title="Compare"><i
                                                                        className="lnr lnr-sync"></i> <span>Add To Compare</span></a>
                                                                    <a href="wishlist.html" title=""
                                                                       data-original-title="WishList"><i
                                                                        className="lnr lnr-heart"></i> <span>Add to WishList</span></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="single-product">
                                                <div className="row">
                                                    <div className="col-lg-4 col-md-5 col-sm-12">
                                                        <div className="pro-img">
                                                            <a href="product.html">
                                                                <img className="primary-img" src="img\products\30.jpg"
                                                                     alt="single-product"/>
                                                                <img className="secondary-img"
                                                                     src="img\products\31.jpg" alt="single-product"/>
                                                            </a>
                                                            <a href="#" className="quick_view" data-toggle="modal"
                                                               data-target="#myModal" title="Quick View"><i
                                                                className="lnr lnr-magnifier"></i></a>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-8 col-md-7 col-sm-12">
                                                        <div className="pro-content hot-product2">
                                                            <h4><a href="product.html">Tretchy Material Comfortable</a>
                                                            </h4>
                                                            <p><span className="price">$199.19</span>
                                                                <del className="prev-price">$205.50</del>
                                                            </p>
                                                            <p>Faded short sleeves t-shirt with high neckline. Soft and
                                                                stretchy material for a comfortable fit. Accessorize
                                                                with a straw hat and you're ready for summer!Faded short
                                                                sleeves t-shirt with high neckline.
                                                                Soft and stretchy material.</p>
                                                            <div className="pro-actions">
                                                                <div className="actions-primary">
                                                                    <a href="cart.html" title=""
                                                                       data-original-title="Add to Cart"> + Add To
                                                                        Cart</a>
                                                                </div>
                                                                <div className="actions-secondary">
                                                                    <a href="compare.html" title=""
                                                                       data-original-title="Compare"><i
                                                                        className="lnr lnr-sync"></i> <span>Add To Compare</span></a>
                                                                    <a href="wishlist.html" title=""
                                                                       data-original-title="WishList"><i
                                                                        className="lnr lnr-heart"></i> <span>Add to WishList</span></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="single-product">
                                                <div className="row">
                                                    <div className="col-lg-4 col-md-5 col-sm-12">
                                                        <div className="pro-img">
                                                            <a href="product.html">
                                                                <img className="primary-img" src="img\products\41.jpg"
                                                                     alt="single-product"/>
                                                                <img className="secondary-img"
                                                                     src="img\products\42.jpg" alt="single-product"/>
                                                            </a>
                                                            <a href="#" className="quick_view" data-toggle="modal"
                                                               data-target="#myModal" title="Quick View"><i
                                                                className="lnr lnr-magnifier"></i></a>
                                                            <span className="sticker-new">new</span>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-8 col-md-7 col-sm-12">
                                                        <div className="pro-content hot-product2">
                                                            <h4><a href="product.html">Neckline Short Sleeves
                                                                Stretchy</a></h4>
                                                            <p><span className="price">$58.19</span></p>
                                                            <p>Faded short sleeves t-shirt with high neckline. Soft and
                                                                stretchy material for a comfortable fit. Accessorize
                                                                with a straw hat and you're ready for summer!Faded short
                                                                sleeves t-shirt with high neckline.
                                                                Soft and stretchy material.</p>
                                                            <div className="pro-actions">
                                                                <div className="actions-primary">
                                                                    <a href="cart.html" title=""
                                                                       data-original-title="Add to Cart"> + Add To
                                                                        Cart</a>
                                                                </div>
                                                                <div className="actions-secondary">
                                                                    <a href="compare.html" title=""
                                                                       data-original-title="Compare"><i
                                                                        className="lnr lnr-sync"></i> <span>Add To Compare</span></a>
                                                                    <a href="wishlist.html" title=""
                                                                       data-original-title="WishList"><i
                                                                        className="lnr lnr-heart"></i> <span>Add to WishList</span></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="pro-pagination">
                                            <ul className="blog-pagination">
                                                <li className="active"><a href="#">1</a></li>
                                                <li><a href="#">2</a></li>
                                                <li><a href="#">3</a></li>
                                                <li><a href="#"><i className="fa fa-angle-right"></i></a></li>
                                            </ul>
                                            <div className="product-pagination">
                                                <span className="grid-item-list">Showing 1 to 12 of 51 (5 Pages)</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    );
};
export default ListProduct;


