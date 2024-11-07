import React from 'react';
import { NavLink } from 'react-router-dom';
import { IoMdAdd } from "react-icons/io";
import { FaList } from "react-icons/fa";
import { FaBorderAll } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";




const Sidebar = () => {
  return (
    <div className='w-full h-full overflow-hidden'>
      <div className='flex flex-col gap-4 mt-2 pl-6'>
        <NavLink to="/add" className="flex items-center justify-center md:justify-normal gap-3 bg-black/15 hover:text-white hover:bg-black px-3 py-2 duration-300">
          <span className='inline-flex border border-gray-300 items-start justify-center rounded-full text-lg p-1'><IoMdAdd /></span>
          <p className='hidden md:inline-flex font-semibold'>Add Items</p>
        </NavLink>
        <NavLink to="/list" className="flex items-center justify-center md:justify-normal gap-3 bg-black/15 hover:text-white hover:bg-black px-3 py-2 duration-300">
          <span className='inline-flex border border-gray-300 items-start justify-center rounded-full text-lg p-1'><FaList /></span>
          <p className='hidden md:inline-flex font-semibold'>Product List</p>
        </NavLink>
        <NavLink to="/orders" className="flex items-center justify-center md:justify-normal gap-3 bg-black/15 hover:text-white hover:bg-black px-3 py-2 duration-300">
          <span className='inline-flex border border-gray-300 items-start justify-center rounded-full text-lg p-1'><FaBorderAll /></span>
          <p className='hidden md:inline-flex font-semibold'>Orders</p>
        </NavLink>
        <NavLink to="/users" className="flex items-center justify-center md:justify-normal gap-3 bg-black/15 hover:text-white hover:bg-black px-3 py-2 duration-300">
          <span className='inline-flex border border-gray-300 items-start justify-center rounded-full text-lg p-1'><FaUsers /></span>
          <p className='hidden md:inline-flex font-semibold'>All Users</p>
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar;
