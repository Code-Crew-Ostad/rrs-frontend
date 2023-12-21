import React, { useEffect, useState } from 'react'
import toast, { Toaster } from "react-hot-toast";
import { GetRestaurantsByEmail, SaveBusinessHours } from '../../api/apiRequest';

const Timing = () => {

    const[restaurantList, setRestaurantList] = useState([]);
    const [selectedOption, setSelectedOption] = useState(localStorage.getItem('id'));
    const [businessHours, setBusinessHours] = useState([
        { day: 'Saturday', startTime: "", endTime: ""},
        { day: 'Sunday', startTime: "", endTime: ""},
        { day: 'Monday', startTime: "", endTime: ""},
        { day: 'Tuesday', startTime: "", endTime: ""},
        { day: 'Wednesday', startTime: "", endTime: ""},
        { day: 'Thursday', startTime: "", endTime: ""},
        { day: 'Friday', startTime: "", endTime: ""},
    ]);

    useEffect(()=>{
        LoadRestaurants();
    },[])
    const LoadRestaurants = async ()=>{
        const restList = await GetRestaurantsByEmail({email:localStorage.getItem('email')})
        setRestaurantList(restList);
    }

    const updateStartHour = (day, startTime) => {
        setBusinessHours(prevData => {
          // Use map to create a new array with the updated object
        return prevData.map(obj => (obj.day === day ? { ...obj, startTime: startTime} : obj));
        });
    };

    const updateEndHour = (day, endTime) => {
        setBusinessHours(prevData => {
        return prevData.map(obj => (obj.day === day ? { ...obj, endTime: endTime} : obj));
        });
    };

    const handleSubmit = async(e)=>{
        e.preventDefault();
        try {
            console.log(selectedOption)
            const res = await SaveBusinessHours(selectedOption, businessHours)
            if(res["status"]=="success"){
                toast.success(res["message"]);
            }
            else{
                toast.error("Something went wrong!")
            }

        } catch (error) {
            console.error('Error saving business:', error);
        }
    }
    
    return (
    <div className='h-vh'> 
        <div className='m-5'>
            <form className="flex bg-[#f4f4f4] shadow-md rounded w-full">
                <div className='w-1/2 p-3 text-base font-light'>
                    <label className="block text-black text-sm font-normal mb-1">
                    Branch Name
                    </label>
                    <select type='' className="border border-green-900 rounded-lg w-full py-2 px-1 text-black mb-3"
                        id='dropdown'
                        value={selectedOption}
                        onChange={(e)=>setSelectedOption(e.target.value)}
                    >
                        {
                            restaurantList.map((rest)=>(
                                <option key={rest._id} value={rest._id}>{rest.name}</option>
                            ))
                        }
                    </select>                
                    {/* <label className="block text-black text-sm font-normal mb-1">
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
                    </select> */}
                </div>
                <div className='w-1/2 p-3 text-base font-light'>
                    {/* <label className="block text-black text-sm font-normal mb-1">
                    Opening Time
                    </label>
                    <input type='time' className="border border-green-900 rounded-lg w-full py-2 px-1 text-black mb-3"/>                
                    <label className="block text-black text-sm font-normal mb-1">
                    Closing Time
                    </label>
                    <input type='time' className="border border-green-900 rounded-lg w-full py-2 px-1 text-black mb-3"/>
                    <div className='flex flex-col items-end'>
                        <button className='block bg-yellow-500 text-white font-medium shadow-sm rounded-2xl px-3 py-2 mt-5 hover:shadow-2xl hover:scale-105 w-1/2' type="button">Save Changes</button>
                    </div> */}

                    <button
                        className=" block bg-yellow-500 text-white font-medium shadow-sm rounded-2xl px-3 py-2 hover:shadow-2xl hover:scale-105 w-4/12 mt-5"
                        type=""
                        //disabled={isInputDisabled}
                        onClick={handleSubmit}
                    >
                        Save Changes
                    </button>
                </div>
                
            </form>
        </div>
        <div className='m-5 border-2 rounded-lg'>
            <table className="border shadow-sm w-full">
                <thead>
                    <tr className="bg-[#d4d8d8] h-8">
                        <th className="font-normal px-3">Day</th>
                        <th className="font-normal px-3">Opening Time</th>
                        <th className="font-normal px-3">Closing Time</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        businessHours.map((day)=>(
                        <tr className="h-10 border-b-2 border-b-gray-200 cursor-pointer text-center">
                            <td className="px-3 font-light">{day.day}</td>
                            <td className="px-3">
                                <span className=" ">
                                    <input type='time' className='border border-[#000] rounded-lg outline-1'
                                        name='startTime'
                                        value={day.startTime}
                                        onChange={(e)=>updateStartHour(day.day,e.target.value)}
                                    />
                                </span>
                            </td>
                            <td className="px-3">
                                <span className=" ">
                                    <input type='time' className='border border-[#000] rounded-lg outline-1'
                                        name='endTime'
                                        value={day.endTime}
                                        onChange={(e)=>updateEndHour(day.day,e.target.value)}
                                    />
                                </span>
                            </td>
                        </tr>
                        )) 
                    }
                    {/* <tr className="h-10 border-b-2 border-b-gray-200 cursor-pointer text-center">
                        <td className="px-3 font-light">{businessHours[1].day}</td>
                        <td className="px-3">
                            <span className=" ">
                                <input type='time' className='border border-[#000] rounded-lg outline-1'
                                    name='sun-st'
                                    value={businessHours[1].startTime}
                                />
                            </span>
                        </td>
                        <td className="px-3">
                            <span className=" ">
                                <input type='time' className='border border-[#000] rounded-lg outline-1'
                                    name='sun-et'
                                    value={businessHours[1].endTime}
                                />
                            </span>
                        </td>
                    </tr>
                    <tr className="h-10 border-b-2 border-b-gray-200 cursor-pointer text-center">
                        <td className="px-3 font-light">{businessHours[2].day}</td>
                        <td className="px-3">
                            <span className=" ">
                                <input type='time' className='border border-[#000] rounded-lg outline-1'
                                    name='mon-st'
                                    value={businessHours[2].startTime}
                                />
                            </span>
                        </td>
                        <td className="px-3">
                            <span className=" ">
                                <input type='time' className='border border-[#000] rounded-lg outline-1'
                                    name='mon-et'
                                    value={businessHours[2].endTime}
                                />
                            </span>
                        </td>
                    </tr>
                    <tr className="h-10 border-b-2 border-b-gray-200 cursor-pointer text-center">
                        <td className="px-3 font-light">{businessHours[3].day}</td>
                        <td className="px-3">
                            <span className=" ">
                                <input type='time' className='border border-[#000] rounded-lg outline-1'
                                    name='Tue-st'
                                    value={businessHours[3].startTime}
                                />
                            </span>
                        </td>
                        <td className="px-3">
                            <span className=" ">
                                <input type='time' className='border border-[#000] rounded-lg outline-1'
                                    name='Tue-et'
                                    value={businessHours[3].endTime}
                                />
                            </span>
                        </td>
                    </tr>
                    <tr className="h-10 border-b-2 border-b-gray-200 cursor-pointer text-center">
                        <td className="px-3 font-light">{businessHours[4].day}</td>
                        <td className="px-3">
                            <span className=" ">
                                <input type='time' className='border border-[#000] rounded-lg outline-1'
                                    name='wed-st'
                                    value={businessHours[4].startTime}
                                />
                            </span>
                        </td>
                        <td className="px-3">
                            <span className=" ">
                                <input type='time' className='border border-[#000] rounded-lg outline-1'
                                    name='wed-et'
                                    value={businessHours[4].endTime}
                                />
                            </span>
                        </td>
                    </tr>
                    <tr className="h-10 border-b-2 border-b-gray-200 cursor-pointer text-center">
                        <td className="px-3 font-light">{businessHours[5].day}</td>
                        <td className="px-3">
                            <span className=" ">
                                <input type='time' className='border border-[#000] rounded-lg outline-1'
                                    name='Thu-st'
                                    value={businessHours[5].startTime}
                                />
                            </span>
                        </td>
                        <td className="px-3">
                            <span className=" ">
                                <input type='time' className='border border-[#000] rounded-lg outline-1'
                                name='Thu-et'
                                value={businessHours[5].endTime}
                                />
                            </span>
                        </td>
                    </tr>
                    <tr className="h-10 border-b-2 border-b-gray-200 cursor-pointer text-center">
                        <td className="px-3 font-light">{businessHours[6].day}</td>
                        <td className="px-3">
                            <span className=" ">
                                <input type='time' className='border border-[#000] rounded-lg outline-1'
                                    name='Fri-st'
                                    value={businessHours[6].startTime}
                                />
                            </span>
                        </td>
                        <td className="px-3">
                            <span className=" ">
                                <input type='time' className='border border-[#000] rounded-lg outline-1'
                                    name='Fri-et'
                                    value={businessHours[6].endTime}
                                />
                            </span>
                        </td>
                    </tr> */}
                </tbody>
            </table>
        </div> 
        <Toaster position={"top-center"} />
    </div>
    )
}

export default Timing