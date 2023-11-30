import axios from "axios";
import unauthorized from "../utils/unauthorized.js";

let BASEURL="http://localhost:5000";

export  async function UserRegistrationRequest(userType,email,firstName,lastName,mobile) {
    try {

        let URL=BASEURL+'/api/v1/UserRegistration';
        let reqBody = {
            
            "firstName":firstName,
            "lastName":lastName, 
            "mobile":mobile,
            "userType":userType, 
            "email":email,
            "password":""
        };
        let result=await axios.post(URL, reqBody);
        let data=result.data
        return data;
    }
    catch (e) {
        return false
    }
}

export  async function VerifyRegistrationRequest(email,otp,password) {
    try {

        let URL=BASEURL+'/api/v1/VerifyRegistration';
        let reqBody = {
            "password":password,
            "email":email,
            "otp":otp
        };
        let result=await axios.post(URL, reqBody);
        let data=result.data

        return data;
    }
    catch (e) {
        return false
    }
}

export  async function UserLoginRequest(userType,email,firstName,lastName) {
    try {

        let URL=BASEURL+'/api/v1/UserLogin/'+email;
        let reqBody = {userType,firstName,lastName};
        let result=await axios.get(URL, reqBody);
        let data=result.data
        return data;
    }
    catch (e) {
        return false
    }
}