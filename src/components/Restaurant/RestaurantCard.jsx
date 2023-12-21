import React from 'react';
import { IoLocationOutline } from "react-icons/io5";
import { IoRestaurantOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";
import { Link } from 'react-router-dom';
const RestaurantCard = ({id, image, name, address, type, rating}) => {
    return (
        <div className='font-bold w-[300px] rounded-lg flex flex-col bg-white gap-2  drop-shadow-md'>
            <img className='rounded-t-lg cursor-pointer h-[200px] ' src={image} />
            <div className='rounded-lg flex flex-col p-3 gap-2'> 
                <p className='text-lg font-normal'>{name}</p>
                <p  className=' flex text-xs font-normal gap-2'><IoLocationOutline />{address}</p>
                <p className='flex text-xs font-normal gap-2'><IoRestaurantOutline />{type}</p>
                <p className='flex text-xs font-normal gap-2'><FaStar className='text-yellow-400'/>{rating}/5</p>
                <div className='py-2'>
                <Link to="/details" state={{restId:id}} className=' font-normal bg-[#25916a] hover:opacity-95 text-white border rounded-md h-10 mt-5 text-center p-2 text-sm' >Reserve Now</Link>
                </div>
                
                {/* <Link to="/details" className=' font-medium bg-green-400 hover:bg-green-600 text-white border drop-shadow-md rounded-lg h-10 mt-5 text-center pt-2' >Reserve Now</Link> */}
            </div>
            
        </div>
    );
};

export default RestaurantCard;