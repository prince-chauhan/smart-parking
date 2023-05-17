const { Link } = require('react-router-dom')

export const LoginUI = ({ handleSubmit, mobile, setMobile }) => {
    return (
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-3xl px-8 pt-6 pb-8 mb-4 items-center flex flex-col">
            <div className='p-2 max-w-xs flex justify-center'>
                <img src={require('./assets/images/slide2.png')} alt='' className='h-full w-3/4' />
            </div>
            <div className='mt-6 text-center h-10 mb-2 font-semibold text-xl'>
                Login to your account
            </div>
            <p className=' text-sm my-4 text-center font-medium'>Enter your mobile number to continue.</p>
            <div className="mb-4 w-full">
                <input
                    className="shadow appearance-none border text-center font-semibold placeholder- rounded-lg w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
                    id="mobile"
                    type="text"
                    inputMode='numeric'
                    placeholder="Mobile Number"
                    value={mobile}
                    maxLength={10}
                    onChange={(e) => setMobile
                        (e.target.value.replace(/[^\d]/g, ''))}
                />
            </div>
            <div className="flex items-center w-full mt-6 justify-between">
                <Link to='otp' className='text-white w-full bg-gradient-to-b from-btn-org-start to-btn-org-end hover:bg-gradient-to-br rounded-2xl text-md py-3 font-semibold text-center mb-2 uppercase' >
                    Send OTP
                </Link>
            </div>
        </form>)
}
export const OTPUI = ({ otp, setOTP, handleSubmit, mobile }) => {
    return (
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-3xl px-8 pt-6 pb-8 mb-4 items-center flex flex-col">

            <div className='p-2 max-w-xs flex justify-center'>
                <img src={require('./assets/images/slide2.png')} alt='' className='h-full w-3/4' />
            </div>
            <div className='mt-6 text-center h-10 mb-2 font-semibold text-xl'>
                OTP Verification
            </div>
            <p className=' text-sm my-4 text-center font-medium'>A 6 digit OTP has been sent to your mobile +91 <span className='font-bold'>{mobile}</span>.</p>
            <div className="mb-4 w-full">
                <input
                    className="shadow text-center font-semibold appearance-none border rounded-lg w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
                    id="mobile"
                    type="text"
                    placeholder="Enter the OTP"
                    value={otp}
                    inputMode='numeric'
                    maxLength={6}
                    onChange={(e) => setOTP(e.target.value.replace(/[^\d]/g, ''))}
                />
            </div>
            <div className="flex items-center w-full mt-6 justify-between">
                <Link to='/home' className='text-white w-full bg-gradient-to-b from-btn-org-start to-btn-org-end hover:bg-gradient-to-br rounded-2xl text-md py-3 font-semibold text-center mb-2 uppercase'>
                    Submit
                </Link>
            </div>
        </form>)
}

