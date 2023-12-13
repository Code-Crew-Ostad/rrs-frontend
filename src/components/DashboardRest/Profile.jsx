import axios from "axios";
import React, { useState } from "react";
import { AddNewRestaurant } from "../../api/apiRequest";
import toast, { Toaster } from "react-hot-toast";

const Profile = () => {
  
  const [formData, setFormData] = useState({
    name: "",
    image:null,
    mobileNo: "",
    cuisineType: "",
    detailAddress: "",
    area: "",
    description: "",
    longitude: "",
    latitude: "",
    email: localStorage.getItem('email'),
    isBranch: false,
    isActive: true,
  });


const handleFileChange=(e)=>{
  setFormData({
    ...formData, 
    image: e.target.files[0]
  });
};

  const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(formData.name.length < 1){
      toast.error("Restaurant Name Required")
      return false;
    }else if(formData.email !== localStorage.getItem('email')){
      toast.error("Login to save!")
      return false;
    }else if(formData.image == null){
      toast.error("Select a image to upload")
      return false;
    }


    const restData = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      restData.append(key, value);
    });

    //----To check each data
    // for (const pair of restData.entries()) {
    //   console.log(`Key: ${pair[0]}, Value: ${pair[1]}`);
    // }

  // const handleSubmit= async (e)=>{
  //   e.preventDefault();
    // const restData = new FormData();
    // restData.append('name',formData.name);
    // restData.append('image',formData.image);
    // restData.append('mobileNo',formData.mobileNo);
    // restData.append('cuisineType',formData.cuisineType);
    // restData.append('detailAddress',formData.detailAddress);
    // restData.append('area',formData.area);
    // restData.append('description',formData.description);
    // restData.append('longitude',formData.longitude);
    // restData.append('latitude',formData.latitude);
    // restData.append('email',formData.email);
    // restData.append('isBranch',formData.isBranch);
    // restData.append('isActive',formData.isActive);

  
    const res = await AddNewRestaurant(restData);

    if(res["status"]=="success"){
        toast.success(res["message"]);
      }
      else{
        toast.error("Something went wrong!")
      }
    }

  return (
    <>
      <div className="flex flex-col ">
        <div className="p-5">
          <form onSubmit={handleSubmit} className="flex bg-green-200 shadow-md rounded px-8 pt-6 pb-8 w-full gap-5">
            <div className="w-1/2 text-base font-light">
              <label className="block text-black mb-1">Restaurant Name</label>
              <input
                className="border border-green-900 rounded-lg w-full py-2 px-1 text-black mb-3"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
              <label htmlFor="mobileNo" className="block text-black mb-1">
                Mobile No
              </label>
              <input
                type="tel"
                //pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                placeholder="+880-1234-123456"
                id="mobileNo"
                className="border border-green-900 rounded-lg w-full py-2 px-1 text-black mb-3"
                name="mobileNo"
                value={formData.mobileNo}
                onChange={handleInputChange}
              />
              <label htmlFor="type" className="block text-black mb-1">
                Type (Cuisine)
              </label>
              <input
                id="type"
                placeholder="e.g. Chinese, Seafood"
                className="border border-green-900 rounded-lg w-full py-2 px-1 text-black mb-3"
                name="cuisineType"
                value={formData.cuisineType}
                onChange={handleInputChange}
              />
              <label className="block text-black mb-1">Address</label>
              <input
                type=""
                className="border border-green-900 rounded-lg w-full py-2 px-1 text-black mb-3"
                name="detailAddress"
                value={formData.detailAddress}
                onChange={handleInputChange}
              />
              <label className="block text-black mb-1">Area</label>
              <input 
                className="border border-green-900 rounded-lg w-full py-2 px-1 text-black mb-3" 
                name="area"
                value={formData.area}
                onChange={handleInputChange}
              />
              <label htmlFor="description" className="block text-black mb-1">
                Description
              </label>
              <textarea
                id="description"
                rows="5"
                className="border border-green-900 rounded-lg w-full py-2 px-1 text-black mb-3"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
              ></textarea>
              <label className="block text-black mb-1">Longitude</label>
              <input 
                className="border border-green-900 rounded-lg w-full py-2 px-1 text-black mb-3" 
                name="longitude"
                value={formData.longitude}
                onChange={handleInputChange}
              />
              <label className="block text-black mb-1">Latitude</label>
              <input 
                className="border border-green-900 rounded-lg w-full py-2 px-1 text-black mb-3" 
                name="latitude"
                value={formData.latitude}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-col w-1/2 text-base font-light items-center">
              <div className="w-full h-full pt-5">
                <div className="h-1/2 border m-0 border-amber-500 pb-5 rounded-xl mb-2">
                  <img className="" 
                        src=""
                  />
                </div>
                <input
                  className="file:bg-green-500 file:border-none file:text-white rounded-xl hover:file:bg-green-700 file:cursor-pointer cursor-pointer"
                  type="file"
                  id="image"
                  name="image"
                  onChange={handleFileChange}
                />
              </div>
              <button
                className="block bg-yellow-500 text-white font-medium shadow-sm rounded-2xl px-3 py-2 mt-20 hover:shadow-2xl hover:scale-105"
                type="submit"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
        <Toaster position={"top-center"} />
      </div>
    </>
  );
};

export default Profile;
