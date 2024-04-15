import {useEffect, useState} from "react";
import axios from "axios";
import './MyOrder.css';
import {Link} from "react-router-dom";

function MyOrder() {
    const [order, setOrder] = useState([]);
    const [selectedOrder, setSelectedOrder] = useState(null); // State to track the selected order for modal

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
            console.error("Error fetching comments:", error);
        }
    }

    // Function to handle when user clicks on fullname
    const handleFullNameClick = (selectedOrder) => {
        console.log("selectedOrder")
        console.log(selectedOrder)
        setSelectedOrder(selectedOrder);
    };

    // Function to close the modal
    const closeModal = () => {
        setSelectedOrder(null);
    };

    return (
        <div>
            <div className="container">
                <br/>
                <br/>
                <h2>My Order</h2>
                <br/>
                {selectedOrder && (
                    <div style={{marginTop: '-50px'}}>
                        <div className="modal-content">
                            <h1>Order Details</h1>
                            <div className="modal-body">
                                <h6>Order Items:</h6>
                                <table className="table table-striped">
                                    <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name Product</th>
                                        <th>Category Product</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Image</th>
                                        <th>Review</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {selectedOrder.map((item, index) => (
                                        <tr key={item.id}>
                                            <td>{index + 1}</td>
                                            <td>{item.product.title}</td>
                                            <td>{item.product.category}</td>
                                            <td>{item.price}</td>
                                            <td>{item.quantity}</td>
                                            <td><img src={item.product.img1} width={150} height={110}/></td>
                                            <td>
                                                <Link to={"/products/" + item.product.id}>
                                                    <button className='btn-dark'>Review</button>
                                                </Link>
                                            </td>

                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-danger" onClick={closeModal}>
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                )}
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>fullname</th>
                        <th>createdAt</th>
                        <th>paymentMethod</th>
                        <th>totalAmount</th>
                        <th>status</th>
                        <th>note</th>
                    </tr>
                    </thead>
                    <tbody>
                    {order.map((o) => (
                        <tr key={o.id}>
                            <td>
                                <button
                                    className="btn btn-link"
                                    onClick={() => handleFullNameClick(o.orderItems)}
                                >
                                    {o.fullname}
                                </button>
                            </td>
                            <td>{o.createdAt}</td>
                            <td>{o.paymentMethod}</td>
                            <td>{o.totalAmount}</td>
                            <td>{o.status}</td>
                            <td>{o.note}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            {/* Modal to display order details */}

        </div>
    );
}

export default MyOrder;
