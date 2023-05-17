import React from 'react';
import { Link } from 'react-router-dom';

const GetStarted = () => {
    return (
        <div className="flex flex-col items-center justify-between w-full min-h-screen text-center bg-back-color">
            <div className='pt-16  flex items-center'>
                <img src={require('../assets/images/home.png')} alt='' className='h-auto max-w-xs ' />
            </div>
            <div className='h-auto w-max-sm bg-gray-100 rounded-3xl p-6 m-5 flex flex-col gap-5'>
                <div className='flex flex-row justify-between items-center'>
                    <h3 className=' text-gray-700 font-bold text-xl'>About App</h3>
                    <div className='p-2 w-10 rounded-full h-10 bg-back-color'>
                        <img src={require('../assets/images/alert.png')} alt='' className='h-full w-full' />
                    </div>
                </div>
                <p className=' text-gray-500 text-justify text-sm'>
                    Smart Parking is an innovative application designed to bridge the communication gap between vehicle owners and others in case of emergencies or parking issues. Through the use of secure, personalized QR codes, it enables contactless communication, sending immediate alerts to vehicle owners without disclosing any personal contact information.
                </p>
                <Link to='/login' className='text-white bg-gradient-to-b from-btn-org-start to-btn-org-end hover:bg-gradient-to-br focus:ring-4 focus:outline-none font-medium rounded-2xl text-md px-5 py-4 text-center mb-2 uppercase'>Get Started</Link>
            </div>
        </div>
    );
}

export default GetStarted;
