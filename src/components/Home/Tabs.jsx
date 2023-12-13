import React, { useState } from 'react'
import Tab from './Tab';

const Tabs = () => {
const [activeTab, setActiveTab] = useState(1);

const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
    };

  return (
    <div className='flex flex-col items-center h-auto'>
      <div className='w-6/12'>
        <div className="flex bg-[#d9efe2] px-3 py-3 rounded-lg mb-8">
          <Tab label="Online Bookings" isActive={activeTab === 1} onClick={() => handleTabClick(1)} />
          <Tab label="Manage Reservations" isActive={activeTab === 2} onClick={() => handleTabClick(2)} />
          <Tab label="Manage Tables" isActive={activeTab === 3} onClick={() => handleTabClick(3)} />
          <Tab label="Guest Reviews" isActive={activeTab === 4} onClick={() => handleTabClick(4)} />
        </div>
      </div>
      <div className='w-9/12'>  
        {/* Content for each tab */}
        {activeTab === 1 && 
          <div className='flex justify-center'>
              <div className='w-8/12'>
                <h1 className='text-xl mb-2'>Online Bookings</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim veritatis minus maiores quas voluptas cupiditate saepe quisquam nihil autem, aliquid ad adipisci deleniti ullam provident ea molestiae deserunt? Quod, earum.</p>
              </div>
              <div className='w-4/12'>
                <img src="/feature-image/booking.svg" alt="" />
              </div>
          </div>
        }
        {activeTab === 2 && 
          <div className='flex justify-center'>
          <div className='w-8/12'>
            <h1 className='text-xl mb-2'>Manage Reservations</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim veritatis minus maiores quas voluptas cupiditate saepe quisquam nihil autem, aliquid ad adipisci deleniti ullam provident ea molestiae deserunt? Quod, earum.</p>
          </div>
          <div className='w-4/12'>
            <img src="/feature-image/booking.svg" alt="" />
          </div>
          </div>
        }
        {activeTab === 3 &&   
          <div>
            <h1 className='text-xl mb-2'>Manage Tables</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit nobis numquam, similique omnis et doloribus laborum perspiciatis odit repellendus totam veritatis rem impedit odio nostrum accusantium. Provident temporibus nobis soluta, porro fugit dolor nihil, dignissimos aperiam nulla id incidunt ratione?</p>
          </div>
        }
        {activeTab === 4 &&   
          <div>
            <h1 className='text-xl mb-2'>Guest Reviews</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit nobis numquam, similique omnis et doloribus laborum perspiciatis odit repellendus totam veritatis rem impedit odio nostrum accusantium. Provident temporibus nobis soluta, porro fugit dolor nihil, dignissimos aperiam nulla id incidunt ratione?</p>
          </div>
        }
      </div>
    </div>
  )
}

export default Tabs