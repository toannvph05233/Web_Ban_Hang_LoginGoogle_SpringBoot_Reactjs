// Cart.js

import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from 'react-router-dom';
import Breadcrumb from "../../component/Breadcrumb/Breadcrumb";
import {removeFromCart, updateCart} from "./Redux/CartSlice";

const Cart = () => {
    const cart = useSelector((state) => state.cart.cart);
    const totalPrice = useSelector((state) => state.cart.totalPrice);
    const dispatch = useDispatch();

    const handleRemoveFromCart = (id) => {
        dispatch(removeFromCart({id}));
    };
    function handleDecreaseQuantity(id, currentQuantity) {
        if (currentQuantity > 1) {
            dispatch(updateCart({ id, quantity: currentQuantity - 1 }));
            console.log(cart)
        }
    }

    function handleIncreaseQuantity(id, currentQuantity) {
        dispatch(updateCart({ id, quantity: currentQuantity + 1 }));
        console.log(cart)
    }

    return (
        <div className="wrapper">
            <div className="breadcrumb-area mt-30">
                <div className="container">
                    <Breadcrumb title={"Giỏ hàng"}/>
                </div>
            </div>
            <div className="cart-main-area ptb-100 ptb-sm-60">
                <div className="container">
                    <div className="row">

                        <div className="col-md-12 col-sm-12">
                            <div className="table-content table-responsive mb-45">
                                <table>
                                    <thead>
                                    <tr>
                                        <th className="product-thumbnail">Hình ảnh</th>
                                        <th className="product-name">Sản phẩm</th>
                                        <th className="product-price">Đơn giá</th>
                                        <th className="product-quantity">Số lượng</th>
                                        <th className="product-subtotal">Tổng</th>
                                        <th className="product-remove">Xóa</th>
                                    </tr>
                                    </thead>
                                    <tbody>

                                    {cart.length === 0 ? (<tr>
                                        <td colSpan="6">Giỏ hàng trống!</td>
                                    </tr>) : cart.map((item, index) => (
                                        <tr key={index}>
                                            <td className="product-thumbnail">
                                                <img src={item.product.img1} alt="cart-image"/>
                                                <input type="hidden" name="productID" value={item.product.id}/>
                                            </td>
                                            <td className="product-name">
                                                <Link to={`/products/${item.product.id}`} target="_blank"
                                                      rel="noopener noreferrer">
                                                    {item.product.title}
                                                </Link>
                                            </td>
                                            <td className="product-price">
                                                <span className="amount">{item.product.price} VNĐ</span>
                                            </td>
                                            <td className="product-quantity">
                                                <button className="btn btn-sm btn-outline-danger"
                                                        onClick={() => handleDecreaseQuantity(item.product.id,item.quantity)}> -
                                                </button>
                                                <span className="m-2">{item.quantity}</span>
                                                <button className="btn btn-sm btn-outline-success"
                                                        onClick={() => handleIncreaseQuantity(item.product.id,item.quantity)}>+
                                                </button>


                                            </td>
                                            <td className="product-subtotal">
                                                {(item.product.price * item.quantity)} VNĐ
                                            </td>
                                            <td className="product-remove">
                                                <button className={"btn"}
                                                        onClick={() => handleRemoveFromCart(item.product.id)}>
                                                    <i className="fa fa-trash"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                            {cart.length !== 0 ? (
                                <div className="row">
                                    <div className="col-md-8 col-sm-12">
                                        <div className="buttons-cart">
                                            <Link to="/ProductLists">Tiếp tục mua sắm</Link>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-12">
                                        <div className="cart_totals float-md-right text-md-right">
                                            <h2>SỐ TIỀN THANH TOÁN</h2>
                                            <table className="float-md-right">
                                                <tbody>
                                                <tr className="order-total">
                                                    <th>Tổng:</th>
                                                    <td>
                                                        <strong><span
                                                            className="amount">{totalPrice} VNĐ</span></strong>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                            <div className="wc-proceed-to-checkout">
                                                <Link to="/Payment">THANH TOÁN</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : ""}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
