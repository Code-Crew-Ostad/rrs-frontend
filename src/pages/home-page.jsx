import React, { useState } from 'react';
import HomeNavBar from '../components/Home/HomeNavbar';
import HeroSection from '../components/Home/HeroSection';
import TrustedCompanies from '../components/Home/TrustedCompanies';
import Features from '../components/Home/Features';
import Clients from './../components/Home/Clients';
import GetStarted from '../components/Home/GetStarted';
import FooterSection from '../components/Home/FooterSection';

const HomePage = () => {
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