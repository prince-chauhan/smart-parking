import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { HomeUI, QRManage } from '../components';

const Dashboard = () => {
    const location = useLocation();
    const pageHeading = {
        '/home': 'Home',
        '/home/manageQR': 'Manage QR Code',
    }
    return (
        <div className="min-h-screen bg-gray-100">
            <header className="p-4 py-3 w-full bg-blue-700 shadow">
                <div className=' flex justify-between items-center'>
                    <svg aria-hidden="true" className="w-7 h-7" fill="#fff" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>

                    <div className='text-center text-white font-medium text-lg'>{pageHeading[location.pathname]}</div>
                    <div className='p-1 bg-white w-8 rounded-full'>
                        <img src='https://www.transparentpng.com/thumb/user/gray-user-profile-icon-png-fP8Q1P.png' alt='' className='w-full' />
                    </div>
                </div>
            </header>
            <main className="container mx-auto p-4">
                <Routes>
                    <Route path='/' element={<HomeUI />} />
                    <Route path='manageQR' element={<QRManage />} />
                </Routes>
            </main>
        </div>
    );
};

export default Dashboard;
