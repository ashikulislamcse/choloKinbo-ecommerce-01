import React from 'react'
import Container from './container.jsx'
import Title from '../components/Title'
import SocialLink from './ui/SocialLink.jsx'
import {Link} from 'react-router-dom'
import {paymentCard} from '../assets/images/index.js'


const Shoparry = [
  {
    title:"Accesories", link:"/accesories"
  },
  {
    title:"Clothes", link:"/clothes"
  },
  {
    title:"Electronics", link:"/electronics"
  },
  {
    title:"Home appliances", link:"/homeappliances"
  },
  {
    title:"New Arrivals", link:"/newarrivals"
  }, 
];

const Account = [
  {
    title:"Profile", link:"/profile"
  },
  {
    title:"Orders", link:"/orders"
  },
  {
    title:"Addresses", link:"/addresses"
  },
  {
    title:"Account Details", link:"/profile"
  },
  {
    title:"Payment Options", link:"/profile"
  },
]

const Footer = () => {
  return (
    <div className='w-full bg-[#1b1b1b] py-20 pl-10 text-white/80'>
        <Container className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10'>
            <div className='col-span-2'>
                <div className='flex flex-col gap-6'>
                <Title className='text-xl'>More about Cholokinbo</Title>
                <p className='text-base w-full lg:w-[80%]'>Cholokinbo is a dynamic eCommerce shop offering a wide range of products. From fashion to gadgets, it delivers quality and convenience straight to your door.</p>
                </div>
                <SocialLink/>
            </div>
            <div>
              <Title className="text-xl mb-6">Shop</Title>
              <div className='flex flex-col gap-2'>
                {Shoparry?.map((item)=>(
                  <Link key={item?.title} to={item?.link} className='text-base text-lightText hover:text-white hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300 hoverEffect'>
                    {item?.title}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <Title className="text-xl mb-6">Your Account</Title>
              <div className='flex flex-col gap-2'>
                {Account?.map((item)=>(
                  <Link key={item?.title} to={item?.link} className='text-base text-lightText hover:text-white hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300 hoverEffect'>
                    {item?.title}
                  </Link>
                ))}
              </div>
            </div>
            <div className='col-span-2 flex flex-col items-center w-full '>
                <Title className='text-xl mb-6'>Subscribe to our newsletter.</Title>
                <p className='text-lightText text-center'>"Stay updated! Subscribe now for the latest news and insights!"</p>
                <div className='my-3'>
                  <div className='flex items-center gap-2'>
                  <input type="text" placeholder='Enter your Email..*' className='w-full h-12 border-b border-gray-400 bg-transparent px-4 text-lg placeholder:text-base outline-none text-white' />
                  <button className='px-6 py-2 bg-primary/70 border border-transparent hover:border-gray-600 duration-300 rounded-md'>Subscribe</button>
                  </div>
                </div>
                <img src={paymentCard} alt="" />
            </div>
        </Container>
    </div>
  )
}

export default Footer
