import React, { useEffect, useState } from 'react'
import { GetReservationsByRestId, GetRestaurantsByEmail, MakeReservation } from '../../api/apiRequest'

const Reservation = () => {
    const[branch, setBranch]=useState([])
    const [selectedOption, setSelectedOption] = useState(localStorage.getItem('id'));
    const [reservations, setReservations] = useState([]);
    // const [selectedReservation, setSelectedReservation] = useState('');
    

    useEffect(()=>{
        FillDdBranch();
    },[])
    
    useEffect(()=>{
        GetReservations(selectedOption);
    },[selectedOption])

    const FillDdBranch = async ()=>{
        const branchList = await GetRestaurantsByEmail({email: localStorage.getItem('email')})
        console.log(branchList)
        setBranch(branchList)
    }

    const GetReservations = async(selectedOption)=>{
        //console.log(selectedOption)
        try {
            const reservations = await GetReservationsByRestId(selectedOption);
            setReservations(reservations);
        } catch (error) {
            console.error('Error loading data:', error);
        }
    }

    const onAcceptButtonClick = async (reqs_id, status)=>{
        try {
            const res = await MakeReservation({reqs_id:reqs_id, status:status})
            if(res["status"]=="success"){
                setReservations((prevReservations)=>{
                    // Clone the Array
                    const newReservations = [...prevReservations]; 
                    // Find the object in the array based on id
                    const objectToUpdate = newReservations.find(obj=> obj.reqs_id==reqs_id)
                    // Update the value of the object
                    if(objectToUpdate){
                        if(status=="accepted"){
                            objectToUpdate.status = "accepted"
                        }
                        if(status=="rejected"){
                            objectToUpdate.status = "rejected"
                        }
                    }
                    // Return the new array
                    return newReservations;
                })  
            }   

        } catch (error) {
            console.error('Error loading data:', error);
        }
    }
    return (
    <>
        <div className='flex p-5'>
            <form className="flex bg-[#f4f4f4] shadow-md rounded w-full">
                <div className='w-1/2 p-3 text-base font-light'>
                    <label className="block text-black text-sm font-normal mb-1">
                    Branch Name
                    </label>
                    <select className="border border-green-900 rounded-lg w-full py-2 px-1 text-black mb-3"
                        id='dropdown'
                        value={selectedOption}
                        onChange={(e)=>setSelectedOption(e.target.value)}
                    > 
                        {branch && branch.map((branch)=>(
                            <option key={branch._id} value={branch._id}>{branch.name}</option>
                        ))}
                        
                    </select> 

                    {/* <div class="relative inline-block w-64">
                        <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                            <option>Option 1</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                        </select>
                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M14.95 7.95l-3.95 3.95l-3.95-3.95l-.7.7l4.65 4.65l4.65-4.65l-.7-.7z"/></svg>
                        </div>
                    </div>                */}

                    <label className="block text-black text-sm font-normal mb-1">
                    Status
                    </label>
                    <select type='' className="border border-green-900 rounded-lg w-full py-2 px-1 text-black mb-3" disabled={true}>
                        <option>Pending</option>
                        <option>Accepted</option>
                        <option>Rejected</option>
                    </select>
                </div>
                <div className='w-1/2 p-3 text-base font-light'>
                    <label className="block text-black text-sm font-normal mb-1">
                    Request Date
                    </label>
                    <input type='date' className="border border-green-900 rounded-lg w-full py-2 px-1 text-black mb-3"
                        disabled={true}
                    />                
                    <label className="block text-black text-sm font-normal mb-1">
                    Reserved Date
                    </label>
                    <input type='date' className="border border-green-900 rounded-lg w-full py-2 px-1 text-black mb-3"
                        disabled={true}
                    />
                </div>
            </form>
        </div>
        <div className='w-full  px-5 py-1'>
            <table className='w-full shadow-sm'>
                <thead>
                    <tr className='bg-[#d4d8d8] h-5'>
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
                    { reservations? (reservations.map((reservation)=>(
                        <tr key={reservation.reqs_id} className='h-10 border-b-2 border-b-gray-200 cursor-pointer hover:bg-slate-200'>
                            <td className='px-3 text-center'><span className='text-xs bg-green-700 rounded-lg text-white px-2'>{reservation.reqs_date}</span></td>
                            <td className='px-3 text-center text-sm font-light'>{reservation.reqs_id}</td>
                            <td className='px-3 text-center text-sm font-light'>{reservation.user_email}</td>
                            <td className='px-3 text-center'><span className='text-xs bg-gray-500 rounded-lg text-white px-2'>{reservation.resv_date}</span></td>
                            <td className='px-3 text-center'><span className='text-xs bg-gray-500 rounded-lg text-white px-2'>{reservation.start_time} - {reservation.end_time}</span></td>
                            <td className='px-3 text-center text-sm font-light'>{reservation.guests}</td>
                            <td className='px-3 text-center text-sm font-light'>---</td>
                            <td className='px-3 text-center'><span className={reservation.status=="pending"? 'text-xs bg-yellow-500 rounded-lg text-white px-2': reservation.status=="accepted" ? 'text-xs bg-green-500 rounded-lg text-white px-2': 'text-xs bg-red-500 rounded-lg text-white px-2'}>{reservation.status}</span></td>
                            <td className='px-3 text-center'>
                                {
                                    reservation.status=="pending"? (
                                        <div>
                                            <button className='text-xs bg-[#f4f4f4] rounded-lg text-[#389d5f] px-4 py-2 mx-1 hover:bg-[#c1f2c9] hover:scale-105 border border-[#389d5f] shadow-sm'
                                                onClick={()=>onAcceptButtonClick(reservation.reqs_id, "accepted")}
                                            >
                                                Accept
                                            </button>
                                            <button className='text-xs bg-[#f4f4f4] rounded-lg text-[#dc4646] px-4 py-2 hover:bg-[#f2c3c1] hover:scale-105 border border-[#dc4646] shadow-sm'
                                                onClick={()=>onAcceptButtonClick(reservation.reqs_id, "rejected")}
                                            >
                                                Reject
                                            </button>
                                        </div>
                                    ) : <p className='text-xs font-normal text-[#fff]'><span className='bg-[#8e8a8a] rounded-lg px-2'>Responded</span></p>
                                }
                            </td>
                        </tr>
                    ))):"No data" }
                </tbody>
            </table>
        </div> 
    </>
  )
}

export default Reservation