import React from 'react'

const Timing = () => {
    return (
    <div className='h-vh'> 
        <div className='m-5'>
            <form className="flex bg-green-200 shadow-md rounded w-full">
                <div className='w-1/2 p-3 text-base font-light'>
                    <label className="block text-black text-sm font-normal mb-1">
                    Branch Name
                    </label>
                    <select type='' className="border border-green-900 rounded-lg w-full py-2 px-1 text-black mb-3">
                        <option>Gulshan, Dhaka</option>
                        <option>Chawkbazar, Chattogram</option>
                        <option>GEC, Chattogram</option>
                    </select>                
                    <label className="block text-black text-sm font-normal mb-1">
                    Day
                    </label>
                    <select type='' className="border border-green-900 rounded-lg w-full py-2 px-1 text-black mb-3">
                        <option>Saturday</option>
                        <option>Sunday</option>
                        <option>Monday</option>
                        <option>Tuesday</option>
                        <option>Wednesday</option>
                        <option>Thursday</option>
                        <option>Friday</option>
                    </select>
                </div>
                <div className='flex flex-col w-1/2 p-3 text-base font-light'>
                    <label className="block text-black text-sm font-normal mb-1">
                    Opening Time
                    </label>
                    <input type='time' className="border border-green-900 rounded-lg w-full py-2 px-1 text-black mb-3"/>                
                    <label className="block text-black text-sm font-normal mb-1">
                    Closing Time
                    </label>
                    <input type='time' className="border border-green-900 rounded-lg w-full py-2 px-1 text-black mb-3"/>
                    <div className='flex flex-col items-end'>
                        <button className='block bg-yellow-500 text-white font-medium shadow-sm rounded-2xl px-3 py-2 mt-5 hover:shadow-2xl hover:scale-105 w-1/2' type="button">Save Changes</button>
                    </div>
                </div>
                
            </form>
        </div>
        <div className='m-5 border-2 rounded-lg'>
            <table className="border shadow-sm w-full">
                <thead>
                    <tr className="bg-green-200 h-8">
                        <th className="font-normal px-3">Day</th>
                        <th className="font-normal px-3">Opening Time</th>
                        <th className="font-normal px-3">Closing Time</th>
                        <th className="font-normal px-3">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="h-10 border-b-2 border-b-gray-200 cursor-pointer text-center">
                        <td className="px-3 font-light">Saturday</td>
                        <td className="px-3">
                            <span className=" bg-green-500 rounded-lg text-white px-2">
                            9:30AM
                            </span>
                        </td>
                        <td className="px-3">
                            <span className=" bg-yellow-500 rounded-lg text-white px-2">
                            10:30PM
                            </span>
                        </td>
                        <td className='px-3 text-center'>
                            <button className=' bg-green-500 rounded-lg text-white px-4 py-1 mx-1 hover:bg-green-700 hover:scale-105'>
                                Edit
                            </button>
                        </td>
                    </tr>
                    <tr className=" h-10 border-b-2 border-b-gray-200 cursor-pointer text-center">
                        <td className="px-3 font-light">Sunday</td>
                        <td className="px-3">
                            <span className=" bg-green-500 rounded-lg text-white px-2">
                            9:30AM
                            </span>
                        </td>
                        <td className="px-3">
                            <span className=" bg-yellow-500 rounded-lg text-white px-2">
                            10:30PM
                            </span>
                        </td>
                        <td className='px-3 text-center'>
                            <button className=' bg-green-500 rounded-lg text-white px-4 py-1 mx-1 hover:bg-green-700 hover:scale-105'>
                                Edit
                            </button>
                        </td>
                    </tr>
                    <tr className=" h-10 border-b-2 border-b-gray-200 cursor-pointer text-center">
                        <td className="px-3 font-light">Monday</td>
                        <td className="px-3">
                            <span className=" bg-green-500 rounded-lg text-white px-2">
                            9:30AM
                            </span>
                        </td>
                        <td className="px-3">
                            <span className=" bg-yellow-500 rounded-lg text-white px-2">
                            10:30PM
                            </span>
                        </td>
                        <td className='px-3 text-center'>
                            <button className=' bg-green-500 rounded-lg text-white px-4 py-1 mx-1 hover:bg-green-700 hover:scale-105'>
                                Edit
                            </button>
                        </td>
                    </tr>
                    <tr className=" h-10 border-b-2 border-b-gray-200 cursor-pointer text-center">
                        <td className="px-3 font-light">Tuesday</td>
                        <td className="px-3">
                            <span className=" bg-green-500 rounded-lg text-white px-2">
                            9:30AM
                            </span>
                        </td>
                        <td className="px-3">
                            <span className=" bg-yellow-500 rounded-lg text-white px-2">
                            10:30PM
                            </span>
                        </td>
                        <td className='px-3 text-center'>
                            <button className=' bg-green-500 rounded-lg text-white px-4 py-1 mx-1 hover:bg-green-700 hover:scale-105'>
                                Edit
                            </button>
                        </td>
                    </tr>
                    <tr className=" h-10 border-b-2 border-b-gray-200 cursor-pointer text-center">
                        <td className="px-3 font-light">Wednesday</td>
                        <td className="px-3">
                            <span className=" bg-green-500 rounded-lg text-white px-2">
                            9:30AM
                            </span>
                        </td>
                        <td className="px-3">
                            <span className=" bg-yellow-500 rounded-lg text-white px-2">
                            10:30PM
                            </span>
                        </td>
                        <td className='px-3 text-center'>
                            <button className=' bg-green-500 rounded-lg text-white px-4 py-1 mx-1 hover:bg-green-700 hover:scale-105'>
                                Edit
                            </button>
                        </td>
                    </tr>
                    <tr className=" h-10 border-b-2 border-b-gray-200 cursor-pointer text-center">
                        <td className="px-3 font-light">Thursday</td>
                        <td className="px-3">
                            <span className=" bg-green-500 rounded-lg text-white px-2">
                            9:30AM
                            </span>
                        </td>
                        <td className="px-3">
                            <span className=" bg-yellow-500 rounded-lg text-white px-2">
                            10:30PM
                            </span>
                        </td>
                        <td className='px-3 text-center'>
                            <button className=' bg-green-500 rounded-lg text-white px-4 py-1 mx-1 hover:bg-green-700 hover:scale-105'>
                                Edit
                            </button>
                        </td>
                    </tr>
                    <tr className=" h-10 border-b-2 border-b-gray-200 cursor-pointer text-center">
                        <td className="px-3 font-light">Friday</td>
                        <td className="px-3">
                            <span className=" bg-green-500 rounded-lg text-white px-2">
                            9:30AM
                            </span>
                        </td>
                        <td className="px-3">
                            <span className=" bg-yellow-500 rounded-lg text-white px-2">
                            10:30PM
                            </span>
                        </td>
                        <td className='px-3 text-center'>
                            <button className=' bg-green-500 rounded-lg text-white px-4 py-1 mx-1 hover:bg-green-700 hover:scale-105'>
                                Edit
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div> 
    </div>
    )
}

export default Timing