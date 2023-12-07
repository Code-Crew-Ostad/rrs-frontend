import React from 'react';
import {Link} from "react-router-dom";
import { IoFastFoodSharp } from "react-icons/io5";
const MenuBar = () => {
    return (
        <nav className='flex justify-between rounded-sm shadow-sm shadow-green-300 pt-5 pb-5 ps-24 pe-24'>
          <div className='flex'>
            <h4 className='text-2xl font-bold mr-10 drop-shadow-sm'><Link className='flex gap-2' to="/"><img className='h-14 pb-1 drop-shadow-sm' src="/get-rest2.svg" alt="" /> <span className='mt-2'>GET REST</span></Link></h4>
            <ul className='flex gap-6 mt-3'>
              <li><Link className='p-2 rounded hover:text-white hover:bg-green-400' to="/about">About Us</Link></li>
              <li><Link className='p-2 rounded hover:text-white hover:bg-green-400' to="/contact">Contact Us</Link></li>
            </ul>
          </div>
          <div className='flex gap-8 me-2'>
              <input
              type="search"
              name="search"
              id=""
              placeholder= "Search here"
              autoComplete="off"
              className="p-3 border border-green-400 text-sm rounded-lg outline-none w-full lg:w-[25vw] h-10 placeholder:"
            />
            <div className='mt-2'>
            <Link className='p-2 rounded hover:text-white hover:bg-green-400' to="/login">Login</Link>
            <Link className='p-2 rounded hover:text-white hover:bg-green-400' to="/register">Register</Link>
            </div>
          </div>
      </nav>
      
    );
};

export default MenuBar;