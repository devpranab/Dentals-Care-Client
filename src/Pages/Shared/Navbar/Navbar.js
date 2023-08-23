import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaSun, FaMoon, FaUser } from 'react-icons/fa';
import { TbDental } from 'react-icons/tb';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const Navbar = () => {
    const { user, logOut, isDarkMode, setIsDarkMode } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success("User Logged Out Successfully");
            })
            .catch(err => console.error(err))
    }

    const menuItems = <>
        <li className='text-lg font-semibold'><Link to={'/'}>Home</Link></li>
        <li className='text-lg font-semibold'><Link to={'/appointment'}>Appointment</Link></li>

        {
            user?.email ? <>
            <li className='text-lg font-semibold'><Link to={'/dashboard'}>Dashboard</Link></li>
                <li className='text-lg font-semibold'><Link className='font-semibold pr-[0]'><span className='w-7 h-7 border-2 rounded-full text-center'><img className='rounded-full w-full h-full' src={user?.photoURL} alt='User Img'/></span>{user?.displayName}</Link></li>
                
                <li className='text-lg font-semibold pl-3' onClick={handleLogOut}><Link>Log Out</Link></li></> :
                <li className='text-lg font-semibold pl-3'><Link to={'/login'}>Login</Link></li>
        }
        <li className='text-lg font-semibold'><button onClick={() => setIsDarkMode(!isDarkMode)}>
                {isDarkMode ? <FaSun /> : <FaMoon />}
            </button></li>
    </>
    return (
        <div className={`navbar ${isDarkMode ? "bg-gray-800 text-white" : "bg-base-100 text-black"}`}>
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link className="btn btn-ghost normal-case font-semibold text-2xl"><TbDental /> Dental's Care</Link>
            </div>
            <div className="navbar-center hidden md:flex ml-auto">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>

        </div>
    );
};

export default Navbar;