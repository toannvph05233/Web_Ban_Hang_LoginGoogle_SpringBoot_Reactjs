import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ProductItem = () => {
    const [products, setProducts] = useState([""]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/v1/products`);
                setProducts(response.data.content);
                console.log(response.data.content);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts(); // Call fetchProducts function here
    }, []);

    return (
        <div className="row">
            {products.map(product => (
                <div key={product.id} className="col-lg-4 col-md-4 col-sm-6 col-6">
                    <div className="single-product">
                        <div className="pro-img">
                            <Link to={`/product/${product.id}`}>
                                <img className="primary-img" src={product.img1}  alt={product.name} />
                                <img className="secondary-img" src={product.img2} alt={product.name} />
                            </Link>
                            <Link to="#" className="quick_view" data-toggle="modal" data-target="#myModal" title="Quick View">
                                <i className="lnr lnr-magnifier"></i>
                            </Link>
                        </div>
                        <div className="pro-content">
                            <div className="pro-info">
                                <h4>
                                    <Link to={`/products/${product.id}`}>{product.name}</Link>
                                </h4>
                                <p>
                                    <span className="price">{product.price-(product.price*product.sale)}</span>
                                    <del className="prev-price">{product.price}</del>
                                </p>
                                <div className="label-product l_sale">30<span className="symbol-percent">%</span></div>
                            </div>
                            <div className="pro-actions">
                                <div className="actions-primary">
                                    <Link to="cart.html" title="Add to Cart"> Mua Ngay </Link>
                                </div>
                                <div className="actions-primary">
                                    <Link to="cart.html" title="Add to Cart"> Thêm Vào Hàng </Link>
                                </div>
                                <div className="actions-secondary">
                                    <Link to="compare.html" title="Compare">
                                        <i className="lnr lnr-sync"></i> <span>Add To Compare</span>
                                    </Link>
                                    <Link to="wishlist.html" title="WishList">
                                        <i className="lnr lnr-heart"></i> <span>Add to WishList</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductItem;
