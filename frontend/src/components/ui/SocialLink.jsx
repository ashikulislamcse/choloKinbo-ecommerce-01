import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


const LinkData = [
  {
    icon:<FaGithub/>, href:"https://github.com/ashikulislamcse"
  },
  {
    icon:<FaLinkedin/>, href:""
  },
  {
    icon:<FaYoutube/>, href:""
  },
  {
    icon:<FaFacebook/>, href:""
  },
  {
    icon:<FaTwitter/>, href:""
  },
]


const SocialLink = () => {
  return (
    <div className='text-xl pt-4 text-white/50 flex items-center gap-x-2'> 
      {LinkData?.map((item,index)=><a key={index} href={item?.href} target='blank' className='border border-white/20 inline-flex p-2 rounded-full hover:text-white hoverEffect hover:border-white duration-300 cursor-pointer'>{item?.icon}</a>)}
    </div>
  )
}

export default SocialLink
