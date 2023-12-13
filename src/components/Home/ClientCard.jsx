import React from 'react'

const ClientCard = ({description, name, company}) => {
  return (
    <div className='font-bold w-[300px] rounded-lg flex flex-col bg-[#dee6e1] p-4 m-4 opacity-80 border border-gray-300 shadow-sm'>
            <img className='rounded-t-lg cursor-pointer' src="" />
            <div className='rounded-lg flex flex-col p-3'> 
                <p className='text-[16px] font-normal mb-5'>{description}</p>
                <p  className=' flex text-xs font-normal'>{name}</p>
                <p className='flex text-xs font-normal'>{company}</p>
                {/* <Link to="/details" className=' font-medium bg-green-400 hover:bg-green-600 text-white border drop-shadow-md rounded-lg h-10 mt-5 text-center pt-2' >Reserve Now</Link> */}
            </div>
            
        </div>
  )
}

export default ClientCard