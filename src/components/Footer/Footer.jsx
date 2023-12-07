import React from 'react';

import img1 from '../../assets/img/play.svg'
import img2 from '../../assets/img/apple.svg'
import  img3 from '../../assets/img/Screenshot_1-removebg-preview.png'


const Footer = () => {
    return (
        <div>
            <div className="grid grid-cols-2 gap-4 bg-slate-950 text-white">
                <div className=' px-14 pt-5 '>
                    <h1 className=' text-[25px] italic font-bold'> GET REST </h1>
                    <p className='text-[12px]'> Abu Dhabi Alexandria Amman Aruba Australia Bahrain Beirut Cairo Canada
                        Cyprus Doha Dubai Eastern Province Global Jamaica Jeddah Kenya Kuwait
                        Mauritius Mexico Muscat Northern Emirates Riyadh Singapore United Kingdom
                        United States </p>
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
                               <li>About Eat App</li>
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



                <div className="px-10 pt-20  " >
                    <div className="grid grid-cols-2 pl-6 pt-5 bg-emerald-700 rounded-lg">
                        <div>
                            <h1 className=''>GET REST for restaurants</h1>
                            <p className='text-[13px]'>
                                Eat's reservation management platform empowers
                                restaurants by driving footfall, improving table
                                management and increasing daily revenue.
                            </p>
                            <button className="btn btn-accent">Accent</button>
                        </div>

                        <div>
                            <img src={img3} alt=''/>
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