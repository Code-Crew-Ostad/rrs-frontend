import React from 'react'
import GalleryImageCard from './GalleryImageCard'

const Gallery = () => {
    return (
    <div className='flex flex-col text-base font-light p-5'>
        <div className=' flex p-5 mb-10 items-center gap-10 bg-green-200 shadow-md rounded'>
            <div className=''>
                <label className="block text-black mb-1">
                    Restaurant Name
                </label>
                <select className="border border-green-900 rounded-lg w-full py-2 px-2 text-black mb-3">
                    <option>Gulshan, Dhaka</option>
                    <option>Chawkbazar, Chattogram</option>
                    <option>GEC, Chattogram</option>
                </select>
            </div>
            <div className=' flex mt-9 justify-between w-full'>
            <input className='file:bg-green-500 file:border-none file:text-white  hover:file:bg-green-700 file:cursor-pointer cursor-pointer' type="file" name="image" id="image" />
                <button className=' bg-yellow-500 text-white font-medium shadow-sm rounded-2xl p-3 hover:shadow-2xl hover:scale-105' type="button">Save Changes</button>
            </div>
        </div>
        <div className='flex gap-4'>
            <GalleryImageCard />
            <GalleryImageCard />
            <GalleryImageCard />
            <GalleryImageCard />
        </div>
        
    </div>
    )
}

export default Gallery