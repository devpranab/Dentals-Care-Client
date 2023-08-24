import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const MyAppointment = () => {
    const { user, isDarkMode } = useContext(AuthContext);

    const url = `http://localhost:5012/booking?email=${user?.email}`
    const { data: bookings = [] } = useQuery({
        queryKey: ['booking', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data
        },
    });
    
    return (
        <div className='px-5'>
            <h2 className='text-3xl'>My Appointments</h2>
            <div className="overflow-x-auto my-10 ">
                <table className="table w-full">
                    <thead>
                        <tr className={` ${isDarkMode ? 'bg-[black] text-black' : 'text-black'}`}>
                            <th></th>
                            <th>Name</th>
                            <th>Treatment</th>
                            <th>Date</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody className={` ${isDarkMode ? 'bg-[black] text-black' : 'text-black'}`}>
                    {
                        bookings.length && bookings?.map((booking, i) =>
                                <tr key={i} className="hover">
                                    <th>{i + 1}</th>
                                    <td>{booking?.name}</td>
                                    <td>{booking?.treatment}</td>
                                    <td>{booking?.appointmentDate}</td>
                                    <td>{booking?.slot}</td>
                                </tr>)
                        } 
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;