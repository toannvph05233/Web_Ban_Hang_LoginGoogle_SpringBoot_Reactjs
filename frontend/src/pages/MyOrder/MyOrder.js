import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

function MyOrder() {
    const [order, setOrder] = useState([]);

    useEffect(() => {
        fetchMyOrder();
    }, []);

    async function fetchMyOrder() {
        try {
            const email = JSON.parse(sessionStorage.getItem("user")).email;
            const response = await axios.get(
                `http://localhost:8080/api/v1/my_order/${email}`
            );
            setOrder(response.data);
        } catch (error) {
            console.error("Error fetching orders:", error);
        }
    }

    return (
        <div className="container mt-4">
            <h2 className="mb-4">My Orders</h2>

            {order.map((o, index) => (

                <div key={index} className="card mb-4" style={{backgroundColor: "#F5F5F5"}}>
                    <div className="card-header" style={{backgroundColor: "#F08080"}}>
                        <h5 className="card-title mb-0">Order #{index + 1} - {o.fullname}</h5>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-3">
                                <h6 className="font-weight-bold text-success mb-0">Date:</h6>
                                <h6>{o.createdAt}</h6>
                            </div>
                            <div className="col-md-3">
                                <h6 className="font-weight-bold text-info mb-0">Payment Method:</h6>
                                <h6>{o.paymentMethod}</h6>
                            </div>
                            <div className="col-md-3">
                                <h6 className="font-weight-bold text-danger mb-0">Status:</h6>
                                <h6 className={o.status === 1 ? "text-success" : "text-danger"}>
                                    {o.status === 1 ? "Successful" : "Failed"}
                                </h6>
                            </div>
                        </div>

                        <div className="table-responsive mt-4"
                             style={{backgroundColor: "#f8f9fa", padding: "20px", borderRadius: "10px"}}>
                            {o.orderItems.map((item, i) => (
                                <>
                                    <div key={i} className="order-item row" style={{marginBottom: "20px"}}>
                                        <div className="m-2 col-lg-2 col-md-3 col-sm-4">
                                            <img src={item.product.img1} alt={item.product.title} width={130}
                                                 height={130}
                                                 style={{border: "2px solid #dee2e6", borderRadius: "5px"}}/>

                                        </div>
                                        <div className="col-lg-9 col-md-9 col-sm-8">
                                            <div className="row">
                                                <div className="m-2 col-8">
                                                    <h5 style={{color: "#343a40"}}>
                                                        Tên sản phẩm:
                                                        <Link to={"/products/" + item.product.id}>
                                                        <span
                                                            style={{color: "#007bff"}}> {item.product.title}</span>
                                                        </Link>
                                                    </h5>
                                                    <p style={{color: "#28a745"}}>Giá bán: ${item.price}</p>
                                                    <p style={{color: "#dc3545"}}>Số lượng: {item.quantity}</p>

                                                </div>
                                                <div className="m-2 col-md-3">
                                                    <span
                                                        style={{color: "#6c757d"}}>Loại sản phẩm: {item.product.category}</span>
                                                    <div className="col-md-2">
                                                        <br/>
                                                        <button type="button" className="btn btn-danger">Mua Lại
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <hr/>
                                </>
                            ))}
                        </div>

                        <div className="row p-1">
                            <hr className="col-11"/>
                            <div className="col-md-10">
                                <h3 className="text-danger">Total Amount: {o.totalAmount} $</h3>
                            </div>

                        </div>
                    </div>

                </div>
            ))}
        </div>
    );
}

export default MyOrder;
