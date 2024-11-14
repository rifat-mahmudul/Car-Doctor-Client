import { useLoaderData, useNavigate } from "react-router-dom"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const OrderNow = () => {

    const {user} = useContext(AuthContext);
    const [startDate, setStartDate] = useState(new Date());
    const serviceInfo = useLoaderData();
    const {name, price} = serviceInfo;
    const navigate = useNavigate();

    const handleOrder = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const price = form.price.value;
        const date = form.date.value;
        const email = form.email.value;

        const orderInfo = {
            name, price, date, email
        }

        console.log(orderInfo);

        fetch('http://localhost:5000/orders',{
            method : 'POST',
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify(serviceInfo)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.acknowledged){
                Swal.fire({
                    icon: "success",
                    title: "Order Confirmed",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/');
            }
        })
    }

    return (
        <section className="card w-full shrink-0 shadow-2xl max-w-[90%] xl:max-w-[1000px] mx-auto bg-base-200 mb-20 mt-10 py-10">
                    <form className="card-body" onSubmit={handleOrder}>
                        <h1 className='text-center font-bold text-3xl'>Order Now</h1>

                        <div className="flex gap-8 flex-col sm:flex-row justify-between items-center w-full">
                            <div className="sm:w-[49%]">
                                <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name="name" defaultValue={name} type="text" placeholder="Name" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input name="price" defaultValue={price} type="text" placeholder="Price" className="input input-bordered" required />
                                </div>
                            </div>

                            <div className="sm:w-[49%]">
                                <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email" defaultValue={user?.email} type="email" placeholder="email" className="input input-bordered " required disabled />
                                    </div>
                                    <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Date</span>
                                    </label>
                                    <DatePicker name="date" className="w-full input" selected={startDate} onChange={(date) => setStartDate(date)} />
                                </div>
                            </div>
                        </div>

                        <div className="form-control mt-6">
                        <button type="submit" className="btn btn-error font-bold text-white">Order Now</button>
                        </div>
                    </form>
                
        </section>
    )
}

export default OrderNow
