import { useState } from "react";
import OrderData from "./OrderData";
import axios from "axios";

const Order = () => {

    const [orders, setOrders] = useState([])

    axios.get('http://localhost:5000/orders')
    .then(res => {
        setOrders(res.data);
    })


    return (
        <div className="overflow-x-auto max-w-[90%] xl:max-w-[1200px] mx-auto mb-14">
        <table className="table">
            {/* head */}
            <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Status</th>
                    <th></th>
                </tr>
            </thead>

            <tbody>

                {
                    orders.map(order => <OrderData key={order._id} orders={orders} setOrders={setOrders} order={order}></OrderData>)
                }
            
            </tbody>
        </table>
        </div>
    )
}

export default Order
