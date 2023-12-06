import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
    return (
    <div className=' flex flex-wrap p-10'>
        <div className='font-bold w-[500px] rounded-lg flex flex-col bg-white gap-2  drop-shadow-2xl mr-5 mb-5'>
            <div className='rounded-lg flex flex-col p-3 gap-2'> 
                <p className='text-lg font-semibold'>Main</p>
                <p  className=' flex text-xs font-normal gap-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, exercitationem.</p>
                <p className='flex text-xs font-normal gap-2'>Lorem ipsum dolor sit amet.</p>
                <p className='flex text-xs font-normal gap-2'>Lorem ipsum dolor sit amet.</p>
            </div>
        </div>
        <div className='font-bold w-[500px] rounded-lg flex flex-col bg-white gap-2  drop-shadow-2xl mr-5 mb-5'>
            <div className='rounded-lg flex flex-col p-3 gap-2'> 
                <p className='text-lg font-semibold'>Dhaka</p>
                <p  className=' flex text-xs font-normal gap-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, exercitationem.</p>
                <p className='flex text-xs font-normal gap-2'>Lorem ipsum dolor sit amet.</p>
                <p className='flex text-xs font-normal gap-2'>Lorem ipsum dolor sit amet.</p>                
            </div>
        </div>
        <div className='font-bold w-[300px] rounded-lg flex flex-col bg-white gap-2  drop-shadow-2xl mr-5 mb-5'>
            <div className='rounded-lg flex flex-col p-3 gap-2'> 
                <p className='text-lg font-semibold'>Sylhet</p>
                <p  className=' flex text-xs font-normal gap-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, exercitationem.</p>
                <p className='flex text-xs font-normal gap-2'>Lorem ipsum dolor sit amet.</p>
                <p className='flex text-xs font-normal gap-2'>Lorem ipsum dolor sit amet.</p>
            </div>
        </div>
    </div>
    )
}

export default Dashboard