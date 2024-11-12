import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.svg'
import { RiMenu3Line } from "react-icons/ri";
import { useState } from 'react';
import { RxCross2 } from "react-icons/rx";


const Navbar = () => {

    const [showNav, setShowNav] = useState(true);

    const handleNavIcon = () => {
        setShowNav(!showNav);
    }

    const navItem = <>
                <NavLink to="/" className={({isActive}) => isActive ? `text-error border-b-2 border-error` : `hover:text-error`}>Home</NavLink>
                <NavLink to="/order" className={({isActive}) => isActive ? `text-error border-b-2 border-error` : `hover:text-error`}>Order</NavLink>
                <NavLink to="/orderReview" className={({isActive}) => isActive ? `text-error border-b-2 border-error` : `hover:text-error`}>Order Review</NavLink>
                <NavLink to="/manageInventory" className={({isActive}) => isActive ? `text-error border-b-2 border-error` : `hover:text-error`}>Manage Inventory</NavLink>
                <NavLink>
                    <button className='px-5 py-2 bg-red-500 rounded-lg text-white'>Login</button>
                </NavLink>
    </>

    return (
        <>
        <div className="py-5 max-w-[90%] xl:max-w-[1200px] mx-auto flex justify-between items-center">
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
        </div>

        <div>
            <div className='relative'>
                <div className={showNav ? `hidden` : `flex text-center py-5 px-10 rounded-lg shadow-xl border border-gray-500 flex-col gap-8 font-semibold absolute right-4 -top-5 bg-white`}>
                        {navItem}
                </div>
            </div>
        </div>
        </>
    );
};

export default Navbar;