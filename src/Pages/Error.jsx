import { Link } from "react-router-dom"
import ErrorImg from "../assets/Error.png"

const Error = () => {
    return (
        <div className="h-[100vh] flex justify-center items-center">
            <div className="text-center">
                <img className="h-[300px]" src={ErrorImg} alt="" />
                <Link to="/">
                    <button className="btn btn-error">Back to Home</button>    
                </Link>
            </div>
        </div>
    )
}

export default Error
