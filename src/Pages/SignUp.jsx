import { Link } from 'react-router-dom'
import logIn from '../assets/images/login/login.svg'

const SignUp = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content gap-20 flex-col lg:flex-row max-w-[90%] xl:max-w-[1200px] mx-auto">

                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form className="card-body">
                        <h1 className='text-center font-bold text-3xl'>Sign Up</h1>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Enter Your Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" required />

                        <label className="label">
                            <p className="label-text-alt">Already have an account ? please <Link to="/login" className='text-blue-500 font-bold'>sign in</Link></p>
                        </label>
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn btn-error">sign up</button>
                        </div>
                    </form>
                </div>

                <div>
                    <img src={logIn} alt="" />
                </div>

            </div>
        </div>
    )
}

export default SignUp
