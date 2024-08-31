import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Login = () => {
    const [email, setEmail] = useState(' ');
    const [password, setPassword] = useState(' ');

    const [emailError, setEmailError] = useState(' ');
    const [passwordError, setPasswordError] = useState(' ');

    var regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;


    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }
    const handleRegistration = (e) => {
        e.preventDefault();
       if(!email.match(regex)){
            setEmailError('Please Enter Valid Email');
        }
        if(email==" "){
            setEmailError('Please Enter Email');
        }
        if(password==" "){
            setPasswordError('Please Enter Password');
        }
      else{
        console.log("registration done")
      }
        
       
    }






    return (
        <div>
            <div className='container mx-auto flex justify-between items-center h-screen'>
                <div className='w-[40%] '>
                    <form onSubmit={handleRegistration} >
                        <input onChange={handleEmail} type="email"  placeholder='Enter Your Email' className='w-full p-2 px-2 py-1 outline-none my-1  border border-blue-600 rounded-lg'/>
                        <p className='text-red-600 text-base my-1'>{emailError}</p>
                        <input onChange={handlePassword} type="password"  placeholder='Enter Your Password' className='w-full p-2 px-2 py-1 outline-none my-1  border border-blue-600 rounded-lg'/>
                        <p className='text-red-600 text-base my-1'>{passwordError}</p>
                        <button className='w-full p-2 px-2 py-2 transform active:scale-[1.09] transition-[.4s]  outline-none my-1 text-3xl border border-purple-600 rounded-lg bg-purple-600 font-bold text-gray-50'> Account</button>
                    </form>
                    <p className='text-center text-purple-800 text-3xl font-bold my-2 '>I have  an account? <Link to='/GoogleSign' className='text-blue-600 ' > Google Sign In</Link> </p>
                </div>



                <div className='w-[50%]'>
                    <h1 className='text-4xl text-purple-600 text-center font-bold'>Account</h1>
                </div>
            </div>
        </div>
    );
};

export default Login;