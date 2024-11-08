import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { serverUrl } from '../../config';
import Loader from '../Component/ui/Loader';
import Title from '../Component/title';
import { IoMdAdd } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";


const Users = ({token}) => {
  const [userList, setuserList] = useState('');
  const [Loading, setLoading] = useState('');
  const [selectedUser, setselectedUser] = useState('');
  const getUserList = async()=>{
    try {
      setLoading(true);
      const response = await axios.get(serverUrl + "/api/user/users" ,{
        headers:{
          token,
          "current-type":"application/json"
        }
      })
      const data = response?.data;
      if(data?.success){
        setuserList(data?.users)
      }else{
        toast.error(data?.message)
      }
    } catch (error) {
      console.log("Get Users List Error",error);
      toast.error(error?.message);
    }finally{
      setLoading(false);
    }

  }

  useEffect(()=>{
    getUserList();
  },[])
  return (
    <div>
      <div>
        {Loading ? <Loader/>:
        <div>
          <div className='flex items-center justify-between max-w-3xl'>
            <Title>Users List Here</Title>
            <button className="flex items-center justify-center md:justify-normal gap-3 bg-black/35 hover:text-white hover:bg-black px-3 py-2 duration-300 rounded-md transition-colors mt-2">
            <span className='inline-flex border border-gray-300 items-start justify-center rounded-full text-lg p-1'><IoMdAdd /></span>
            <p className='hidden md:inline-flex font-semibold'>Add Users</p>
            </button>
          </div>
          {userList?.length > 0 ? (
            <div className='max-w-3xl flex flex-col gap-2 mt-2'>
              <div className='grid grid-cols-[2fr_1fr_1fr] md:grid-cols-[2fr_2fr_1fr_1fr] items-center py-1 px-2 bg-gray-300 text-sm my-2'>
                <b className='hidden md:inline-block'>Name</b>
                <b>Email</b>
                <b className='text-center'>Action</b>
                <b className='text-center'>Edit</b>
              </div>
              {userList?.map((item)=>(
                <div key={item?._id} className='grid grid-cols-[2fr_1fr_1fr] md:grid-cols-[2fr_2fr_1fr_1fr] items-center py-1 px-2 bg-gray-200 text-sm my-2'>
                  <p className='hidden md:inline-block font-semibold'>{item?.name}</p>
                  <p className='font-medium'>{item?.email}</p>
                  <IoCloseSharp className='text-xl cursor-pointer hover:text-red-600 duration-300 ease-in-out text-center w-full overflow-hidden'/>
                  <button className='text-base cursor-pointer hover:text-green-600 duration-300 ease-in-out'>Edit</button>
                </div>
              ))}
            </div>           
            ):(<div>
            <div>
              <p>You have No Users in Your Database</p>
              {/* <button className="flex items-center justify-center md:justify-normal gap-3 bg-black/15 hover:text-white hover:bg-black px-3 py-2 duration-300">
              <span className='inline-flex border border-gray-300 items-start justify-center rounded-full text-lg p-1'><IoMdAdd /></span>
              <p className='hidden md:inline-flex font-semibold'>Add Users</p>
            </button> */}
            </div>
          </div>)}
        </div>}
      </div>
    </div>
  )
}

export default Users
