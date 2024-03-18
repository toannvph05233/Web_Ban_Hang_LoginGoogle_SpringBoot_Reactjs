import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/v1/products');
                setProducts(response.data.content);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div className="product-list">
            <h1>Product List</h1>
            <div className="row">
                {products.map(product => (
                    <div key={product.productID} className="col-lg-4 col-md-4 col-sm-6 col-6">
                        <div className="single-product">
                            <div className="pro-img">
                                <a href={`ProductDetail?productID=${product.productID}`}>
                                    <img className="primary-img" src={product.image1} alt="single-product" />
                                    <img className="secondary-img" src={product.image2} alt="single-product" />
                                </a>
                            </div>
                            <div className="pro-content">
                                <div className="pro-info">
                                    <h4>
                                        <a href={`ProductDetail?productID=${product.productID}`}>{product.productName}</a>
                                    </h4>
                                    <p>
                                        <span className="price">{product.price} VNĐ</span>
                                        {product.salePrice > 0 && (
                                            <del className="prev-price">{product.price} VNĐ</del>
                                        )}
                                    </p>
                                    {product.salePrice > 0 && (
                                        <div className="label-product l_sale">{product.salePrice}<span className="symbol-percent">%</span></div>
                                    )}
                                </div>
                                <div className="pro-actions">
                                    <div className="actions-primary">
                                        <a href={`/addCart?productID=${product.productID}`} title="Thêm vào giỏ"> + Thêm vào giỏ</a>
                                    </div>
                                    <div className="actions-primary">
                                        <a href={`/buyNow?productID=${product.productID}`} title="Mua ngay"> Mua ngay</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
