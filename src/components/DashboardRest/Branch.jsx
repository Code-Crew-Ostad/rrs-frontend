import React from 'react'

const Branch = () => {
  return (
    <>
    <div className='flex flex-col mt-5'> 
        <div className='w-full  px-5 py-1'>
            <table className='w-full shadow-sm'>
                <thead>
                    <tr className='bg-green-200 h-5'>
                        <th className='font-normal px-3'>Branch</th>
                        <th className='font-normal px-3'>Address</th>
                        <th className='font-normal px-3'>Area</th>
                        <th className='font-normal px-3'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='h-10 border-b-2 border-b-gray-200 cursor-pointer hover:bg-slate-200'>
                        <td className='px-3 text-center'>B-1</td>
                        <td className='px-3 text-center text-sm font-light'>Lorem ipsum dolor sit amet.</td>
                        <td className='px-3 text-center text-sm font-light'>Gulshan,Dhaka</td>
                        <td className='px-3 text-center gap-1'><button className='text-xs bg-green-500 rounded-lg text-white p-2 hover:bg-green-700 hover:scale-105'>Edit</button></td>
                    </tr>
                    <tr className=' h-10 border-b-2 border-b-gray-200 cursor-pointer hover:bg-slate-200'>
                        <td className='px-3 text-center'>B-1</td>
                        <td className='px-3 text-center text-sm font-light'>Lorem ipsum dolor sit amet.</td>
                        <td className='px-3 text-center text-sm font-light'>Chawkbazar, Chattogram</td>
                        <td className='px-3 text-center gap-1'><button className='text-xs bg-green-500 rounded-lg text-white p-2 hover:bg-green-700 hover:scale-105'>Edit</button></td>
                    </tr>
                    <tr className=' h-10 border-b-2 border-b-gray-200 cursor-pointer hover:bg-slate-200'>
                        <td className='px-3 text-center'>B-1</td>
                        <td className='px-3 text-center text-sm font-light'>Lorem ipsum dolor sit amet.</td>
                        <td className='px-3 text-center text-sm font-light'>GEC, Chattogram</td>
                        <td className='px-3 text-center gap-1'><button className='text-xs bg-green-500 rounded-lg text-white p-2 hover:bg-green-700 hover:scale-105'>Edit</button></td>
                    </tr>
                </tbody>
            </table>
        </div> 
        <div className='p-5'>
            <form className="flex bg-green-200 shadow-md rounded px-8 pt-6 pb-8 w-full gap-5">
                <div className='w-1/2 text-base font-light'>
                    <label className="block text-black mb-1">
                    Restaurant Name
                    </label>
                    <input className="border border-green-900 rounded-lg w-full py-2 px-1 text-black mb-3"/>
                    <label htmlFor='phoneNo' className="block text-black mb-1">
                    Mobile No
                    </label>
                    <input type='tel' pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder='+880-1234-123456' id='phoneNo' className="border border-green-900 rounded-lg w-full py-2 px-1 text-black mb-3"/>
                    <label htmlFor='type' className="block text-black mb-1">
                    Type (Cuisine)
                    </label>
                    <input id='type' placeholder='e.g. Chinese, Seafood' className="border border-green-900 rounded-lg w-full py-2 px-1 text-black mb-3"/>
                    <label className="block text-black mb-1">
                    Address
                    </label>
                    <input type='' className="border border-green-900 rounded-lg w-full py-2 px-1 text-black mb-3"/>
                    <label className="block text-black mb-1">
                    Area
                    </label>
                    <input className="border border-green-900 rounded-lg w-full py-2 px-1 text-black mb-3"/>
                    <label htmlFor='description' className="block text-black mb-1">
                    Description
                    </label>
                    <textarea id='description' rows="5" className="border border-green-900 rounded-lg w-full py-2 px-1 text-black mb-3"></textarea>
                    <label className="block text-black mb-1">
                    Longitude
                    </label>
                    <input className="border border-green-900 rounded-lg w-full py-2 px-1 text-black mb-3"/>
                    <label className="block text-black mb-1">
                    Latitude
                    </label>
                    <input className="border border-green-900 rounded-lg w-full py-2 px-1 text-black mb-3"/>
                </div>
                <div className='flex flex-col w-1/2 text-base font-light items-center'>
                    <div className='w-full h-full pt-5'>
                        <img className='w-full h-1/2 border-none m-0 border-yellow-600 pb-5 rounded-xl'/>
                        <input className='file:bg-green-500 file:border-none file:text-white rounded-xl file:cursor-pointer cursor-pointer' type="file" name="image" id="image" />
                    </div>
                    <button className='block bg-yellow-500 text-white font-medium shadow-sm rounded-2xl px-3 py-2 mt-20 hover:shadow-2xl hover:scale-105' type="button">Save Changes</button>
                </div>
                
            </form>
        </div>
    </div>


</>
  )
}

export default Branch