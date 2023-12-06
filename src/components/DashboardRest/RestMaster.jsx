import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import { useEffect } from 'react'

const RestMaster = () => {
    useEffect(() => {
        document.title = "Control Panel | Restaurant | Get Rest";
      }, []);
    return (
    <div className='flex h-screen w-screen overflow-hidden'>
        <Sidebar />
        <div className='flex flex-col w-full'>
            <Header />
            <div className='flex-1 overflow-auto'>
                <Outlet />
                <div className='flex flex-col pl-5'>
                    <Footer/>
                </div>
            </div> 
        </div>
    </div>
    )
}

export default RestMaster