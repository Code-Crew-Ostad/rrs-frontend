import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

const Dashboard = () => {
    useEffect(() => {
        document.title = "Control Panel | Restaurant | Get Rest";
      }, []);
    return (

        <div className='m-5 h-screen'>
            <div className='flex flex-col p-10 bg-green-200 w-full rounded-xl shadow-md mb-5' >
            <p className='text-3xl font-light mb-5'>1938 Indochine</p>
                <div className=' flex flex-wrap justify-between'>
                    <div className='font-bold w-[300px] rounded-lg flex flex-col bg-green-500 gap-2 text-white drop-shadow-md shadow-xl mr-5 mb-5'>
                        <div className='rounded-lg flex flex-col p-3 gap-2 '> 
                            <p className='text-lg font-normal '>Total Reservation (Today)</p>
                            <p  className=' flex flex-col text-2xl font-normal gap-2 items-center'><span className='p-5 rounded-full'>20</span></p>
                        </div>
                    </div>
                    <div className='font-bold w-[300px] rounded-lg flex flex-col bg-red-500 gap-2 text-white drop-shadow-md shadow-xl mr-5 mb-5'>
                        <div className='rounded-lg flex flex-col p-3 gap-2'> 
                            <p className='text-lg font-normal'>Total Rejected (Today)</p>
                            <p  className=' flex flex-col text-2xl font-normal gap-2 items-center'><span className='p-5 rounded-full'>01</span></p>
                            
                        </div>
                    </div>
                    <div className='font-bold w-[300px] rounded-lg flex flex-col bg-yellow-500 text-white drop-shadow-md gap-2  shadow-xl mr-5 mb-5'>
                        <div className='rounded-lg flex flex-col p-3 gap-2'> 
                            <p className='text-lg font-normal'>Total Pending (Today)</p>
                            <p  className=' flex flex-col text-2xl font-normal gap-2 items-center'><span className='p-5 rounded-full'>15</span></p>
                        </div>
                    </div>
                </div>        
            </div>
            <div className='flex flex-col p-10 bg-green-200 w-full rounded-xl shadow-md' >
            <p className='text-3xl font-light mb-5'>1938 Indochine - Branch 01</p>
                <div className=' flex flex-wrap justify-between'>
                    <div className='font-bold w-[300px] rounded-lg flex flex-col bg-green-500 gap-2 text-white drop-shadow-md shadow-xl mr-5 mb-5'>
                        <div className='rounded-lg flex flex-col p-3 gap-2 '> 
                            <p className='text-lg font-normal '>Total Reservation (Today)</p>
                            <p  className=' flex flex-col text-2xl font-normal gap-2 items-center'><span className='p-5 rounded-full'>10</span></p>
                        </div>
                    </div>
                    <div className='font-bold w-[300px] rounded-lg flex flex-col bg-red-500 gap-2 text-white drop-shadow-md shadow-xl mr-5 mb-5'>
                        <div className='rounded-lg flex flex-col p-3 gap-2'> 
                            <p className='text-lg font-normal'>Total Rejected (Today)</p>
                            <p  className=' flex flex-col text-2xl font-normal gap-2 items-center'><span className='p-5 rounded-full'>05</span></p>
                            
                        </div>
                    </div>
                    <div className='font-bold w-[300px] rounded-lg flex flex-col bg-yellow-500 text-white drop-shadow-md gap-2  shadow-xl mr-5 mb-5'>
                        <div className='rounded-lg flex flex-col p-3 gap-2'> 
                            <p className='text-lg font-normal'>Total Pending (Today)</p>
                            <p  className=' flex flex-col text-2xl font-normal gap-2 items-center'><span className='p-5 rounded-full'>08</span></p>
                        </div>
                    </div>
                </div>        
            </div>
            
        </div>
    

    )
}

export default Dashboard