import React from 'react';

import img1 from '../../assets/img/play.svg'
import img2 from '../../assets/img/apple.svg'
import  img3 from '../../assets/img/Screenshot_1-removebg-preview.png'
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div className='mt-20'>
            {/* </div><div className="grid grid-cols-2 gap-4 bg-slate-700 text-white bg-gradient-to-r from-green-900 from-10% via-green-600 via-50% to-green-600 to-90%  "> */}
            
            <div className="grid grid-cols-2 gap-4 text-white bg-gradient-to-r from-[#636363] from-10% via-[#636363] via-50% to-[#636363] to-90%  ">
                <div className=' px-14 pt-5 '>
                    <h1 className=' text-[25px] font-normal mb-5'> GET REST </h1>
                        <p className='text-[15px]'> Chattogram Dhaka Rajshahi Khulna Sylhet Barisal Rangpur Cox's Bazar Saint Martin
                        Khagrachori Rangamati Bandarban Mymensingh Pabna Noakhali Comilla Khushtia Jessore
                        Jamalpur Joypurhat Satkhira Pirojpur Barguna Sunamganj Habiganj Maulavibazar
                        Jhalokati 
                        </p>
                    <div className="grid grid-cols-4 pt-5 ">
                        <div>
                            <img src={img1} alt=''/>
                        </div>
                        <div>
                            <img src={img2} alt=''/>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 pt-5 ">
                        <div>
                            <ul>
                                <li>About Get Rest</li>
                                <li>Careers</li>
                                <li>Blog</li>
                            </ul>
                        </div>
                        <ul>
                            <li>Support</li>
                            <li>Contact us</li>
                        </ul>
                        <div>
                            <ul>
                                <li>Terms of service</li>
                                <li>Privacy policy</li>
                            </ul>


                        </div>

                    </div>

                </div>



                <div className="px-10 pt-20" >
                    {/* <div className="grid grid-cols-2 pl-6 pt-5 shadow-2xl rounded-3xl drop-shadow-md bg-green-700  shadow-green-500"> */}
                    <div className="grid grid-cols-2 pl-6 pt-5 rounded-3xl drop-shadow-md bg-[#545456]  shadow-[#706fa1]">
                        <div className=''>
                            <h1 className='mb-4 text-2xl'>GET REST for Restaurants</h1>
                            <p className='text-[15px] text-left mb-10'>
                                Get Rest's reservation management platform empowers
                                restaurants by driving footfall, improving table
                                management and increasing daily revenue.
                            </p>
                            <Link to="/" className="btn mt-8 bg-amber-600 px-4 py-2 rounded-md shadow-md hover:shadow-none">READ MORE</Link>
                        </div>

                        <div>
                            <img className='drop-shadow-xl' src={img3} alt=''/>
                        </div>
                    </div>

                </div>
                <h1 className='px-14 pb-10'>Connect with us on  Facebook • Instagram • E-mail</h1>
                <div className='divide-dashed'></div>
            </div>
        </div>
    );
};

export default Footer;