import React from 'react'
import {logo} from "../assets/images/index.js"
import Container from './container.jsx'
import Search from './search.jsx'
import { IoMdMenu } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { HeaderNavigation } from '../constant/index.js';
import { Link, NavLink } from 'react-router-dom';
const Header = () => {
  return (
    <div className='border-b-[2px] border-slate-300 sticky top-0 z-50 bg-white'>
      <Container className={'py-7 flex items-center gap-x-3 md:gap-x-7 justify-between'}>
        <Link to={"/"}><img src={logo} alt="" className='w-25' /></Link>
        <Search/>
        <div className="hidden md:inline-flex items-center gap-5 lg:gap-7 text-sm uppercase font-medium text-lightText">
          {
            HeaderNavigation?.map((item)=>{
              return <NavLink key={item?.title} to={item?.link} className='hover:text-primary hoverEffect cursor-pointer relative group overflow-hidden'>
                {item.title}
                <span className='absolute bottom-0 left-0 inline-block w-full h-px bg-primary -translate-x-[110%] group-hover:translate-x-0 hoverEffect'></span>
                </NavLink>
            })
          }
          <NavLink to={"/cart"} className='text-2xl hover:text-primary hoverEffect relative group'>
            <FaShoppingCart/>
            <span className='absolute -right-3 -top-2 w-3.5 h-3.5 rounded-full text-[9px] text-white flex items-center justify-center bg-lightText group-hover:bg-primary hoverEffect'>0</span>
          </NavLink>
          <NavLink to={"/signup"} className='text-2xl hover:text-primary hoverEffect'>
            <FaUserAlt/>
          </NavLink>       
        </div>
        <button className='text-3xl text-lightText hover:text-primary md:hidden  hoverEffect'>
          <IoMdMenu/>
        </button>
      </Container>
    </div>
  )
}

export default Header