export const HomeUI = ({ handleDrawer }) => {
    const vehicleInfo = [
        {
            'id': 1,
            'qr-code': '',
            'car-name': 'Mercedes G 63',
            'usage': 11,
            'created': '23 Apr 2023',
            'status': 0,
        },
        {
            'id': 2,
            'qr-code': '',
            'car-name': 'BMW X5',
            'usage': 8,
            'created': '27 Apr 2023',
            'status': 1,
        },
        {
            'id': 3,
            'qr-code': '',
            'car-name': 'Audi Q7',
            'usage': 5,
            'created': '30 Apr 2023',
            'status': 1,
        },
        {
            'id': 4,
            'qr-code': '',
            'car-name': 'Tesla Model S',
            'usage': 3,
            'created': '5 May 2023',
            'status': 0,
        },
        {
            'id': 5,
            'qr-code': '',
            'car-name': 'Ford Mustang',
            'usage': 6,
            'created': '10 May 2023',
            'status': 1,
        },
        {
            'id': 6,
            'qr-code': '',
            'car-name': 'Chevrolet Camaro',
            'usage': 4,
            'created': '15 May 2023',
            'status': 0,
        }
    ];
    const alerts = [
        {
            'id': 5686,
            'vehicle-id': '426',
            'vehicle-name': 'BMW X5',
            'qr-code-id': '123457',
            'sent-by': 'unknown',
            'location': 'Parking Lot B',
            'time': 164578764545,
            'alert-message': 'Your vehicle has been scanned.',
            'action-taken': 'None',
            'read-status': 0,
        },
        {
            'id': 5687,
            'vehicle-id': '427',
            'vehicle-name': 'Audi Q7',
            'qr-code-id': '123458',
            'sent-by': 'verified user',
            'location': 'Parking Lot A',
            'time': 164578774545,
            'alert-message': 'Your vehicle has been scanned.',
            'action-taken': 'None',
            'read-status': 1,
        },
        {
            'id': 5688,
            'vehicle-id': '428',
            'vehicle-name': 'Tesla Model S',
            'qr-code-id': '123459',
            'sent-by': 'verified user',
            'location': 'Parking Lot C',
            'time': 164578784545,
            'alert-message': 'Your vehicle has been scanned.',
            'action-taken': 'None',
            'read-status': 0,
        },
        {
            'id': 5689,
            'vehicle-id': '429',
            'vehicle-name': 'Ford Mustang',
            'qr-code-id': '123460',
            'sent-by': 'unknown',
            'location': 'Parking Lot D',
            'time': 164578794545,
            'alert-message': 'Your vehicle has been scanned.',
            'action-taken': 'None',
            'read-status': 1,
        },
        {
            'id': 5690,
            'vehicle-id': '430',
            'vehicle-name': 'Chevrolet Camaro',
            'qr-code-id': '123461',
            'sent-by': 'verified user',
            'location': 'Parking Lot E',
            'time': 164578804545,
            'alert-message': 'Your vehicle has been scanned.',
            'action-taken': 'None',
            'read-status': 0,
        }
    ];

    return (
        <div className='flex flex-col gap-4'>
            <div className='flex w-full justify-around gap-6 mt-2'>
                <Link to='/' className='text-white w-full bg-gradient-to-b from-btn-pur-start to-btn-pur-end hover:bg-gradient-to-br rounded-xl text-md py-3 font-medium text-center mb-2'>
                    Generate QR
                </Link>
                <Link to='/' className='text-white w-full bg-gradient-to-b from-btn-pur-start to-btn-pur-end hover:bg-gradient-to-br rounded-xl text-md py-3 font-medium text-center mb-2'>
                    Scan QR
                </Link>
            </div>
            <div className='flex flex-col gap-4'>
                <div className='flex justify-between items-center'>
                    <h1 className='text-black font-bold'>My QR codes</h1>
                    <h4 className=' text-blue-700 text-xs font-semibold'>view all</h4>
                </div>
                {vehicleInfo.slice(0, 3).map((vehicle, index) => (
                    <div className='flex bg-white px-4 py-4 rounded-xl gap-4 justify-start items-start shadow'>
                        <div className='w-20'>
                            <img src={require('./assets/images/qr-icon.png')} alt='' className={`w-full ${vehicle.status && ' blur-2'}`} />
                        </div>
                        <div className='flex justify-between w-full'>
                            <div className='flex flex-col gap-2'>
                                <div className='flex gap-4 items-center'>
                                    <h1 className='text-sm font-semibold'>{vehicle['car-name']}</h1>
                                    <div className='flex gap-2 items-center'>{
                                        vehicle.status ?
                                            <><span className=' bg-red-500 rounded-full w-2 h-2'></span><h1 className='text-red-500 text-xs font-medium'>In-active</h1></>
                                            : <><span className=' bg-green-500 rounded-full w-2 h-2'></span><h1 className='text-green-500 text-xs font-medium'>Active</h1></>
                                    }
                                    </div>
                                </div>
                                <div className='items-center'>
                                    <h1 className='text-orange-400 text-xs font-medium'>{vehicle.usage ? `used ${vehicle.usage} times till now` : 'not used yet'}</h1>
                                    <h1 className='text-gray-600 text-xs font-medium '>created on {vehicle.created}</h1>
                                </div>
                            </div>
                            <div className='h-5 cursor-pointer' onClick={handleDrawer}>
                                <img src={require('./assets/svg/3dots.svg').default} className='h-full' alt='' />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='flex flex-col gap-3 mt-2'>
                <div className='flex justify-between items-center'>
                    <h1 className='text-black font-bold'>Recent Alerts</h1>
                    <h4 className=' text-blue-700 text-xs font-semibold'>view all</h4>
                </div>
                {alerts.slice(0, 4).map((alrt, index) => (
                    <div className='flex bg-white px-4 py-4 rounded-xl gap-4 justify-start items-start shadow'>
                        <div className='w-12 bg-back-color p-2 rounded-lg'>
                            <img src={require('./assets/images/alert.png')} alt='' className='w-full' />
                        </div>
                        <div className='flex justify-between items-start w-full gap-2'>
                            <div className='flex flex-col justify-between h-full gap-1'>
                                <h1 className='text-red-500 text-sm font-semibold'>Alert for {alrt['vehicle-name']}</h1>
                                <p className={`${alrt['sent-by'] === 'verified user' ? 'text-green-500' : 'text-orange-400'} text-xs font-medium`}>by {alrt['sent-by']} <span className='text-gray-500 '> on {`${new Date(alrt.time).toLocaleString('default', { day: '2-digit' }).toString()} ${new Date(alrt.time).toLocaleString('default', { month: 'short' }).toString()}`} at 11:25 AM</span>
                                </p>
                            </div>
                            <div className='h-5 cursor-pointer' onClick={handleDrawer}>
                                <img src={require('./assets/svg/3dots.svg').default} className='h-full' alt='' />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}