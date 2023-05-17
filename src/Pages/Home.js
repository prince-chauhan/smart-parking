import React, { useEffect, useRef, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { HomeUI } from '../components';

const Dashboard = () => {
    const handleCreateQRCode = () => {
        // Logic for creating a new QR code goes here.
    };

    const handleRevokeQRCode = () => {
        // Logic for revoking the current QR code goes here.
    };
    const [openDrawer, setOpenDrawer] = useState(false)
    const handleDrawer = () => {
        setOpenDrawer(!openDrawer)
    };
    const drawer = useRef(null)
    const handleClickOutside = (event) => {
        if (drawer.current && !drawer.current.contains(event.target)) {
            setOpenDrawer(false);
        }
    };


    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    return (
        <div className="min-h-screen bg-gray-100">
            <header className="p-4 pt-6 w-full bg-back-color shadow rounded-b-2xl">
                <div className=' flex justify-between'>
                    <div className='p-1.5 bg-white w-max rounded-lg'>
                        <svg aria-hidden="true" class="w-6 h-6" fill="#656cee" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    </div>
                    <div className='text-center text-white font-bold text-lg'>Home</div>
                    <div className='p-1 bg-white w-9 rounded-md'>
                        <img src='https://www.transparentpng.com/thumb/user/gray-user-profile-icon-png-fP8Q1P.png' alt='' className='w-full' />
                    </div>
                </div>
            </header>
            <main className="container mx-auto p-4">
                <Routes>
                    <Route path='/' element={<HomeUI handleDrawer={handleDrawer} />} />
                </Routes>
                <div ref={drawer} class={`fixed z-40 w-full max-w-sm overflow-y-auto max-h-96 bg-white hide-scroll border-t border-gray-200 rounded-t-lg transition-transform bottom-0 -ml-4 ${!openDrawer && 'translate-y-full'}`}>
                    <div class="p-4 cursor-pointer hover:bg-gray-50" data-drawer-toggle="drawer-swipe" onClick={handleDrawer}>
                        <span class="absolute w-8 h-1 -translate-x-1/2 bg-gray-300 rounded-lg top-3 left-1/2"></span>
                        <h5 id="drawer-swipe-label" class="inline-flex items-center text-base text-gray-500 dark:text-gray-400"><svg class="w-5 h-5 mr-2" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z"></path></svg>Options</h5>

                    </div>
                    <div class="grid grid-cols-2 gap-4 p-4 lg:grid-cols-4">
                        Will be added soon....
                    </div>
                </div>
                {openDrawer && <div class="bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-30"></div>}
            </main>
        </div>
    );
};

export default Dashboard;
