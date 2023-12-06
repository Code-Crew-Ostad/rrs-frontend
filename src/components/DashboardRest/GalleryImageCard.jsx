import React from 'react'

const GalleryImageCard = () => {
  return (
    <div className='font-bold w-[300px] rounded-lg flex flex-col bg-white gap-2  drop-shadow-sm'>
    <img className='rounded-t-lg hover:opacity-95 cursor-pointer h-50 w-auto' src="https://i0.wp.com/www.designlike.com/wp-content/uploads/2018/03/restaurant-1948732_1920.jpg" />
    <div className='rounded-lg flex flex-col p-3 gap-2'>  
            <p  className=' flex text-xs font-normal gap-2'>Image Name</p>
        <button className=' font-light text-sm text-black text-right' ><span className='hover:bg-red-600 hover:rounded-lg hover:px-3 hover:py-1 hover:text-white'>Delete</span></button>
    </div>
    
</div>
  )
}

export default GalleryImageCard