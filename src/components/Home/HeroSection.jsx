import React from 'react'
import img from '/images/girl-date-select.svg'
import { Link } from 'react-router-dom'
import { GoArrowDown } from "react-icons/go";

const HeroSection = () => {
  return (
    <div className='mb-20 h-screen  bg-[#d9efe2] bg-gradient-to-r from-[#d9efe2] from-10% via-[#b6f1ce] via-50% to-[#d9efe2] to-90%'>
        <div className='flex flex-col'>
          <div className='flex items-center justify-center h-auto w-full mb-20'>
              <div className=''>
                    <h1 className=' font-bold text-6xl text-[#327873] drop-shadow-xl'>GET REST</h1>
                  {/* <p className='text-2xl text-[#02D2C5] drop-shadow-2xl'>Your Reservation system</p> */}
                  <p className='font-thin text-3xl text-[#327873] drop-shadow-2xl mb-10'>A Restaurant Reservation system</p>
                  {/* <div className='flex mb-20 gap-2'>
                    <Link className='font-thin text-sm text-[#000] drop-shadow-2xl rounded-lg'>Reserve your seat now!</Link>
                    <p className='font-thin text-sm text-[#000] drop-shadow-2xl'></p>
                    <Link className='font-thin text-sm text-[#000] drop-shadow-2xl  rounded-lg px-4'>Your Reservation system</Link>
                  </div> */}

                <Link to="/register" className='bg-[#327873] py-4 px-10 rounded-lg text-xl text-white mr-5 shadow-md hover:opacity-90'>Get Started</Link>
                <Link to="/feed" className='bg-[#327873] py-4 px-14 rounded-lg text-xl text-white shadow-md hover:opacity-90'>Explore</Link>
              </div>
              <div className='w-4/12'>
                    <img src={img} alt="" className='w-[100%]' />
              </div>
          </div>
          <div className='flex justify-center'>
            <GoArrowDown className='text-4xl text-[#327873] animate-bounce border-2 rounded-full border-[#6bac85] cursor-pointer'/>
          </div>
        </div>
    </div>
  )
}

export default HeroSection