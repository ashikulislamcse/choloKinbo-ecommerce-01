import React from 'react'
import { Link } from 'react-router-dom'; 
import Container from '../Container'
import logo from '../assets/images/KinBo.png'

const Navbar = ({ token, setToken }) => {
  const handleToken = ()=>{
    setToken(" ")
  }
  return (
    <div>
      <header className='border-b border-b-gray-600 w-full sticky top-0 left-0 z-50 bg-white'>
        <Container className='py-6 flex items-center justify-between'>
          <div className='pl-20'>
           <Link to={'/'}>
            <img src={logo} alt="Logo" className='w-24' />
            <p className='text-sm uppercase font-bold mt-1 tracking-wide text-blue-600'>Admin Panel</p>
           </Link>
          </div>
          {token ? (
            <button onClick={handleToken} className='bg-black/80 text-white py-2 px-6 hover:bg-black duration-300 rounded-full'>Logout</button>
          ) : (
            <button className='bg-black/80 text-white py-2 px-6 hover:bg-black duration-300 rounded-full'>Login</button>
          )}
        </Container>
      </header>
    </div>
  )
}

export default Navbar
