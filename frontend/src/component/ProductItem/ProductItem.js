import React from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addToCart} from "../../pages/Cart/Redux/CartSlice";

const ProductItem = ({product}) => {
    const cart = useSelector((state) => state.cart);

    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart({ id: product.id, product }));
        console.log(product)
        console.log("Cart:", JSON.stringify(cart, null, 1));
    }


    return (
        <>
            <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                <div className="single-product">
                    <div className="pro-img">
                        <Link to={`/products/${product.id}`}>
                            <img className="primary-img" src={product.img1} alt={product.title}/>
                            <img className="secondary-img" src={product.img2} alt={product.title}/>
                        </Link>
                        <Link to="#" className="quick_view" data-toggle="modal" data-target="#myModal"
                              title="Quick View">
                            <i className="lnr lnr-magnifier"></i>
                        </Link>
                    </div>
                    <div className="pro-content">
                        <div className="pro-info">
                            <h4>
                                <Link to={`/products/${product.id}`}>{product.title}</Link>
                            </h4>
                            <p>
                                <span className="price">{product.price - (product.price * product.sale)}</span>
                                <del className="prev-price">{product.price}</del>
                            </p>
                            <div className="label-product l_sale">{product.sale}<span
                                className="symbol-percent">%</span></div>
                        </div>
                        <div className="pro-actions">
                            <div className="actions-primary">
                                <Link to=""  title="Add to Cart"> Mua Ngay </Link>
                            </div>
                            <div className="actions-primary">
                                <Link to="" title="Add to Cart" onClick={()=>handleAddToCart()}> Thêm Vào Giỏ
                                    Hàng </Link>
                            </div>
                            <div className="actions-secondary">
                                <Link to=""  title="Compare">
                                    <i className="lnr lnr-sync"></i> <span>Delete</span>
                                </Link>
                                <Link to="wishlist.html" title="WishList">
                                    <i className="lnr lnr-heart"></i> <span>Add to WishList</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default ProductItem;
