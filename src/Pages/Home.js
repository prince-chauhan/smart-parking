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

                    </div>
                    <div class="grid grid-cols-2 gap-4 p-4 lg:grid-cols-4">
                        <div class="p-4 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 dark:hover:bg-gray-600 dark:bg-gray-700">
                            <div class="flex justify-center items-center p-2 mx-auto mb-2 max-w-[48px] bg-gray-200 dark:bg-gray-500 rounded-full w-18 h-18">
                                <svg class="inline w-8 h-8 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                            </div>
                            <div class="font-medium text-center text-gray-500 dark:text-gray-400">Chart</div>
                        </div>
                        <div class="p-4 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 dark:hover:bg-gray-600 dark:bg-gray-700">
                            <div class="flex justify-center items-center p-2 mx-auto mb-2 max-w-[48px] bg-gray-200 dark:bg-gray-500 rounded-full w-18 h-18">
                                <svg class="inline w-8 h-8 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                            </div>
                            <div class="font-medium text-center text-gray-500 dark:text-gray-400">Chart</div>
                        </div>
                        <div class="p-4 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 dark:hover:bg-gray-600 dark:bg-gray-700">
                            <div class="flex justify-center items-center p-2 mx-auto mb-2 max-w-[48px] bg-gray-200 dark:bg-gray-500 rounded-full w-18 h-18">
                                <svg class="inline w-8 h-8 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                            </div>
                            <div class="font-medium text-center text-gray-500 dark:text-gray-400">Chart</div>
                        </div>
                        <div class="p-4 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 dark:hover:bg-gray-600 dark:bg-gray-700">
                            <div class="flex justify-center items-center p-2 mx-auto mb-2 max-w-[48px] bg-gray-200 dark:bg-gray-500 rounded-full w-18 h-18">
                                <svg class="inline w-8 h-8 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                            </div>
                            <div class="font-medium text-center text-gray-500 dark:text-gray-400">Chart</div>
                        </div>
                        <div class="p-4 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 dark:hover:bg-gray-600 dark:bg-gray-700">
                            <div class="flex justify-center items-center p-2 mx-auto mb-2 max-w-[48px] bg-gray-200 dark:bg-gray-500 rounded-full w-18 h-18">
                                <svg class="inline w-8 h-8 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                            </div>
                            <div class="font-medium text-center text-gray-500 dark:text-gray-400">Chart</div>
                        </div>
                        <div class="p-4 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 dark:hover:bg-gray-600 dark:bg-gray-700">
                            <div class="flex justify-center items-center p-2 mx-auto mb-2 max-w-[48px] bg-gray-200 dark:bg-gray-500 rounded-full w-18 h-18">
                                <svg class="inline w-8 h-8 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                            </div>
                            <div class="font-medium text-center text-gray-500 dark:text-gray-400">Chart</div>
                        </div>
                        <div class="p-4 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 dark:hover:bg-gray-600 dark:bg-gray-700">
                            <div class="flex justify-center items-center p-2 mx-auto mb-2 max-w-[48px] bg-gray-200 dark:bg-gray-500 rounded-full w-18 h-18">
                                <svg class="inline w-8 h-8 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                            </div>
                            <div class="font-medium text-center text-gray-500 dark:text-gray-400">Chart</div>
                        </div>
                    </div>
                </div>
                {openDrawer && <div class="bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-30"></div>}
            </main>
        </div>
    );
};

export default Dashboard;
