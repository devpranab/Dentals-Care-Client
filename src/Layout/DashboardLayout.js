import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
    const { user, isDarkMode } = useContext(AuthContext);

    return (
        <div>
            <Navbar></Navbar>

            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle  " />
                <div className="drawer-content">
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    {/* <ul className={` bg-base-100 sm:bg-transparent  ${isDarkMode ? 'text-green' : 'bg-sky-400'} rounded`}> */}
                    <ul className={`menu p-4 w-80 text-base-content rounded ${isDarkMode ? 'bg-white text-black' : 'bg-[#18d4ec] text-white'}`}>
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to={'/dashboard'}>My Appointments</Link></li>
                        {/* only admin */}
                        <li><Link to={'/dashboard/allusers'}>All Users</Link></li>
                        <li><Link to={'/dashboard/adddoctor'}>Add a Doctor</Link></li>
                        <li><Link to={'/dashboard/managedoctors'}>Manage Doctors</Link></li>
                </ul>

            </div>
        </div>
        </div >
    );
};

export default DashboardLayout;