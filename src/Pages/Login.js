import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { LoginUI, OTPUI } from '../components';

const Login = () => {
    const [mobile, setMobile] = useState('');
    const [otp, setOtp] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    const handleOTP = (e) => {
        e.preventDefault();
    }

    return (
        <div className="flex items-center min-w-full justify-center min-h-screen">
            <div className="w-full max-w-md mx-6">
                <Routes>
                    <Route path='otp' element={<OTPUI otp={otp} setOTP={setOtp} handleSubmit={handleOTP} mobile={mobile.substring(0, 3) + 'xxxx' + mobile.substring(7, 10)} />} />
                    <Route path='/' element={<LoginUI mobile={mobile} setMobile={setMobile} handleSubmit={handleSubmit} />} />
                </Routes>
            </div>
        </div>
    );
}

export default Login;
