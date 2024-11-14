import { Link } from 'react-router-dom'
import logIn from '../assets/images/login/login.svg'
import { FcGoogle } from "react-icons/fc";
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';



const Login = () => {

    const {signInGoogle} = useContext(AuthContext);

    const handleGoogleSignIn = () => {
        signInGoogle()
        .then(result => {
            console.log(result.user)
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content gap-20 flex-col lg:flex-row max-w-[90%] xl:max-w-[1200px] mx-auto">
                <div>
                    <img src={logIn} alt="" />
                </div>

                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form className="card-body">
                        <h1 className='text-center font-bold text-3xl'>Sign in</h1>
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

                        <p className='text-center mt-3 mb-4'>or</p>
                        <button onClick={handleGoogleSignIn} className='flex items-center mx-auto gap-2 border border-error p-3 rounded-lg mb-2'>
                            <FcGoogle className='text-2xl'></FcGoogle> 
                            <span>sign in with google</span>
                        </button>

                        <label className="label">
                            <p className="label-text-alt">Do not have an account ? please <Link to="/signUp" className='text-blue-500 font-bold'>Sign Up</Link></p>
                        </label>
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn btn-error">sign in</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
