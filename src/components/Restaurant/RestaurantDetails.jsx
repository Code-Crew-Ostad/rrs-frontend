import React, { useEffect } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { IoRestaurantOutline } from "react-icons/io5";
import { useState } from "react";
import { IoCloseCircle } from "react-icons/io5";
import Map from './Map';
import Reviews from "./Reviews";
import { GetRestaurantDetailById, MakeReservation } from "../../api/apiRequest";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const RestaurantDetails = () => {

  const navigate = useNavigate();
  const {state} = useLocation();
  useEffect(()=>{
    LoadRestaurantDetails();
  },[])

  const [details, setDetails] = useState({});
  const LoadRestaurantDetails = async ()=>{
      let restDetails = await GetRestaurantDetailById(state.restId);
      setDetails(restDetails);
  }
  const [showModal, setShowModal] = useState(false);
  const location = {
    address: '1600 Amphitheatre Parkway, Mountain View, california.',
    lat: 37.42216,
    lng: -122.08427,
  }
  const reviews =[
    {
      id:"1",
      user:"user01",
      date:"10, sep 2023",
      rating:4,
      review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, quisquam."
    },
    {
      id:"2",
      user:"user02",
      date:"11, sep 2023",
      rating:3,
      review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, quisquam.sit amet consectetur adipisicing elit. Esse, quisquam."
    },
    {
      id:"3",
      user:"user03",
      date:"12, sep 2023",
      rating:5,
      review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, quisquam."
    }
  ]
  const [reservation, setReservation] = useState({
    reqs_date:"",
    reqs_id:"",
    resv_date: new Date().toISOString().slice(0, 10),
    start_time:new Date().toISOString().slice(11, 16),
    end_time:new Date().toISOString().slice(11, 16),
    guests:"2",
    status:"pending",
    user_email:localStorage.getItem('email'),
    user_name:localStorage.getItem('name'),
    rest_Id:state.restId
  }) 

  // const makeReservation  = async ()=>{
  //   let isReserved = 
  // }

  const handleInputChange = (name, value) => {
    setReservation({
      ...reservation,
      [name]: value,
  });
};
const handleSubmit = async (e) => {
  e.preventDefault();
  let res = await MakeReservation(reservation)
  console.log(reservation);
  console.log(res);
  if(res["status"]=="success"){
    toast.success(res["message"]);
    //setShowModal(false); 
    navigate("/profile")
  }
  else{
    toast.error("Something went wrong!")
    
  }
  // console.log(reservation)
  // console.log(new Date().toISOString().slice(0, 10))
}

  return (
    <div className="h-full">
      <div className="flex justify-center">
        <div className="w-10/12 mt-10">
          <img
            className="h-80 w-full object-cover rounded-lg "
            src={details.image}
            alt=""
          />
          <div className="flex mb-20">
            <div className="w-8/12">
              <div className="mt-5">
                <h2 className="text-xl font-bold pb-4">{details.name}</h2>
                <p className="flex gap-2 pb-2">
                  <IoLocationOutline className="text-xl font-bold" />
                  {details.detailAddress}
                </p>
                <p className="flex gap-2 pb-10">
                  <IoRestaurantOutline className="text-xl font-bold" />
                  {details.cuisineType}
                </p>
              </div>
              <h3 className="text-2xl font-bold pb-2">Description</h3>
              <p className="text-justify">
                {details.description}
              </p>
              <div className="mt-10">
              {/* <Map location={location} zoomLevel={17}/> */}
              </div>
              
              
              <div className="">
              <h3 className="text-xl font-bold mb-5">Reviews</h3>
                {
                  reviews.map((review)=>(
                    <Reviews 
                            key={review.id} 
                            user={review.user}
                            date={review.date}
                            rating={review.rating}
                            review={review.review}
                      
                    />
                  ))
                }
              </div>
            </div>
            <div className="w-1/3 ml-5 mt-5">
              <button
                type="button"
                onClick={() => setShowModal(true)}
                className="px-8 py-3 text-white bg-green-500 hover:bg-green-600 rounded-lg text-lg w-full mb-10"
              >
                Reserve Your Table
              </button>
              <h3 className="pb-2">Open Hours</h3>
              <table className="border shadow-sm w-full">
                <thead>
                  <tr className="bg-green-200 h-5">
                    <th className="font-normal px-3">Day</th>
                    <th className="font-normal px-3">Time</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="h-10 border-b-2 border-b-gray-200 cursor-pointer text-center">
                    <td className="px-3 text-sm font-light">Saturday</td>
                    <td className="px-3">
                      <span className="text-xs bg-green-500 rounded-lg text-white px-2">
                        9:30AM - 10:30PM
                      </span>
                    </td>
                  </tr>
                  <tr className=" h-10 border-b-2 border-b-gray-200 cursor-pointer text-center">
                    <td className="px-3 text-sm font-light">Sunday</td>
                    <td className="px-3">
                      <span className="text-xs bg-green-500 rounded-lg text-white px-2">
                        9:30AM - 10:30PM
                      </span>
                    </td>
                  </tr>
                  <tr className=" h-10 border-b-2 border-b-gray-200 cursor-pointer text-center">
                    <td className="px-3 text-sm font-light">Monday</td>
                    <td className="px-3">
                      <span className="text-xs bg-green-500 rounded-lg text-white px-2">
                        9:30AM - 10:30PM
                      </span>
                    </td>
                  </tr>
                  <tr className=" h-10 border-b-2 border-b-gray-200 cursor-pointer text-center">
                    <td className="px-3 text-sm font-light">Tuesday</td>
                    <td className="px-3">
                      <span className="text-xs bg-green-500 rounded-lg text-white px-2">
                        9:30AM - 10:30PM
                      </span>
                    </td>
                  </tr>
                  <tr className=" h-10 border-b-2 border-b-gray-200 cursor-pointer text-center">
                    <td className="px-3 text-sm font-light">Wednesday</td>
                    <td className="px-3">
                      <span className="text-xs bg-green-500 rounded-lg text-white px-2">
                        9:30AM - 10:30PM
                      </span>
                    </td>
                  </tr>
                  <tr className=" h-10 border-b-2 border-b-gray-200 cursor-pointer text-center">
                    <td className="px-3 text-sm font-light">Thursday</td>
                    <td className="px-3">
                      <span className="text-xs bg-green-500 rounded-lg text-white px-2">
                        9:30AM - 10:30PM
                      </span>
                    </td>
                  </tr>
                  <tr className=" h-10 border-b-2 border-b-gray-200 cursor-pointer text-center">
                    <td className="px-3 text-sm font-light">Friday</td>
                    <td className="px-3">
                      <span className="text-xs bg-green-500 rounded-lg text-white px-2">
                        9:30AM - 10:30PM
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 bg-[#f4f4f4f3]">
            <div className="relative w-8/12 my-6 mx-auto max-w-3xl">
              <div className="border-2 rounded-lg shadow-2xl relative flex flex-col w-8/12 bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-green-300 rounded-t ">
                  <h3 className="text-3xl font-light">Table Reservation</h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <span>
                      <IoCloseCircle className="text-red-600 text-2xl" />
                    </span>
                  </button>
                </div>
                <div className="flex">
                  <div className="relative p-6 flex-auto">
                    <form className="bg-green-200 shadow-md rounded px-8 pt-6 pb-8 w-full">
                      <label className="block text-black text-sm font-normal mb-1">
                        Name
                      </label>
                      <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black mb-3"
                            name="user_name"
                            type="text"
                            value={reservation.user_name}
                            onChange={(e)=>handleInputChange('user_name',e.target.value)}
                            autoFocus={true}
                      />
                      <label className="block text-black text-sm font-normal mb-1">
                        Reservation Date
                      </label>
                      <input
                        type="date"
                        className="shadow appearance-none border rounded w-full py-2 px-1 text-black mb-3"
                        name="resv_date"
                        value={reservation.resv_date}
                        onChange={(e)=>handleInputChange('resv_date',e.target.value)}
                      />
                      <label className="block text-black text-sm font-normal mb-1">
                        Reservation Time
                      </label>
                      <div className="flex gap-3 mb-3">
                        <div className="flex flex-col w-1/2">
                          <p className="text-xs font-semibold mb-2">
                            Start Time
                          </p>
                          <input
                            type="time"
                            className="shadow appearance-none border rounded w-full  py-2 px-1 text-black"
                            name="start_time"
                            value={reservation.start_time}
                            onChange={(e)=>handleInputChange('start_time',e.target.value)}
                          />
                        </div>
                        <div className="flex flex-col w-1/2">
                          <p className="text-xs font-semibold mb-2">End Time</p>
                          <input
                            type="time"
                            className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                            name="end_time"
                            value={reservation.end_time}
                            onChange={(e)=>handleInputChange('end_time',e.target.value)} 
                          />
                        </div>
                      </div>

                      <label className="block text-black text-sm font-normal mb-1">
                        Guests
                      </label>
                      <input
                        type="number"
                        className="shadow appearance-none border rounded w-full py-2 px-1 text-black mb-3"
                        name="guests"
                        value={reservation.guests}
                        onChange={(e)=>handleInputChange('guests',e.target.value)} 
                      />
                      {/* <label className="block text-black text-sm font-normal mb-1">
                        Reserved Table:
                      </label> */}
                    </form>
                  </div>
                  {/* <div className="mt-5 pe-5">
                    <h3 className="mb-3">Availabe Tables</h3>
                    <table className="self-end table-auto  rounded-lg shadow-sm ">
                      <thead>
                        <tr className="bg-green-200 h-5">
                          <th className="font-normal px-3">Table No</th>
                          <th className="font-normal px-3">Time</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="h-10 border-b-2 border-b-gray-200 cursor-pointer">
                          <td className="px-3 text-sm font-light">T1-R-3C</td>
                          <td className="px-3">
                            <span className="text-xs bg-green-500 rounded-lg text-white px-2">
                              8:30PM - 9:30PM
                            </span>{" "}
                            <span className="text-xs bg-green-700 rounded-lg text-white px-2">
                              12-10-2020
                            </span>
                          </td>
                        </tr>
                        <tr className=" h-10 border-b-2 border-b-gray-200 cursor-pointer">
                          <td className="px-3 text-sm font-light">T1-R-3C</td>
                          <td className="px-3">
                            <span className="text-xs bg-green-500 rounded-lg text-white px-2">
                              8:30PM - 9:30PM
                            </span>{" "}
                            <span className="text-xs bg-green-700 rounded-lg text-white px-2">
                              12-10-2020
                            </span>
                          </td>
                        </tr>
                        <tr className=" h-10 border-b-2 border-b-gray-200 cursor-pointer">
                          <td className="px-3 text-sm font-light">T1-R-3C</td>
                          <td className="px-3">
                            <span className="text-xs bg-green-500 rounded-lg text-white px-2">
                              8:30PM - 9:30PM
                            </span>{" "}
                            <span className="text-xs bg-green-700 rounded-lg text-white px-2">
                              12-10-2020
                            </span>
                          </td>
                        </tr>
                        <tr className=" h-10 border-b-2 border-b-gray-200 cursor-pointer">
                          <td className="px-3 text-sm font-light">T1-R-3C</td>
                          <td className="px-3">
                            <span className="text-xs bg-green-500 rounded-lg text-white px-2">
                              8:30PM - 9:30PM
                            </span>{" "}
                            <span className="text-xs bg-green-700 rounded-lg text-white px-2">
                              12-10-2020
                            </span>
                          </td>
                        </tr>
                        <tr className=" h-10 border-b-2 border-b-gray-200 cursor-pointer">
                          <td className="px-3 text-sm font-light">T1-R-3C</td>
                          <td className="px-3">
                            <span className="text-xs bg-green-500 rounded-lg text-white px-2">
                              8:30PM - 9:30PM
                            </span>{" "}
                            <span className="text-xs bg-green-700 rounded-lg text-white px-2">
                              12-10-2020
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div> */}
                </div>
                <div className="flex items-center justify-between p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="px-8 py-3 text-white bg-gray-700 hover:bg-gray-900 rounded-lg text-lg mt-5"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Not intersted
                  </button>
                  <button
                    className="px-8 py-3 text-black bg-yellow-300 hover:bg-yellow-500 rounded-lg text-lg mt-5"
                    type="button"
                    onClick={handleSubmit}
                  >
                    Reserve
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
      <Toaster position={"bottom-center"} />
    </div>
  );
};

export default RestaurantDetails;
