
const OrderNow = () => {
    return (
        <section className="card w-full shrink-0 shadow-2xl max-w-[90%] xl:max-w-[1000px] mx-auto bg-base-200 mb-20 mt-10 py-10">
                    <form className="card-body">
                        <h1 className='text-center font-bold text-3xl'>Order Now</h1>

                        <div className="flex gap-8 flex-col sm:flex-row justify-between items-center w-full">
                            <div className="sm:w-[49%]">
                                <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input type="text" placeholder="Price" className="input input-bordered" required />
                                </div>
                            </div>

                            <div className="sm:w-[49%]">
                                <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Date</span>
                                    </label>
                                    <input type="text" placeholder="Date" className="input input-bordered" required />
                                </div>
                            </div>
                        </div>

                        <div className="form-control mt-6">
                        <button className="btn btn-error font-bold text-white">Order Now</button>
                        </div>
                    </form>
                
        </section>
    )
}

export default OrderNow
