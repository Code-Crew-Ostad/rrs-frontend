import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const RestMaster = () => {
    return (
<>

<div className='flex h-screen w-screen overflow-hidden'>
        <Sidebar />
        <div className='flex flex-col w-full'>
            <Header />
            <div className='flex-1 overflow-auto'>
                <Outlet />
            </div>
        </div>            
    </div>
</>

    
    )
}

export default RestMaster