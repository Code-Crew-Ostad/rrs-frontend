import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    BarChart,
    Rectangle,
} from 'recharts';

const Dashboard = () => {
    useEffect(() => {
        document.title = "Control Panel | Restaurant | Get Rest";
    }, []);
const data = [
    {
        name: 'Page A',
        uv: 590,
        pv: 800,
        amt: 1400,
    },
    {
        name: 'Page B',
        uv: 868,
        pv: 967,
        amt: 1506,
    },
    {
        name: 'Page C',
        uv: 1397,
        pv: 1098,
        amt: 989,
    },
    {
        name: 'Page D',
        uv: 1480,
        pv: 1200,
        amt: 1228,
    },
    {
        name: 'Page E',
        uv: 1520,
        pv: 1108,
        amt: 1100,
    },
    {
        name: 'Page F',
        uv: 1400,
        pv: 680,
        amt: 1700,
    },
    ];

    return (

        <div className='m-5 h-screen' >
            <div className='flex flex-col p-5 w-full rounded-xl shadow-sm border-2 mb-5' >
            <p className='text-3xl font-light mb-5'>1938 Indochine</p>
                <div className=' flex justify-between'>
                    <div className='flex flex-col'>
                        <Link to="/restaurant/reservation"  className='font-bold w-[200px] rounded-lg flex flex-col bg-green-500 gap-2 text-white drop-shadow-md shadow-xl mr-5 mb-5 cursor-pointer'>
                            <div className='rounded-lg flex flex-col p-3 gap-2 '> 
                                <p className='text-base font-normal '>Total Reservation (Today)</p>
                                <p  className=' flex flex-col text-2xl font-normal gap-2 items-center'><span className='p-5 rounded-full'>20</span></p>
                            </div>
                        </Link>
                        <Link to="/restaurant/reservation" className='font-bold w-[200px] rounded-lg flex flex-col bg-red-500 gap-2 text-white drop-shadow-md shadow-xl mr-5 mb-5 cursor-pointer'>
                            <div className='rounded-lg flex flex-col p-3 gap-2'> 
                                <p className='text-base font-normal'>Total Rejected (Today)</p>
                                <p  className=' flex flex-col text-2xl font-normal gap-2 items-center'><span className='p-5 rounded-full'>01</span></p>
                                
                            </div>
                        </Link>
                        <Link to="/restaurant/reservation" className='font-bold w-[200px] rounded-lg flex flex-col bg-yellow-500 text-white drop-shadow-md gap-2  shadow-xl mr-5 mb-5 cursor-pointer'>
                            <div className='rounded-lg flex flex-col p-3 gap-2'> 
                                <p className='text-base font-normal'>Total Pending (Today)</p>
                                <p  className=' flex flex-col text-2xl font-normal gap-2 items-center'><span className='p-5 rounded-full'>15</span></p>
                            </div>                     
                        </Link>
                    </div>
                    <div className='flex'>
                        <ComposedChart
                            width={450}
                            height={250}
                            data={data}
                            margin={{
                                top: 20,
                                right: 20,
                                bottom: 20,
                                left: 20,
                            }}
                        >
                        <CartesianGrid stroke="#f5f5f5" />
                        <XAxis dataKey="name" scale="band" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="uv" barSize={20} fill="#413ea0"/>
                        <Line type="monotone" dataKey="uv" stroke="#ff7300" />
                        </ComposedChart>
                    </div>
                    <div>
                        <BarChart
                            width={450}
                            height={250}
                            data={data}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                            >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="pv" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
                            <Bar dataKey="uv" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
                        </BarChart>
                    </div>
                </div>        
            </div>
            <div className='flex flex-col p-10 w-full rounded-xl shadow-sm border-2' >
            <p className='text-3xl font-light mb-5'>1938 Indochine - Branch 01</p>
                <div className=' flex flex-wrap justify-between'>
                    <Link to="/restaurant/reservation" className='font-bold w-[300px] rounded-lg flex flex-col bg-green-500 gap-2 text-white drop-shadow-md shadow-xl mr-5 mb-5 cursor-pointer'>
                        <div className='rounded-lg flex flex-col p-3 gap-2 '> 
                            <p className='text-lg font-normal '>Total Reservation (Today)</p>
                            <p  className=' flex flex-col text-2xl font-normal gap-2 items-center'><span className='p-5 rounded-full'>10</span></p>
                        </div>
                    </Link>
                    <Link to="/restaurant/reservation" className='font-bold w-[300px] rounded-lg flex flex-col bg-red-500 gap-2 text-white drop-shadow-md shadow-xl mr-5 mb-5 cursor-pointer'>
                        <div className='rounded-lg flex flex-col p-3 gap-2'> 
                            <p className='text-lg font-normal'>Total Rejected (Today)</p>
                            <p  className=' flex flex-col text-2xl font-normal gap-2 items-center'><span className='p-5 rounded-full'>05</span></p>
                            
                        </div>
                    </Link>
                    <Link to="/restaurant/reservation" className='font-bold w-[300px] rounded-lg flex flex-col bg-yellow-500 text-white drop-shadow-md gap-2  shadow-xl mr-5 mb-5 cursor-pointer '>
                        <div className='rounded-lg flex flex-col p-3 gap-2'> 
                            <p className='text-lg font-normal'>Total Pending (Today)</p>
                            <p  className=' flex flex-col text-2xl font-normal gap-2 items-center'><span className='p-5 rounded-full'>08</span></p>
                        </div>
                    </Link>
                </div>        
            </div>
            
        </div>
    

    )
}

export default Dashboard