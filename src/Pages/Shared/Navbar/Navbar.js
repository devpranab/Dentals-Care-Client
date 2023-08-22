import React from 'react';
import { Link } from 'react-router-dom';
import { FaSun, FaMoon, FaUser } from 'react-icons/fa';
import { TbDental } from 'react-icons/tb';

const Navbar = () => {

    const menuItems = <>
      <li className='text-lg font-semibold'><Link to={'/'}>Home</Link></li>
        <li className='text-lg font-semibold'><Link to={'/appointment'}>Appointment</Link></li>
        <li className='text-lg font-semibold'><Link to={'/dashboard'}>Dashboard</Link></li>
        <li className='text-lg font-semibold'><Link to={'/user'}>User</Link></li>
        <li className='text-lg font-semibold'><Link to={'/login'}>Login</Link></li>
        <li className='text-lg font-semibold'><button><FaMoon /></button></li>

    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link className="btn btn-ghost normal-case font-semibold text-2xl"><TbDental/> Dental's Care</Link>
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