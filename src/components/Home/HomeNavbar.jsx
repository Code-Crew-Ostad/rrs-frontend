import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoFastFoodSharp } from "react-icons/io5";
const HomeNavBar = () => {
  const [scrolling, setScrolling] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    // Add scroll event listener when component mounts
    window.addEventListener('scroll', handleScroll);

    // Remove scroll event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // const headerStyle = {
  //   backgroundColor: scrolling ? '#f4f4f4' : 'transparent',
  //   transition: 'all 1s ease-in-out',
  // };

  return (
    <div className={`bg-${scrolling? '[#f4f4f4] shadow-md':'[#d9efe2] bg-gradient-to-r from-[#d9efe2] from-10% via-[#b6f1ce] via-50% to-[#d9efe2] to-90%'} sticky top-0 z-50 transition-all duration-500 ease-out scroll-smooth`}>
      <nav className="flex justify-between rounded-sm  pt-2 pb-2 ps-24 pe-24 w-full">
        <div className="flex mt-1 w-1/2 text-black">
            <Link className="flex mr-10" to="/">
                <img
                className="h-12 pb-1 mr-1 drop-shadow-sm"
                src="/get-rest-sqr-black.svg"
                alt=""
                />
                <span className="font-bold text-xl mt-2">get rest</span>
            </Link>

            <ul className="flex gap-3 mt-3">
                <li><Link className='p-2 rounded hover:bg-[#809c92]' to="/about">Features</Link></li>
                <li><Link className='p-2 rounded  ' to="/about">About Us</Link></li>
                <li><Link className='p-2 rounded  ' to="/about">About Us</Link></li>
                <li><Link className='p-2 rounded  ' to="/contact">Contact Us</Link></li>
            </ul>
        </div>
        
        <div className="mt-2">
            <Link
                className="p-2 border-b border-transparent hover:border-b-[#25916a]"
                to="/login"
            >
                Login
            </Link>
            </div>
      </nav>
    </div>
  );
};

export default HomeNavBar;
