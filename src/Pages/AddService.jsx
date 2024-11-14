import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from 'sweetalert2';


const AddService = () => {
    const [startDate, setStartDate] = useState(new Date());

    const handleAddService = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const price = form.price.value;
        const date = form.date.value;

        const serviceInfo = {
            name,
            photoURL,
            price,
            date
        }

        fetch('http://localhost:5000/services',{
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
                    title: "Service Added Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                form.reset();
            }
        })
    }

    return (
        <section className="card w-full shrink-0 shadow-2xl max-w-[90%] xl:max-w-[1000px] mx-auto bg-base-200 mb-20 mt-10 py-10">
                    <form className="card-body" onSubmit={handleAddService}>
                        <h1 className='text-center font-bold text-3xl'>Add Service</h1>

                        <div className="flex gap-8 flex-col sm:flex-row justify-between items-center w-full">
                            <div className="sm:w-[49%]">
                                <div className="form-control">
                            <label className="label">
                                <span className="label-text">Service Name</span>
                            </label>
                            <input name="name" type="text" placeholder="Service Name" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Service Price</span>
                                    </label>
                                    <input name="price" type="text" placeholder="Service Price" className="input input-bordered" required />
                                </div>
                            </div>

                            <div className="sm:w-[49%]">
                                <div className="form-control">
                            <label className="label">
                                <span className="label-text">PhotoURL</span>
                            </label>
                            <input name="photoURL" type="text" placeholder="PhotoURL" className="input input-bordered" required />
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
                        <button type="submit" className="btn btn-error font-bold text-white">Add Service</button>
                        </div>
                    </form>
                
        </section>
    )
}

export default AddService
