import axios from "axios";
import unauthorized from "../utils/unauthorized.js";

//let BASEURL = "http://localhost:5000";
let BASEURL = "https://rrs-backend-kappa.vercel.app";

// Registration
export async function UserRegistrationRequest(
  userType,
  email,
  firstName,
  lastName,
  mobile
) {
  try {
    let URL = BASEURL + "/api/v1/UserRegistration";
    let reqBody = {
      firstName: firstName,
      lastName: lastName,
      mobile: mobile,
      userType: userType,
      email: email,
      password: "",
    };
    let result = await axios.post(URL, reqBody,{
      headers: {
        'Content-Type': 'application/json'
      }});
    let data = result.data;
    return data;
  } catch (e) {
    return false;
  }
}
// Registration Verification
export async function VerifyRegistrationRequest(email, otp, password) {
  try {
    let URL = BASEURL + "/api/v1/VerifyRegistration";
    let reqBody = {
      password: password,
      email: email,
      otp: otp,
    };
    let result = await axios.post(URL, reqBody,{
      headers: {
        'Content-Type': 'application/json'
      }});
    let data = result.data;

    return data;
  } catch (e) {
    return false;
  }
}
// Login
export async function UserLoginRequest(email, password) {
  try {
    let URL = BASEURL + "/api/v1/UserLogin";
    let reqBody = {email:email, password:password};
    let result = await axios.post(URL, reqBody);
    let data = result.data;
    return data;
  } catch (e) {
    return e;
  }
}
// Logout
export  async function UserLogout() {
  try {
      let URL=BASEURL+'/api/v1/UserLogout';
      let result=await axios.get(URL);
      if(result.data['status']==="success")
      return true
  }
  catch (e) {
      unauthorized(e.response.status);
      return false
  }
}
// Add Main (New) Restaurant With Image
export async function AddNewRestaurantwImage(formData ) {
  try {
    let URL = BASEURL + "/api/v1/saveRestaurantwImage";
    let response = await axios.post(URL, formData,{
      headers: {
        'Content-Type': 'multipart/form-data'
      }});
    let data = response.data;
    console.log(data);
    return data;
  } catch (error) {
    return error;
  }
}
// Add Main (New) Restaurant with out image
export async function AddNewRestaurantwoImage(formData ) {
  try {
    let URL = BASEURL + "/api/v1/saveRestaurantwoImage";
    let response = await axios.post(URL, formData,{
      headers: {
        'Content-Type': 'application/json'
      }});
    let data = response.data;
    console.log(data);
    return data;
  } catch (error) {
    return error;
  }
}
// Get Main Restaurant by Mail
export async function GetMainRestaurantByMail(email){
  try {
    let URL = BASEURL+"/api/v1/getMainRestaurantByEmail"
    let reqBody={
      email:email,
      isBranch: false,
    }
    let response = await axios.post(URL,reqBody);
    return response.data[0];
  } catch (error) {
    return error;
  }
}
// Update Main Restaurant
export async function UpdateMainRestaurant(formData ) {
  try {
    let URL = BASEURL + "/api/v1/createRestaurant";
    let response = await axios.post(URL, formData,{
      headers: {
        'Content-Type': 'multipart/form-data'
      }});
    let data = response.data;
    console.log(data);
    return data;
  } catch (error) {
    return error;
  }
} 
// Get All Restaurants
export async function GetAllRestaurants(){
  try {
    let URL = BASEURL+"/api/v1/getAllRestaurants"
    // let reqBody={
    //   email:email,
    //   isBranch: false,
    // }
    let response = await axios.get(URL);
    console.log(response.data)
    return response.data;
  } catch (error) {
    return error;
  }
}
//Get Restaurants By Email
export async function GetRestaurantsByEmail(email){
  try {
    let URL = BASEURL+"/api/v1/getRestaurantsByEmail"
    // let reqBody={
    //   email:email,
    // }
    let response = await axios.post(URL, email);
    console.log(response.data)
    return response.data;
  } catch (error) {
    return error;
  }
}
//Get Restaurant Brnaches By Email
export async function GetRestaurantBranchesByEmail(email){
  try {
    let URL = BASEURL+"/api/v1/getRestaurantsBranchesByEmail"
    let reqBody={
      email:email,
    }
    let response = await axios.post(URL, reqBody);
    console.log(response.data)
    return response.data;
  } catch (error) {
    return error;
  }
}
// Get Restaurant details by ID
export async function GetRestaurantDetailById(restId){
  try {
    let URL = BASEURL+"/api/v1/getRestaurantById"
    let reqBody={
      _id:restId,
      // isBranch: false,
    }
    let response = await axios.post(URL,reqBody);
    console.log(response.data)
    return response.data;
  } catch (error) {
    return error;
  }
}
//Make a Reservation
export async function MakeReservation(reservations) {
  try {
    let URL = BASEURL + "/api/v1/makeReservation";
    let response = await axios.post(URL, reservations,{
      headers: {
        'Content-Type': 'application/json'
      }});
    let data = response.data;
    console.log(data);
    return data;
  } catch (error) {
    return error;
  }
}
// Get All Reservations By User
export async function GetAllReservationsByUserMail(email){
  try {
    let URL = BASEURL+"/api/v1/getAllReservationsUser"
    let reqBody={
      email:email,
      //isBranch: false,
    }
    let response = await axios.post(URL,reqBody);
    console.log(response.data)
    return response.data;
  } catch (error) {
    return error;
  }
}
// Get Reservations by Restaurant ID
export async function GetReservationsByRestId(restId){
  try {
    let URL = BASEURL+"/api/v1/getReservationsByRestId"
    let reqBody={
      rest_Id:restId,
      //isBranch: false,
    }
    let response = await axios.post(URL,reqBody);
    console.log(response.data)
    return response.data;
  } catch (error) {
    return error;
  }
}
// Save timings for Restaurant
export async function SaveTimings(restId) {
  try {
    let URL = BASEURL + "/api/v1/saveTimings";
    let reqBody={
      rest_Id:restId,
    }
    let response = await axios.post(URL, reqBody);
    let data = response.data;
    console.log(data);
    return data;
  } catch (error) {
    return error;
  }
}
// Save Business Hours for Restaurant
export async function SaveBusinessHours(restId, businessHours) {
  try {
    let URL = BASEURL + "/api/v1/saveBusinessHours";
    let reqBody={
      rest_Id:restId,
      businessHours: businessHours
    }
    let response = await axios.post(URL, reqBody);
    let data = response.data;
    console.log(data);
    return data;
  } catch (error) {
    return error;
  }
}