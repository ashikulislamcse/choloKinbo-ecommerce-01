import React, { useState } from 'react'
import {logo} from "../assets/images/index.js"
import Container from './container.jsx'
import Search from './search.jsx'
import { IoMdMenu } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { HeaderNavigation } from '../constant/index.js';
import { Link, NavLink } from 'react-router-dom';
import { Dialog, DialogPanel } from '@headlessui/react'
import Title from './Title'
import { IoClose } from "react-icons/io5";
import SocialLink from './ui/SocialLink.jsx'


const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  
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
        <button onClick={()=>setIsOpen(true)} className='text-3xl text-lightText hover:text-primary md:hidden  hoverEffect'>
          <IoMdMenu/>
        </button>
        {/* Dialog button */}
        <Dialog open={isOpen} className="relative z-50 md:hidden text-white/80" onClose={()=>setIsOpen(false)}>
        <div className="fixed inset-0 z-50 w-screen items-center justify-center p-4 bg-black/90">
            <DialogPanel
              transition
              className="w-[94%] space-y-4 bg-primary p-4 border border-lightText rounded-md absolute top-10"
            >
              <div className='flex items-center justify-between gap-5'>
                <Title className='text-xl text-white'>CholoKinbo</Title>
                <button onClick={()=>setIsOpen(false)} className='text-white/40 text-2xl hover:text-red-600 duration-300 border border-white/20 rounded-sm hover:border-white/40'>
                  <IoClose/>
                </button>
              </div>
              <div className='flex flex-col gap-5 pt-5'>
                {HeaderNavigation?.map((item)=>(
                  <NavLink onClick={()=>setIsOpen(false)} key={item?.title} to = {item?.link} className='hover:text-white duration-300 relative group flex items-center gap-2'>
                    <span className='w-2.5 h-2.5 rounded-full border border-white/80 inline-flex group-hover:text-white duration-300'/>
                    {item?.title}
                    <span className='absolute w-full h-[1px] bg-white/20 left-0 -bottom-1 group-hover:bg-white duration-300'/>
                  </NavLink>
                ))}
                <NavLink onClick={()=>setIsOpen(false)} to='/signin' className='hover:text-white duration-300 relative group flex items-center gap-2'>
                  <span className='w-2.5 h-2.5 rounded-full border border-white/80 inline-flex group-hover:text-white duration-300'/>
                    {' '}
                    Signin
                    <span className='absolute w-full h-[1px] bg-white/20 left-0 -bottom-1 group-hover:bg-white duration-300'/>
                </NavLink>
              </div>
              <div className='pt-2'>
                <SocialLink/>
              </div>
            </DialogPanel>
        </div>
      </Dialog>
      </Container>
    </div>
  )
}

export default Header
