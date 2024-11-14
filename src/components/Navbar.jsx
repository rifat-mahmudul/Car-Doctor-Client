import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.svg'
import { RiMenu3Line } from "react-icons/ri";
import { useContext, useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import { AuthContext } from '../Provider/AuthProvider';


const Navbar = () => {

    const {user, logOut} = useContext(AuthContext);
    const [showNav, setShowNav] = useState(true);

    const handleNavIcon = () => {
        setShowNav(!showNav);
    };

    const handleLogOut = () => {
        logOut()
        .then()
        .catch(error => {
            console.log(error);
        })
    }

    const navItem = <>
                <NavLink to="/" className={({isActive}) => isActive ? `text-error border-b-2 border-error` : `hover:text-error`}>Home</NavLink>
                <NavLink to="/manageInventory" className={({isActive}) => isActive ? `text-error border-b-2 border-error` : `hover:text-error`}>Manage Inventory</NavLink>

                {
                    user ? 
                    <>
                        <NavLink to="/order" className={({isActive}) => isActive ? `text-error border-b-2 border-error` : `hover:text-error`}>My Order</NavLink>
                        <NavLink to="/addService" className={({isActive}) => isActive ? `text-error border-b-2 border-error` : `hover:text-error`}>Add Service</NavLink>
                        <div className='h-10 w-10 rounded-full border border-gray-500'>
                            <img className='h-full w-full rounded-full' src={user?.photoURL} alt="" />
                        </div>
                        <NavLink>
                            <button onClick={handleLogOut} className='px-5 py-2 bg-error rounded-lg text-white'>sign out</button>
                        </NavLink>
                    </>
                    :
                    <NavLink to="/login">
                        <button className='px-5 py-2 bg-error rounded-lg text-white'>sign in</button>
                    </NavLink>
                }
                
                
    </>

    return (
        <>
        <header className="py-5 max-w-[90%] xl:max-w-[1200px] mx-auto flex justify-between items-center top-0 sticky z-50 backdrop-blur-lg">
            <div>
                <Link>
                    <img className='h-10' src={logo} alt="" />
                </Link>
            </div>

            <div className="lg:flex hidden items-center gap-8 font-semibold">
                {navItem}
            </div>

            <button onClick={handleNavIcon} className='font-semibold text-2xl lg:hidden relative'>
                {
                    showNav ? 
                    <RiMenu3Line></RiMenu3Line> 
                    : 
                    <RxCross2></RxCross2>
                }
            </button>
        </header>

        <div>
            <div className='relative z-50'>
                <div className={showNav ? `hidden` : `flex text-center py-5 px-10 rounded-lg shadow-xl border border-gray-500 flex-col gap-8 font-semibold absolute right-4 -top-5 bg-white`}>
                        {navItem}
                </div>
            </div>
        </div>
        </>
    );
};

export default Navbar;
