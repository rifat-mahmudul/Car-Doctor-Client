/* eslint-disable react/prop-types */

import Swal from "sweetalert2";


const OrderData = ({order, setOrders, orders}) => {


    const {name, photoURL, price, date, _id} = order;

    const handleDelete = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/orders/${_id}`, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your coffee has been deleted.",
                            icon: "success"
                        });
                        const deleteOrder = orders.filter(c => c._id !== _id);
                        setOrders(deleteOrder);
                    }
                })
                .catch(error => console.error("Error deleting coffee:", error));
            }
        });
    }

    return (
        <tr>
            <th>
                        <label>
                            <input type="checkbox" className="checkbox" />
                        </label>
                        </th>
                        <td>
                        <div className="flex items-center gap-3">
                            <div className="avatar">
                            <div className="mask mask-squircle h-12 w-12">
                                <img
                                src={photoURL}
                                alt="Avatar Tailwind CSS Component" />
                            </div>
                            </div>
                            <div>
                            <div className="font-bold">{name}</div>
                            <div className="text-sm opacity-50">{date}</div>
                            </div>
                        </div>
                        </td>
                        <td>{price}</td>
                        <th>
                        <button className="btn btn-ghost btn-xs bg-green-300">Pending</button>
                        </th>
                        <th>
                        <button onClick={handleDelete} className="btn btn-error btn-xs">Delete</button>
                        </th>
        </tr>
    )
}

export default OrderData
