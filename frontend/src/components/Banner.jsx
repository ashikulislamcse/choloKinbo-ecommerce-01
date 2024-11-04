import React, { useState } from 'react'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { BannerData } from '../constant';
import Container from './container';
import { useNavigate } from 'react-router-dom';
const Banner = () => {
    const Navigate = useNavigate();
    const [dotActive,setDotActive] = useState(0);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        beforeChange:(prev,next)=>{
            setDotActive(next);
        },
        appendDots:(dots)=>(
            <div
            style ={{
                position:"absolute",
                bottom:30,
                left:"50%",
                trasform: "translateX(-50%",
            }}
            >
            <ul
            style = {{
                margin: "0px",
                display:"flex",
                alignItems:"center",
                gap:"10px",
            }}               
            >
            {" "}
            {dots}{" "}
            </ul>
        </div>
        ),
        customPaging:(i)=>(
            <div style={i===dotActive ?{
                width:"50px",
                height:"15px",
                backgroundColor:"#262626",
                cursor:"pointer",
                borderRadius:"20px",
            } : 
            {
                width:"15px",
                height:"15px",
                backgroundColor:"#ffffff",
                cursor:"pointer",
                borderRadius:"50%px",
            }
            }
        />
        ),
        responsive:[
            {
                breakpoint: 576,
                settings: {
                    dots: true,

                    appendDots:(dots)=>(
                        <div
                        style ={{
                            position:"absolute",
                            bottom:30,
                            left:"50%",
                            trasform: "translateX(-50%",
                        }}
                        >
                        <ul
                        style = {{
                            margin: "0px",
                            display:"flex",
                            alignItems:"center",
                            gap:"10px",
                        }}               
                        >
                        {" "}
                        {dots}{" "}
                        </ul>
                    </div>
                    ),
                    customPaging:(i)=>(
                        <div style={i===dotActive ?{
                            width:"40px",
                            height:"10px",
                            backgroundColor:"#262626",
                            cursor:"pointer",
                            borderRadius:"20px",
                        } : 
                        {
                            width:"10px",
                            height:"10px",
                            backgroundColor:"#ffffff",
                            cursor:"pointer",
                            borderRadius:"50%px",
                        }
                        }
                    />
                    ),
                }
            }
        ]
      };
  return (
    <div className='w-full max-h-[600px]'>
        <Slider {...settings}>
            {BannerData?.map((item,index)=>{
                return <div key={index} className='relative'>
                    <img src={item?.image} alt="banner image" className='h-full lg:h-[480px] w-full object-cover' />

                    <div className='absolute top-0 left-0 w-full h-full bg-black/20'>
                        <Container className='flex flex-col justify-center gap-2 md:gap-3 h-full'>
                            <p className='w-24 py-1 bg-red-600 text-white text-xs uppercase text-center font-medium -tracking-wide rounded-md'>{item?.sale}</p>
                            <h2 className='text-xl md:text-5xl max-w-sm md:max-w-xl font-bold md:leading-[55px] capitalize'>{item?.title}</h2>
                            <p className='text-xs md:text-base uppercase font-medium'>{item?.discount}</p>
                            <p className='font-medium text-sm md:text-base'>From <span className='md:text-xl font-bold text-blue-700 md:ml-2'>${item?.from}</span></p>
                            <button onClick={()=>Navigate("/Shope")} className='w-24 md:w-44 py-2 md:py-0 md:h-12 bg-black/80 text-white rounded-md text-xs md:text-sm uppercase hover:bg-black hoverEffect font-semibold'>Shop Now</button>
                        </Container>
                    </div>
                </div>
            })}
        </Slider>
    </div>
  )
}

export default Banner