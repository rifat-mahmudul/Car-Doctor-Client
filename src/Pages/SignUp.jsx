import { Link, useNavigate } from 'react-router-dom'
import logIn from '../assets/images/login/login.svg'
import { useContext } from 'react'
import { AuthContext } from '../Provider/AuthProvider'
import { updateProfile } from 'firebase/auth'
import { auth } from '../firebase/firebase.config'
import Swal from 'sweetalert2'

const SignUp = () => {

    const {signUp} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        
        signUp(email, password)
        .then(
            () => {
                updateProfile(auth.currentUser, {
                    displayName : name,
                    photoURL : photoURL
                });

                Swal.fire({
                    icon: "success",
                    title: "Sing Up Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/login');
            }
        )
        .catch(error => {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: `${error.massage}`,
            });
        })
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content gap-20 flex-col lg:flex-row max-w-[90%] xl:max-w-[1200px] mx-auto">

                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form className="card-body" onSubmit={handleSignUp}>
                        <h1 className='text-center font-bold text-3xl'>Sign Up</h1>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Enter Your Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">photoURL</span>
                        </label>
                        <input type="text" name='photoURL' placeholder="Enter Your photoURL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                        <label className="label">
                            <p className="label-text-alt">Already have an account ? please <Link to="/login" className='text-blue-500 font-bold'>sign in</Link></p>
                        </label>
                        </div>
                        <div className="form-control mt-6">
                        <button type='submit' className="btn btn-error">sign up</button>
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
