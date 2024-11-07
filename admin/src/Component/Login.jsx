import React, { useState } from 'react';
import logo from '../assets/images/KinBo.png';
import Title from './title';
import axios from 'axios'
import { serverUrl } from '../../config';
import toast from 'react-hot-toast';

const Login = ({setToken}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin =async(e)=>{
    e.preventDefault();
    try {
      const response =await axios.post(serverUrl + '/api/user/admin', 
        { email, 
          password,
        });
        const data = response?.data;
        if(data?.success){
          setToken(data?.token)
          toast.success(data?.message)
        }else{
          toast.error(data?.message)
        }

    } catch (error) {
        console.log("Login Error",error);
        toast.error(error?.message);
    }
  }
  return (
    <div className='flex flex-col gap-2 bg-gray-300 min-h-screen items-center justify-center'>
      <div className='bg-white p-2 rounded-md'>
        <img src={logo} alt='Logo' />
      </div>
      <div className='bg-white p-5 min-w-96 shadow-xl rounded-md'>
        <Title className={'text-xl font-bold'}>Admin Panel</Title>
        <form onSubmit={handleLogin} className='flex flex-col gap-4 mt-4'>
          <div>
            <p className='text-sm font-semibold'>Email Address</p>
            <input
              type='email'
              placeholder='Enter your email...'
              className='border w-full py-1 px-4 mt-1 rounded-md'
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <p className='text-sm font-semibold'>Password</p>
            <input
              type='password'
              placeholder='Enter your password...'
              className='border w-full py-1 px-4 mt-1 rounded-md'
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type='submit'
            className='bg-black/80 text-white rounded-md py-2 hover:bg-black duration-300 transition-colors font-semibold'
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
