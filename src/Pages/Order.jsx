import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom"
import OrderData from "./OrderData";

const Order = () => {

    const [orders, setOrders] = useState([])
    const data = useLoaderData();
    
    

    useEffect(() => {
        setOrders(data);
    }, [data])

    return (
        <div className="overflow-x-auto max-w-[90%] xl:max-w-[1200px] mx-auto mb-14">
        <table className="table">
            {/* head */}
            <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Job</th>
                    <th>Favorite Color</th>
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
