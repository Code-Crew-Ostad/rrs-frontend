import React, { useEffect, useState } from 'react';
import HomeNavBar from '../components/Home/HomeNavbar';
import HeroSection from '../components/Home/HeroSection';
import TrustedCompanies from '../components/Home/TrustedCompanies';
import Features from '../components/Home/Features';
import Clients from './../components/Home/Clients';
import GetStarted from '../components/Home/GetStarted';
import FooterSection from '../components/Home/FooterSection';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  useEffect(()=>{
    if(localStorage.getItem('email') && localStorage.getItem('type')=='user'){
      navigate("/feed")
    }
    else if(localStorage.getItem('email') && localStorage.getItem('type')=='owner'){
      navigate("/restaurant/dashboard")
    }
    else{
      navigate("/")
    }
  },[])
    return (
      <>
        <HomeNavBar/>
        <HeroSection  />
        <TrustedCompanies/>
        <Features/>
        <Clients/>
        <GetStarted/>
        <FooterSection/>
      </>
    );
};

export default HomePage;