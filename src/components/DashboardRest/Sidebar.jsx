import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { MdOpenInNew } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { MdAddBusiness } from "react-icons/md";
import { IoFastFoodOutline } from "react-icons/io5";
import { TbReportSearch } from "react-icons/tb";
import { RiProfileLine } from "react-icons/ri";
import { BsBuildingAdd } from "react-icons/bs";
import { GrGallery } from "react-icons/gr";
import { MdOutlineTableBar } from "react-icons/md";
import { FaBars } from "react-icons/fa6";
import { IoTimeOutline } from "react-icons/io5";
import { SiMinutemailer } from "react-icons/si";

const Sidebar = () => {
    const[isOpen ,setIsOpen] = useState(true);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/restaurant/dashboard",
            name:"Dashboard",
            icon:<RxDashboard/>
        },
        {
            path:"/restaurant/reservation",
            name:"Reservation",
            icon:<MdAddBusiness/>
        },
        {
            path:"/restaurant/profile",
            name:"Profile",
            icon:<RiProfileLine/>
        },
        {
            path:"/restaurant/branch",
            name:"Branch",
            icon:<BsBuildingAdd/>
        },
        {
            path:"/restaurant/gallery",
            name:"Gallery",
            icon:<GrGallery/>
        },
        {
            path:"/restaurant/table",
            name:"Table",
            icon:<MdOutlineTableBar/>
        },
        {
            path:"/restaurant/timing",
            name:"Timings",
            icon:<IoTimeOutline />
        },
        {
            path:"/restaurant/menu",
            name:"Menus",
            icon:<IoFastFoodOutline/>
        },
        {
            path:"/restaurant/report",
            name:"Reports",
            icon:<TbReportSearch/>
        },
        {
            path:"/restaurant/mailtemplate",
            name:"Mail Template",
            icon:<SiMinutemailer />
        }



    ]

return (
    // <div className='flex flex-col bg-slate-800 w-60 text-white px-3 py-3'>
    //     <div className='flex gap-5'>
    //         <Link to="/restaurant/dashboard" className='font-normal text-xl mb-5 flex'><img className='h-14 pb-1 drop-shadow-md  hover:scale-125' src="/get-rest2.svg" alt="" /><span className='mt-4'>GET REST</span></Link>
    //         <Link to='/' target="_blank" ><MdOpenInNew className='hover:scale-125' /></Link>
    //     </div>
    //     <div className='flex flex-col font-normal text-gray-50 text-center'>
    //         <Link to="/restaurant/dashboard" className='flex gap-2 p-2 hover:bg-green-400 hover:text-black hover:rounded-lg'><span><RxDashboard className='text-xl' /></span>Dashboard</Link>
    //         <Link to="/restaurant/reservation" className='flex gap-2 p-2 hover:bg-green-400 hover:text-black hover:rounded-lg'><span><MdAddBusiness className='text-xl' /></span>Reservation</Link>
    //         <Link to="/restaurant/profile" className='flex gap-2 p-2 hover:bg-green-400 hover:text-black hover:rounded-lg'><span><RiProfileLine className='text-xl' /></span>Profile</Link>
    //         <Link to="/restaurant/branch" className='flex gap-2 p-2 hover:bg-green-400 hover:text-black hover:rounded-lg'><span><BsBuildingAdd className='text-xl' /></span>Branch</Link>
    //         <Link to="/restaurant/gallery" className='flex gap-2 p-2 hover:bg-green-400 hover:text-black hover:rounded-lg'><span><GrGallery className='text-xl' /></span>Gallery</Link>
    //         <Link to="/restaurant/table" className='flex gap-2 p-2 hover:bg-green-400 hover:text-black hover:rounded-lg'><span><MdOutlineTableBar className='text-xl' /></span>Table</Link>
    //         <Link className='flex gap-2 p-2 hover:bg-green-400 hover:text-black hover:rounded-lg'><span><IoFastFoodOutline className='text-xl' /></span>Menus</Link>
    //         <Link className='flex gap-2 p-2 hover:bg-green-400 hover:text-black hover:rounded-lg'><span><TbReportSearch className='text-xl' /></span>Reports</Link>
    //         <Link className='flex gap-2 p-2 hover:bg-green-400 hover:text-black hover:rounded-lg text-sm'><span><TbReportSearch className='text-xl' /></span>Reponse Template</Link>

    //     </div>
    //     <div className=''></div>
    // </div>

        <div style={{width: isOpen ? "240px" : "60px"}} className='flex flex-col bg-slate-800 w-60 text-white p-2'>
                <div className="flex">
                    <div style={{display: isOpen ? "block" : "none"}} className='w-full'>
                        <div className='flex'>
                            <Link to="/" target='_blank' className='font-normal text-xl flex'><img className='h-10 pb-1 drop-shadow-md mt-2' src="/get-rest2.svg" alt="" /><span className='mt-4'>GET REST</span></Link>
                            {/* <Link to='/' target="_blank" ><MdOpenInNew className='hover:scale-125' /></Link> */}
                        </div>
                        <div className='flex justify-center'>
                        <h1 className='mb-5 px-1 text-center text-xs text-black font-medium bg-yellow-300 rounded-lg'>For Restaurant</h1>
                        </div>
                    </div>
                    <div style={{marginLeft: isOpen ? "0px" : "5px"}} className=' hover:bg-green-400 hover:text-black hover:rounded-lg h-8 p-2' >
                        <FaBars onClick={toggle} />
                    </div>
                </div>
                {
                    menuItem.map((item, index)=>(
                        <NavLink to={item.path} key={index} className={({ isActive }) =>
                        isActive ? 'flex gap-2 p-2 bg-green-400 text-black rounded-lg m-1'  : 'flex gap-2 p-2 hover:bg-green-400 hover:text-black hover:rounded-lg m-1' 
                }>
                            <div className="text-xl pt-0.5">{item.icon}</div>
                            <div style={{display: isOpen ? "block" : "none"}} className="text-base font-light">{item.name}</div>
                        </NavLink>
                    ))
                }


            </div>

)
}

export default Sidebar