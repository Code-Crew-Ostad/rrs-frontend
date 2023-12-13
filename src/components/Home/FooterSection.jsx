import React from 'react'

const FooterSection = () => {
return (
    <div className='flex flex-col items-center my-10'>
        <div className='flex justify-around w-full mb-10'>
        <div className='flex flex-col'>
                <div className='flex items-center gap-2'>
                    <img className='w-16' src="../../../public/get-rest-sqr.svg" alt="" />
                    <h1 className='text-[40px] font-bold text-[#474646]'>get rest</h1>
                </div>
                <p className='text-[16px] font-thin text-[#474646]'>A Restaurant Reservation System</p>
            </div>
            <div className='flex gap-16'>
                    <ul className='flex flex-col gap-5 text-[15px] font-medium text-[#494949]'>
                    <li className='font-medium text-2xl text-black'>Features</li>
                    <li>lorem ipsum</li>
                    <li>lorem ipsum</li>
                    <li>lorem ipsum</li>
                    <li>lorem ipsum</li>
                    <li>lorem ipsum</li>
                </ul>
                <ul className='flex flex-col gap-5 text-[15px] font-medium text-[#494949]'>
                    <li className='font-medium text-2xl text-black'>Company</li>
                    <li>lorem ipsum</li>
                    <li>lorem ipsum</li>
                    <li>lorem ipsum</li>
                    <li>lorem ipsum</li>
                    <li>lorem ipsum</li>
                </ul>
                <ul className='flex flex-col gap-5 text-[15px] font-medium text-[#494949]'>
                    <li className='font-medium text-2xl text-black'>Resources</li>
                    <li>lorem ipsum</li>
                    <li>lorem ipsum</li>
                    <li>lorem ipsum</li>
                    <li>lorem ipsum</li>
                    <li>lorem ipsum</li>
                </ul>
            
            
            </div>
        </div>
        <hr className='w-10/12 border-1 border-[#c6c2c2] mb-10'/>
        <p className='text-[#8b8b8b]'>© Get Rest. All rights reserved.</p>
    </div>
)
}

export default FooterSection