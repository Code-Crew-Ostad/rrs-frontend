import React from 'react'
import { BsGearFill } from "react-icons/bs";
import { SiGnuprivacyguard } from "react-icons/si";
import { MdOutlineFoodBank } from "react-icons/md";
import { Link } from 'react-router-dom';

const GetStarted = () => {
  return (
    <div className='flex bg-[#d9efe2] justify-center my-20 py-10'>
        <div className=''>
            <h1 className='text-[40px] font-bold mb-5 text-[#3d3c3c]'>Get Started in less than 5 minutes</h1>
            <div className='flex gap-2 mb-5 text-[20px]'>
                <div className='bg-[#50b9ae] rounded-lg p-2 relative text-sm'>
                    <SiGnuprivacyguard className='text-white' />
                </div>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div className='flex gap-2 mb-5 text-[20px]'>
                <div className='bg-[#50b9ae] rounded-lg p-2 relative text-sm'>
                    <BsGearFill className='text-white' />
                </div>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div className='flex gap-2 text-[20px] mb-16'>
                <div className='bg-[#50b9ae] rounded-lg p-2 relative text-sm'>
                    <MdOutlineFoodBank className='text-white' />
                </div>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <Link to="/register" className='bg-[#327873] py-4 px-10 rounded-lg text-xl text-white mr-5 shadow-md hover:bg-[#46a39d]'>Get Started</Link>
        </div>
        <div className=''>
            <img className='w-96' src="../../../public/images/boy-screen.svg" alt="" />
        </div>
    </div>
  )
}

export default GetStarted