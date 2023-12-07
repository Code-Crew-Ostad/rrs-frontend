import React from 'react'
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

const Reviews = ({user, date, rating, review}) => {

  return (
    <>
     <h2 className='text-base font-semibold'>{user}</h2>
     <p className='text-sm font-normal mb-2'>{date}</p>
     {/* <p>{rating}</p> */}
     {/* <FaStar className='text-yellow-400'/>
     <FaRegStar className='text-yellow-500' /> */}
     <p className='mb-5 border-b-2 pb-2 font-light'>{review}</p>
    </>
  )
}

export default Reviews