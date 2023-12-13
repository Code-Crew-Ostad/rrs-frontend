import axios from "axios";
import unauthorized from "../utils/unauthorized.js";

let BASEURL = "http://localhost:5000";

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
    let result = await axios.post(URL, reqBody);
    let data = result.data;
    return data;
  } catch (e) {
    return false;
  }
}

export async function VerifyRegistrationRequest(email, otp, password) {
  try {
    let URL = BASEURL + "/api/v1/VerifyRegistration";
    let reqBody = {
      password: password,
      email: email,
      otp: otp,
    };
    let result = await axios.post(URL, reqBody);
    let data = result.data;

    return data;
  } catch (e) {
    return false;
  }
}

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

export async function AddNewRestaurant(
    // name,
    // image,
    // mobileNo,
    // cuisineType,
    // detailAddress,
    // area,
    // description,
    // longitude,
    // latitude,
    // email,
    // isBranch,
    // isActive
    formData 
) {
  try {
    let URL = BASEURL + "/api/v1/createRestaurant";
    // let reqBody = {
      
    // };
    // let reqBody = {...props}
    let response = await axios.post(URL, formData,{
      headers: {
        'Content-Type': 'multipart/form-data'
      }});
    let data = response.data;
    return data;
  } catch (error) {
    return error;
  }
}
