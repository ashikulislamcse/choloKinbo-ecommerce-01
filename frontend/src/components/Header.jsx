import React from 'react'
import {logo} from "../assets/images/index.js"
import Container from './container.jsx'
import Search from './search.jsx'
const Header = () => {
  return (
    <div className='border-b-[2px] border-slate-300'>
      <Container className={'py-7 flex items-center gap-x-3 md:gap-x-7 justify-between'}>
        <img src={logo} alt="" className='w-25' />
        <Search/>
        <div className="hidden md:inline-flex items-center gap-5 lg:gap-7 text-sm uppercase font-medium text-lightText">
          <p>navlinks</p>
          <p>user</p>
          <p>card</p>         
        </div>
      </Container>
    </div>
  )
}

export default Header
