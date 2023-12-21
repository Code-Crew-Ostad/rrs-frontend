import axios from "axios";
import React, { useEffect, useState } from "react";
import { AddNewRestaurantwImage,AddNewRestaurantwoImage, GetMainRestaurantByMail } from "../../api/apiRequest";
import toast, { Toaster } from "react-hot-toast";
import { useGeolocated } from "react-geolocated";
import { FaLocationDot } from "react-icons/fa6";

const Profile = () => {

  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
  useGeolocated({
      positionOptions: {
          enableHighAccuracy: false,
      },
      userDecisionTimeout: 5000,
  });
  
  const [formData, setFormData] = useState({
    userID:"",
    name: "",
    image:"",
    image_public_id:"",
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
  const [imageChanged, setImageChanged] = useState("");
  const [imageLoaded, setImageLoaded] = useState("");
  const [isInputDisabled, setIsInputDisbaled] = useState(true);

  useEffect(()=>{
    FillForm();
  },[])
  const handleToggleDisbale = ()=>{
      setIsInputDisbaled(!isInputDisabled)
  };
  const FillForm = async () =>{
    let restInfo = await GetMainRestaurantByMail(localStorage.getItem('email'))
    setFormData({
      userID:restInfo['_id'],
      name: restInfo['name'],
      image:restInfo['image'],
      image_public_id:restInfo['image_public_id'],
      mobileNo: restInfo['mobileNo'],
      cuisineType: restInfo['cuisineType'],
      detailAddress: restInfo['detailAddress'],
      area: restInfo['area'],
      description: restInfo['description'],
      longitude: restInfo['longitude'],
      latitude: restInfo['latitude'],
      email: localStorage.getItem('email'),
      isBranch: false,
      isActive: true,
    })
    setImageChanged(restInfo['image']);
  };
  const handleFileChange=(e)=>{
    //if(e.target.files[0]=="")
    //URL.createObjectURL(e.target.files[0])
    setFormData({
      ...formData, 
      image: e.target.files[0]
    });
    setImageLoaded(URL.createObjectURL(e.target.files[0]))
  };
  const handleInputChange = (name, value) => {
      setFormData({
        ...formData,
        [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    if(formData.name.length < 1){
      toast.error("Restaurant Name Required")
      return false;
    }else if(formData.email !== localStorage.getItem('email')){
      toast.error("Login to save!")
      return false;
    }else if(formData.image == null){
      toast.error("Select an image to upload")
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

    if(formData.image===imageChanged){
      const res = await AddNewRestaurantwoImage(restData);
      if(res["status"]=="success"){
        toast.success(res["message"]);
        setIsInputDisbaled(true);
        FillForm();
      }
      else{
        toast.error("Something went wrong!")
        
      }
    }
    else{
      const res = await AddNewRestaurantwImage(restData);
      if(res["status"]=="success"){
        toast.success(res["message"]);
        setIsInputDisbaled(true);
        FillForm();
      }
      else{
        toast.error("Something went wrong!")
        
      }
    }
      
  }
  const handleGeoLocation = async ()=>{
  setFormData({...formData, longitude:coords.longitude, latitude: coords.latitude})
  }

  return (
    <>
      <div className="flex flex-col ">
        <div className="p-5">
          <form className="flex bg-[f4f4f4] shadow-md rounded px-8 pt-6 pb-8 w-full gap-5">
            <div className="w-1/2 text-base font-light">
              <label className="block text-black mb-1">Restaurant Name</label>
              <input
                className="border border-green-900 rounded-lg w-full py-2 px-1 text-black mb-3"
                disabled={isInputDisabled}
                name="name"
                value={formData.name || ""}
                onChange={(e)=>handleInputChange('name', e.target.value)}
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
                disabled={isInputDisabled}
                name="mobileNo"
                value={formData.mobileNo || ""}
                onChange={(e)=>handleInputChange('mobileNo', e.target.value)}
              />
              <label htmlFor="type" className="block text-black mb-1">
                Type (Cuisine)
              </label>
              <input
                id="type"
                placeholder="e.g. Chinese, Seafood"
                className="border border-green-900 rounded-lg w-full py-2 px-1 text-black mb-3"
                disabled={isInputDisabled}
                name="cuisineType"
                value={formData.cuisineType || ""}
                onChange={(e)=>handleInputChange('cuisineType', e.target.value)}
              />
              <label className="block text-black mb-1">Address</label>
              <input
                type=""
                className="border border-green-900 rounded-lg w-full py-2 px-1 text-black mb-3"
                disabled={isInputDisabled}
                name="detailAddress"
                value={formData.detailAddress || ""}
                onChange={(e)=>handleInputChange('detailAddress', e.target.value)}
              />
              <label className="block text-black mb-1">Area</label>
              <input 
                className="border border-green-900 rounded-lg w-full py-2 px-1 text-black mb-3" 
                disabled={isInputDisabled}
                name="area"
                value={formData.area || ""}
                onChange={(e)=>handleInputChange('area', e.target.value)}
              />
              <label htmlFor="description" className="block text-black mb-1">
                Description
              </label>
              <textarea
                id="description"
                rows="5"
                className="border border-green-900 rounded-lg w-full py-2 px-1 text-black mb-3"
                disabled={isInputDisabled}
                name="description"
                value={formData.description || ""}
                onChange={(e)=>handleInputChange('description', e.target.value)}
              ></textarea>
              <label className="block text-black mb-1">Longitude</label>
              <input 
                className="border border-green-900 rounded-lg w-full py-2 px-1 text-black mb-3" 
                disabled={isInputDisabled}
                name="longitude"
                value={formData.longitude || ""}
                onChange={(e)=>handleInputChange('longitude', e.target.value)}
              />
              <label className="block text-black mb-1">Latitude</label>
              <input 
                className="border border-green-900 rounded-lg w-full py-2 px-1 text-black mb-3" 
                disabled={isInputDisabled}
                name="latitude"
                value={formData.latitude || ""}
                onChange={(e)=>handleInputChange('latitude', e.target.value)}
              />
              <button className="flex gap-2 items-center bg-green-700 text-white hover:bg-green-800 rounded-lg px-2 mb-2" onClick={handleGeoLocation} type="button"><span><FaLocationDot /></span>Get my location</button>
            </div>
            <div className="flex flex-col w-1/2 text-base font-light items-center">
              <div className="w-full h-full pt-5">
                <div className="border m-0 border-amber-500 rounded-xl mb-2 overflow-hidden">
                  <img className="" 
                        src={imageLoaded !==""? imageLoaded:formData.image}
                  />
                </div>
                <input
                  className="file:bg-green-500 file:border-none file:text-white rounded-xl hover:file:bg-green-700 file:cursor-pointer cursor-pointer"
                  type="file"
                  id="image"
                  disabled={isInputDisabled}
                  name="image"
                  accept=".png, .jpg, .jpeg"
                  onChange={handleFileChange}
                />
              </div>
              <button
                className="block bg-yellow-500 text-white font-medium shadow-sm rounded-2xl px-3 py-2 mt-20 hover:shadow-2xl hover:scale-105"
                type="submit"
                disabled={isInputDisabled}
                onClick={handleSubmit}
              >
                Save Changes
              </button>
              {/* ------------------ */}
              <div className="flex flex-col items-center mt-3">
              <label htmlFor="toggle" className="flex items-center cursor-pointer">
                <div className="relative">
                  <input
                    type="checkbox"
                    id="toggle"
                    className="sr-only"
                    checked={isInputDisabled}
                    onChange={handleToggleDisbale}
                  />
                  <div className="block bg-gray-600 w-10 h-4 rounded-full"></div>
                  <div
                    className={`${
                      isInputDisabled ? 'translate-x-7' : 'translate-x-0'
                    } absolute left-0 right-0 top-1 bg-white w-2 h-2 rounded-full transform transition-transform duration-300`}
                  ></div>
                </div>
                <div className="ml-2 text-gray-700 font-medium w-full">{isInputDisabled}</div>
              </label>
            </div>
            {/* ---------------------- */}
            </div>
          </form>
        </div>
        <Toaster position={"top-center"} />
      </div>
    </>
  );
};

export default Profile;
