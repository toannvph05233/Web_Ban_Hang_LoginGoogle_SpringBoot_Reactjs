function Home() {

    return (
        <div className="wrapper">
            <div className="big-banner mt-100 pb-85 mt-sm-60 pb-sm-45">
                <div className="container banner-2">
                    <div className="banner-box">
                        <div className="col-img">
                            <a href="#"><img src="/assets/img/banner/banner3-1.jpg" alt="banner 3"/></a>
                        </div>
                        <div className="col-img">
                            <a href="#"><img src="/assets/img/banner/banner3-2.jpg" alt="banner 3"/></a>
                        </div>
                    </div>
                    <div className="banner-box">
                        <div className="col-img">
                            <a href="#"><img src="/assets/img/banner/banner3-3.jpg" alt="banner 3"/></a>
                        </div>
                    </div>
                    <div className="banner-box">
                        <div className="col-img">
                            <a href="#"><img src="/assets/img/banner/banner3-4.jpg" alt="banner 3"/></a>
                        </div>
                        <div className="col-img">
                            <a href="#"><img src="/assets/img/banner/banner3-5.jpg" alt="banner 3"/></a>
                        </div>
                    </div>
                    <div className="banner-box">
                        <div className="col-img">
                            <a href="#"><img src="/assets/img/banner/banner3-6.jpg" alt="banner 3"/></a>
                        </div>
                    </div>
                    <div className="banner-box">
                        <div className="col-img">
                            <a href="#"><img src="/assets/img/banner/banner3-7.jpg" alt="banner 3"/></a>
                        </div>
                        <div className="col-img">
                            <a href="#"><img src="/assets/img/banner/banner3-8.jpg" alt="banner 3"/></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="arrivals-product pb-85 pb-sm-45">
                <div className="container">
                    <div className="main-product-tab-area">
                        <div className="tab-menu mb-25">
                            <div className="section-ttitle">
                                <h2>Hàng mới</h2>
                            </div>
                        </div>
                        <div className="tab-content">
                            <div className="electronics-pro-active owl-carousel">
                                <div className="col-lg-12 col-md-12 col-sm-10 col-10">
                                    <div className="single-product">
                                        <div className="pro-img">
                                            <a href="ProductDetail?productID=${p.productID}">
                                                <img className="primary-img"
                                                     src="${p.image1}"
                                                     alt="single-product"/>
                                                <img className="secondary-img"
                                                     src="${p.image2}"
                                                     alt="single-product"/>
                                            </a>

                                        </div>
                                        <div className="pro-content">
                                            <div className="pro-info">
                                                <h4>
                                                    <a href="ProductDetail?productID=${p.productID}">productName</a>
                                                </h4>
                                                <p><span className="price">VNĐ </span>
                                                    <del className="prev-price">

                                                        VNĐ
                                                    </del>
                                                </p>
                                                <div className="label-product l_sale">salePrice<span
                                                    className="symbol-percent">%</span></div>
                                            </div>
                                            <div className="pro-actions">
                                                <div className="actions-primary">
                                                    <a href="${addCart}" title="Thêm vào giỏ"> + Thêm vào giỏ</a>
                                                </div>
                                                <div className="actions-primary">
                                                    <a href="${buyNow}" title="Mua ngay"> Mua ngay</a>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="second-arrivals-product pb-45 pb-sm-5">
                <div className="container">
                    <div className="main-product-tab-area">
                        <div className="tab-menu mb-25">
                            <div className="section-ttitle">
                                <h2>Bán chạy</h2>
                            </div>
                        </div>
                        <div className="tab-content">
                            <div className="electronics-pro-active owl-carousel">
                                    <div className="col-lg-12 col-md-12 col-sm-10 col-10">
                                        <div className="single-product">
                                            <div className="pro-img">
                                                <a href="ProductDetail?productID=${p1.productID}">
                                                    <img className="primary-img"
                                                         src="${p1.image1}"
                                                         alt="single-product"/>
                                                    <img className="secondary-img"
                                                         src="${p1.image2}"
                                                         alt="single-product"/>
                                                </a>

                                            </div>
                                            <div className="pro-content">
                                                <div className="pro-info">
                                                    <h4>
                                                        <a href="ProductDetail?productID=${p1.productID}">productName</a>
                                                    </h4>
                                                    <p><span className="price">
                                                   VNĐ </span>
                                                        <del className="prev-price">
                                                        </del>
                                                    </p>
                                                    <div className="label-product l_sale">salePrice<span
                                                        className="symbol-percent">%</span></div>
                                                </div>
                                                <div className="pro-actions">
                                                    <div className="actions-primary">
                                                        <a href="${addCart}" title="Thêm vào giỏ"> + Thêm vào giỏ</a>
                                                    </div>
                                                    <div className="actions-primary">
                                                        <a href="${buyNow}" title="Mua ngay"> Mua ngay</a>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="like-product ptb-95 off-white-bg pt-sm-50 pb-sm-55 ">
                    <div className="container">
                        <div className="like-product-area">
                            <h2 className="section-ttitle2 mb-30">Gợi ý cho bạn</h2>
                            <div className="like-pro-active owl-carousel">
                                    <div className="col-lg-12 col-md-12 col-sm-10 col-10">
                                        <div className="single-product">
                                            <div className="pro-img">
                                                <a href="ProductDetail?productID=${p2.productID}">
                                                    <img className="primary-img"
                                                         src="${p2.image1}"
                                                         alt="single-product"/>
                                                    <img className="secondary-img"
                                                         src="${p2.image2}"
                                                         alt="single-product"/>
                                                </a>

                                            </div>
                                            <div className="pro-content">
                                                <div className="pro-info">
                                                    <h4>
                                                        <a href="ProductDetail?productID=${p2.productID}">productName</a>
                                                    </h4>
                                                    <p><span className="price"> VNĐ </span>
                                                            <del className="prev-price">
                                                                 VNĐ
                                                            </del>
                                                    </p>
                                                        <div className="label-product l_sale">salePrice<span
                                                            className="symbol-percent">%</span></div>
                                                </div>
                                                <div className="pro-actions">
                                                    <div className="actions-primary">
                                                        <a href="${addCart}" title="Thêm vào giỏ"> + Thêm vào giỏ</a>
                                                    </div>
                                                    <div className="actions-primary">
                                                        <a href="${buyNow}" title="Mua ngay"> Mua ngay</a>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
)
}

export default Home;