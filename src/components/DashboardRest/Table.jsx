import React from 'react'

const Table = () => {
    return (
        <>
        <div className='flex p-5'>
            <form className="flex bg-green-200 shadow-md rounded w-full gap-8">
                <div className='flex flex-col p-2 justify-between w-1/2 text-md font-light'>
                        <label className="block text-black">
                        Branch Name
                        </label>
                        <input className="border border-green-900 rounded-lg w-full p-2 text-black mb-4"/> 
                        <div className='flex flex-col gap-1 w-full'>
                        <label className="block text-black">
                        Table No.
                        </label>
                        <input className="border border-green-900 rounded-lg w-full py-2 px-1 text-black"/>
                        <p className='mb-4 text-xs'>Suggestion: For Table 1, write T1</p>
                        </div>
                        <div className='flex flex-col gap-1 w-full'>
                        <label className="block text-black">
                        Table Type
                        </label>
                        <input className="border border-green-900 rounded-lg w-full py-2 px-1 text-black"/>
                        <p className='mb-4 text-xs'>Suggestion: For round table, write R</p>
                        </div>
                        <div className='flex flex-col gap-1 w-full'>
                        <label className="block text-black">
                        No. of Chairs
                        </label>
                        <input className="border border-green-900 rounded-lg w-full py-2 px-1 text-black"/>
                        <p className='mb-4 text-xs'>Suggestion: If there are 3 chairs, write 3C</p>
                        </div>
                </div>
                <div className='text-base font-light p-2 w-full'>
                    <div >
                            <label className="block text-black">
                            Table Description
                            </label>
                            <textarea className="border border-green-900 rounded-lg w-full p-2 text-black" rows="4"/>              
                    </div>
                    <div className='flex gap-4'>
                        <button className='block bg-yellow-500 text-white font-medium shadow-sm rounded-2xl px-3 py-2 mt-20 hover:shadow-2xl hover:scale-105' type="button">Add Table</button>          
                    </div>
                </div>
            </form>
        </div>
        <div className='w-full  px-5 py-1'>
            <table className='w-full shadow-sm'>
                <thead>
                    <tr className='bg-green-200 h-5'>
                        <th className='font-normal px-3'>Table Code</th>
                        <th className='font-normal px-3'>Description</th>
                        <th className='font-normal px-3'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='h-10 border-b-2 border-b-gray-200 cursor-pointer hover:bg-slate-200'>
                        <td className='px-3 text-center text-sm font-light'>T1-R-3C </td>
                        <td className='px-3 text-center text-sm font-light'>Table 1 - Round - 3 Chairs </td>
                        <td className='px-3 text-center'>
                            <button className='text-xs bg-green-500 rounded-lg text-white p-2 hover:bg-green-700 hover:scale-105 mr-5'>
                                Edit
                            </button>
                            <button className='text-xs bg-red-500 rounded-lg text-white p-2 hover:bg-red-700 hover:scale-105'>
                                Remove
                            </button>
                        </td>
                    </tr>
                    <tr className='h-10 border-b-2 border-b-gray-200 cursor-pointer hover:bg-slate-200'>
                        <td className='px-3 text-center text-sm font-light'>T1-R-3C </td>
                        <td className='px-3 text-center text-sm font-light'>Table 1 - Round - 3 Chairs </td>
                        <td className='px-3 text-center'>
                            <button className='text-xs bg-green-500 rounded-lg text-white p-2 hover:bg-green-700 hover:scale-105 mr-5'>
                                Edit
                            </button>
                            <button className='text-xs bg-red-500 rounded-lg text-white p-2 hover:bg-red-700 hover:scale-105'>
                                Remove
                            </button>
                        </td>
                    </tr>
                    <tr className='h-10 border-b-2 border-b-gray-200 cursor-pointer hover:bg-slate-200'>
                        <td className='px-3 text-center text-sm font-light'>T2-R-3C </td>
                        <td className='px-3 text-center text-sm font-light'>Table 2 - Round - 3 Chairs </td>
                        <td className='px-3 text-center'>
                            <button className='text-xs bg-green-500 rounded-lg text-white p-2 hover:bg-green-700 hover:scale-105 mr-5'>
                                Edit
                            </button>
                            <button className='text-xs bg-red-500 rounded-lg text-white p-2 hover:bg-red-700 hover:scale-105'>
                                Remove
                            </button>
                        </td>
                    </tr>
                    <tr className='h-10 border-b-2 border-b-gray-200 cursor-pointer hover:bg-slate-200'>
                        <td className='px-3 text-center text-sm font-light'>T3-S-4C</td>
                        <td className='px-3 text-center text-sm font-light'>Table 3 - Square - 4 Chairs  </td>
                        <td className='px-3 text-center'>
                            <button className='text-xs bg-green-500 rounded-lg text-white p-2 hover:bg-green-700 hover:scale-105 mr-5'>
                                Edit
                            </button>
                            <button className='text-xs bg-red-500 rounded-lg text-white p-2 hover:bg-red-700 hover:scale-105'>
                                Remove
                            </button>
                        </td>
                    </tr>
                    <tr className='h-10 border-b-2 border-b-gray-200 cursor-pointer hover:bg-slate-200'>
                        <td className='px-3 text-center text-sm font-light'>T4-R-2C</td>
                        <td className='px-3 text-center text-sm font-light'>Table 4 - Round - 2 Chairs </td>
                        <td className='px-3 text-center'>
                            <button className='text-xs bg-green-500 rounded-lg text-white p-2 hover:bg-green-700 hover:scale-105 mr-5'>
                                Edit
                            </button>
                            <button className='text-xs bg-red-500 rounded-lg text-white p-2 hover:bg-red-700 hover:scale-105'>
                                Remove
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div> 
    </>
    )
}

export default Table