import React from 'react'

const Profile = () => {
  return (
    <>
        <div className='flex flex-col '>   
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
                            <input className='file:bg-green-500 file:border-none file:text-white rounded-xl hover:file:bg-green-700 file:cursor-pointer cursor-pointer' type="file" name="image" id="image" />
                        </div>
                        <button className='block bg-yellow-500 text-white font-medium shadow-sm rounded-2xl px-3 py-2 mt-20 hover:shadow-2xl hover:scale-105' type="button">Save Changes</button>
                    </div>
                    
                </form>
                
            </div>
        </div>
  </>
  )
}

export default Profile