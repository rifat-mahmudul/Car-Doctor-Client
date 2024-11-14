import { useEffect, useState } from "react"
import Service from "./Service";

const AllService = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => {
            setServices(data);
        })
    }, [])

    return (
        <section className="pb-16 pt-10">
            <div className="max-w-[90%] xl:max-w-[1200px] mx-auto">
                <div className="text-center">
                    <p className="text-error font-bold">Service</p>
                    <h1 className="font-bold text-3xl mt-3 mb-3">Our Service Area</h1>
                    <p className="text-gray-500 sm:max-w-lg mx-auto">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                    {
                        services.map(service => <Service key={service._id} service={service}></Service>)
                    }
                </div>
            </div>
        </section>
    )
}

export default AllService
