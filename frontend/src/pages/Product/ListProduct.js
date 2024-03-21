import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import Footer from "../../component/Footer/Footer";
import Header from "../../component/Header/Header";
import Breadcrumb from "../../component/Breadcrumb/Breadcrumb";

const ProductList = () => {
    const [products, setProducts] = useState([""]);
    // const [pageNumber, setPageNumber] = useState(1);
    // const [numberPage, setNumberPage] = useState(1);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/v1/products`);
                setProducts(response.data.content);
                // setNumberPage(response.data.totalPages);
                console.log(response.data.content);
                console.log(products);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
    }, []);

    // const handlePreviousPage = () => {
    //     setPageNumber(pageNumber - 1);
    // };
    //
    // const handleNextPage = () => {
    //     setPageNumber(pageNumber + 1);
    // };

    return (
        <div>

            <div className="wrapper">
                <Header/>
                <Breadcrumb title={"Danh sách sản phẩm"}/>
                <div className="main-shop-page pt-100 pb-100 ptb-sm-60">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 order-2 order-lg-1">
                                {/* Your Sidebar Component */}
                            </div>
                            <div className="col-lg-9 order-1 order-lg-2">
                                <div className="grid-list-top border-default universal-padding d-md-flex justify-content-md-between align-items-center mb-30">
                                    {/* Your Toolbar Component */}
                                </div>
                                <div className="row">
                                    {products.map(product => (
                                        <div className="col-lg-4 col-md-4 col-sm-6 col-6" key={product.id}>
                                            <div className="single-product">
                                                <div className="pro-img">
                                                    <Link to={`ProductDetail?id=${product.id}`}>
                                                        <img className="primary-img" src={product.img1} alt="single-product" />
                                                        <img className="secondary-img" src={product.img2} alt="single-product" />
                                                    </Link>
                                                </div>
                                                <div className="pro-content">
                                                    <div className="pro-info">
                                                        <h4>
                                                            <Link to={`ProductDetail?id=${product.id}`}>{product.name}</Link>
                                                        </h4>
                                                        <p>
                                                                    <span className="price">
                                                                        {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.price - Math.round(product.price * (product.sale / 100)))}
                                                                    </span>
                                                            VNĐ
                                                            {   product.sale > 0 && (
                                                                <del className="prev-price">
                                                                    {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.price)}
                                                                    VNĐ
                                                                </del>
                                                            )}
                                                        </p>
                                                        {product.salePrice > 0 && (
                                                            <div className="label-product l_sale">
                                                                {product.salePrice}<span className="symbol-percent">%</span>
                                                            </div>
                                                        )}
                                                    </div>
                                                    <div className="pro-actions">
                                                        <div className="actions-primary">
                                                            <a href={`/addCart?id=${product.id}`} title="Thêm vào giỏ"> + Thêm vào giỏ</a>
                                                        </div>
                                                        <div className="actions-primary">
                                                            <a href={`/card?id=${product.id}`} title="Mua ngay"> Mua ngay</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                {/*<div className="pro-pagination">*/}
                                {/*    <ul className="blog-pagination">*/}
                                {/*        {pageNumber > 1 && (*/}
                                {/*            <li>*/}
                                {/*                <a href="#" onClick={handlePreviousPage}>«</a>*/}
                                {/*            </li>*/}
                                {/*        )}*/}
                                {/*        {Array.from({ length: numberPage }, (_, index) => {*/}
                                {/*            const pageNum = index + 1;*/}
                                {/*            return (*/}
                                {/*                <li key={pageNum} className={pageNum === pageNumber ? 'active' : ''}>*/}
                                {/*                    <a href="#" onClick={() => setPageNumber(pageNum)}>{pageNum}</a>*/}
                                {/*                </li>*/}
                                {/*            );*/}
                                {/*        })}*/}
                                {/*        {pageNumber < numberPage && (*/}
                                {/*            <li>*/}
                                {/*                <a href="#" onClick={handleNextPage}>»</a>*/}
                                {/*            </li>*/}
                                {/*        )}*/}
                                {/*    </ul>*/}
                                {/*</div>*/}
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>

        </div>
    );
};

export default ProductList;
