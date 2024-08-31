import React from 'react';

const EmailRegistration = () => {
    return (
        <div>
            <div className='text-center text-3xl font-bold h-screen py-8'>
            <h1 className='text-4xl text-green-600 py-10 '>Email Registration</h1>
            <form className='items-center font-bold h-screen py-8' >
                <input type="email" className='w-[40%] p-2 px-2 py-1 outline-none my-1  border border-blue-600 rounded-lg' placeholder='Enter Your Email' />
                <p className='text-red-600 text-base my-1'>Email</p>
                <input type="password" className='w-[40%] p-2 px-2 py-1 outline-none my-1  border border-blue-600 rounded-lg' placeholder='Enter Your Password' />
                <p className='text-red-600 text-base my-1'>Password</p>
            </form>
            </div>
            
        </div>
    );
};

export default EmailRegistration;