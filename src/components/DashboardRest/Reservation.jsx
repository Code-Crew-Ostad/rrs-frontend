import React from 'react'

const Reservation = () => {
  return (
    <>
        <div className='flex p-5'>
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
                    Status
                    </label>
                    <select type='' className="border border-green-900 rounded-lg w-full py-2 px-1 text-black mb-3">
                        <option>Pending</option>
                        <option>Accepted</option>
                        <option>Rejected</option>
                    </select>
                </div>
                <div className='w-1/2 p-3 text-base font-light'>
                    <label className="block text-black text-sm font-normal mb-1">
                    Request Date
                    </label>
                    <input type='date' className="border border-green-900 rounded-lg w-full py-2 px-1 text-black mb-3"/>                
                    <label className="block text-black text-sm font-normal mb-1">
                    Reserved Date
                    </label>
                    <input type='date' className="border border-green-900 rounded-lg w-full py-2 px-1 text-black mb-3"/>
                </div>
            </form>
        </div>
        <div className='w-full  px-5 py-1'>
            <table className='w-full shadow-sm'>
                <thead>
                    <tr className='bg-green-200 h-5'>
                        <th className='font-normal px-3'>Date</th>
                        <th className='font-normal px-3'>Request No</th>
                        <th className='font-normal px-3'>User Id</th>
                        <th className='font-normal px-3'>Reserved Date</th>
                        <th className='font-normal px-3'>Time</th>
                        <th className='font-normal px-3'>Guests</th>
                        <th className='font-normal px-3'>Table</th>
                        <th className='font-normal px-3'>Status</th>
                        <th className='font-normal px-3'>Response</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='h-10 border-b-2 border-b-gray-200 cursor-pointer hover:bg-slate-200'>
                        <td className='px-3 text-center'><span className='text-xs bg-green-700 rounded-lg text-white px-2'>12-10-2020</span></td>
                        <td className='px-3 text-center text-sm font-light'>023878468</td>
                        <td className='px-3 text-center text-sm font-light'>22-3345</td>
                        <td className='px-3 text-center'><span className='text-xs bg-green-700 rounded-lg text-white px-2'>12-10-2020</span></td>
                        <td className='px-3 text-center'><span className='text-xs bg-green-500 rounded-lg text-white px-2'>8:30PM - 9:30PM</span></td>
                        <td className='px-3 text-center text-sm font-light'>6</td>
                        <td className='px-3 text-center text-sm font-light'>T1-R-3C</td>
                        <td className='px-3 text-center'><span className='text-xs bg-yellow-500 rounded-lg text-white px-2'>Pending</span></td>
                        <td className='px-3 text-center'>
                            <button className='text-xs bg-green-500 rounded-lg text-white px-4 py-2 mx-1 hover:bg-green-700 hover:scale-105'>
                                Accept
                            </button>
                            <button className='text-xs bg-red-500 rounded-lg text-white px-4 py-2 hover:bg-red-700 hover:scale-105'>
                                Reject
                            </button>
                        </td>
                    </tr>
                    <tr className=' h-10 border-b-2 border-b-gray-200 cursor-pointer hover:bg-slate-200'>
                        <td className='px-3 text-center'><span className='text-xs bg-green-700 rounded-lg text-white px-2'>12-10-2020</span></td>
                        <td className='px-3 text-center text-sm font-light'>023878468</td>
                        <td className='px-3 text-center text-sm font-light'>22-3345</td>
                        <td className='px-3 text-center'><span className='text-xs bg-green-700 rounded-lg text-white px-2'>12-10-2020</span></td>
                        <td className='px-3 text-center'><span className='text-xs bg-green-500 rounded-lg text-white px-2'>8:30PM - 9:30PM</span></td>
                        <td className='px-3 text-center text-sm font-light'>6</td>
                        <td className='px-3 text-center text-sm font-light'>T1-R-3C</td>
                        <td className='px-3 text-center'><span className='text-xs bg-yellow-500 rounded-lg text-white px-2'>Pending</span></td>
                        <td className='px-3 text-center'>
                            <button className='text-xs bg-green-500 rounded-lg text-white px-4 py-2 mx-1 hover:bg-green-700 hover:scale-105'>
                                Accept
                            </button>
                            <button className='text-xs bg-red-500 rounded-lg text-white px-4 py-2 hover:bg-red-700 hover:scale-105'>
                                Reject
                            </button>
                        </td>
                    </tr>
                    <tr className=' h-10 border-b-2 border-b-gray-200 cursor-pointer hover:bg-slate-200'>
                        <td className='px-3 text-center'><span className='text-xs bg-green-700 rounded-lg text-white px-2'>12-10-2020</span></td>
                        <td className='px-3 text-center text-sm font-light'>023878468</td>
                        <td className='px-3 text-center text-sm font-light'>22-3345</td>
                        <td className='px-3 text-center'><span className='text-xs bg-green-700 rounded-lg text-white px-2'>12-10-2020</span></td>
                        <td className='px-3 text-center'><span className='text-xs bg-green-500 rounded-lg text-white px-2'>8:30PM - 9:30PM</span></td>
                        <td className='px-3 text-center text-sm font-light'>6</td>
                        <td className='px-3 text-center text-sm font-light'>T1-R-3C</td>
                        <td className='px-3 text-center'><span className='text-xs bg-yellow-500 rounded-lg text-white px-2'>Pending</span></td>
                        <td className='px-3 text-center'>
                            <button className='text-xs bg-green-500 rounded-lg text-white px-4 py-2 mx-1 hover:bg-green-700 hover:scale-105'>
                                Accept
                            </button>
                            <button className='text-xs bg-red-500 rounded-lg text-white px-4 py-2 hover:bg-red-700 hover:scale-105'>
                                Reject
                            </button>
                        </td>
                    </tr>
                    <tr className=' h-10 border-b-2 border-b-gray-200 cursor-pointer hover:bg-slate-200'>
                        <td className='px-3 text-center'><span className='text-xs bg-green-700 rounded-lg text-white px-2'>12-10-2020</span></td>
                        <td className='px-3 text-center text-sm font-light'>023878468</td>
                        <td className='px-3 text-center text-sm font-light'>22-3345</td>
                        <td className='px-3 text-center'><span className='text-xs bg-green-700 rounded-lg text-white px-2'>12-10-2020</span></td>
                        <td className='px-3 text-center'><span className='text-xs bg-green-500 rounded-lg text-white px-2'>8:30PM - 9:30PM</span></td>
                        <td className='px-3 text-center text-sm font-light'>6</td>
                        <td className='px-3 text-center text-sm font-light'>T1-R-3C</td>
                        <td className='px-3 text-center'><span className='text-xs bg-yellow-500 rounded-lg text-white px-2'>Pending</span></td>
                        <td className='px-3 text-center'>
                            <button className='text-xs bg-green-500 rounded-lg text-white px-4 py-2 mx-1 hover:bg-green-700 hover:scale-105'>
                                Accept
                            </button>
                            <button className='text-xs bg-red-500 rounded-lg text-white px-4 py-2 hover:bg-red-700 hover:scale-105'>
                                Reject
                            </button>
                        </td>
                    </tr>
                    <tr className=' h-10 border-b-2 border-b-gray-200 cursor-pointer hover:bg-slate-200'>
                        <td className='px-3 text-center'><span className='text-xs bg-green-700 rounded-lg text-white px-2'>12-10-2020</span></td>
                        <td className='px-3 text-center text-sm font-light'>023878468</td>
                        <td className='px-3 text-center text-sm font-light'>22-3345</td>
                        <td className='px-3 text-center'><span className='text-xs bg-green-700 rounded-lg text-white px-2'>12-10-2020</span></td>
                        <td className='px-3 text-center'><span className='text-xs bg-green-500 rounded-lg text-white px-2'>8:30PM - 9:30PM</span></td>
                        <td className='px-3 text-center text-sm font-light'>6</td>
                        <td className='px-3 text-center text-sm font-light'>T1-R-3C</td>
                        <td className='px-3 text-center'><span className='text-xs bg-green-500 rounded-lg text-white px-2'>Accepted</span></td>
                        <td className='px-3 text-center'>
                            <button className='text-xs bg-green-500 rounded-lg text-white px-4 py-2 mx-1 hover:bg-green-700 hover:scale-105'>
                                Accept
                            </button>
                            <button className='text-xs bg-red-500 rounded-lg text-white px-4 py-2 hover:bg-red-700 hover:scale-105'>
                                Reject
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div> 
    </>
  )
}

export default Reservation