import React from 'react'
import { Link } from 'react-router-dom';

import { MdOpenInNew } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { MdAddBusiness } from "react-icons/md";
import { IoFastFoodOutline } from "react-icons/io5";
import { TbReportSearch } from "react-icons/tb";
import { RiProfileLine } from "react-icons/ri";
import { BsBuildingAdd } from "react-icons/bs";
import { GrGallery } from "react-icons/gr";
import { MdOutlineTableBar } from "react-icons/md";

const Sidebar = () => {
return (
<div className='flex flex-col bg-slate-800 w-60 text-white px-3 py-3'>
    <div className='flex gap-5'>
        <Link to="/restaurant/dashboard" className='font-normal text-xl mb-5 flex'><img className='h-14 pb-1 drop-shadow-md  hover:scale-125' src="/get-rest2.svg" alt="" /><span className='mt-4'>GET REST</span></Link>
        <Link to='/' target="_blank" ><MdOpenInNew className='hover:scale-125' /></Link>
    </div>
    <div className='flex flex-col font-normal text-gray-50 text-center'>
        <Link to="/restaurant/dashboard" className='flex gap-2 p-2 hover:bg-green-400 hover:text-black hover:rounded-lg'><span><RxDashboard className='text-xl' /></span>Dashboard</Link>
        <Link to="/restaurant/reservation" className='flex gap-2 p-2 hover:bg-green-400 hover:text-black hover:rounded-lg'><span><MdAddBusiness className='text-xl' /></span>Reservation</Link>
        <Link to="/restaurant/profile" className='flex gap-2 p-2 hover:bg-green-400 hover:text-black hover:rounded-lg'><span><RiProfileLine className='text-xl' /></span>Profile</Link>
        <Link to="/restaurant/branch" className='flex gap-2 p-2 hover:bg-green-400 hover:text-black hover:rounded-lg'><span><BsBuildingAdd className='text-xl' /></span>Branch</Link>
        <Link to="/restaurant/gallery" className='flex gap-2 p-2 hover:bg-green-400 hover:text-black hover:rounded-lg'><span><GrGallery className='text-xl' /></span>Gallery</Link>
        <Link to="/restaurant/table" className='flex gap-2 p-2 hover:bg-green-400 hover:text-black hover:rounded-lg'><span><MdOutlineTableBar className='text-xl' /></span>Table</Link>
        <Link className='flex gap-2 p-2 hover:bg-green-400 hover:text-black hover:rounded-lg'><span><IoFastFoodOutline className='text-xl' /></span>Menus</Link>
        <Link className='flex gap-2 p-2 hover:bg-green-400 hover:text-black hover:rounded-lg'><span><TbReportSearch className='text-xl' /></span>Reports</Link>
        <Link className='flex gap-2 p-2 hover:bg-green-400 hover:text-black hover:rounded-lg text-sm'><span><TbReportSearch className='text-xl' /></span>Reponse Template</Link>

    </div>
    <div className=''></div>
</div>
)
}

export default Sidebar