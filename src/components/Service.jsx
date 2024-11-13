/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Service = ({service}) => {

    const {title, img, price} = service;

    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure className="px-10 pt-10">
                <img
                src={img}
                alt="product"
                className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p className="font-bold">${price}</p>
                <div className="card-actions">
                <Link to='/orderNow'>
                    <button className="btn btn-error">Order Now</button>
                </Link>
                </div>
            </div>
        </div>
    )
}

export default Service
