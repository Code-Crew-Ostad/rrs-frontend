import React, { useState } from 'react'
import UserTable from './UserTable';
import UserInfo from './UserInfo';

const tabs = [
  { id: 1, label: 'Reservations', content: <UserTable/> },
  { id: 2, label: 'Profile', content: <UserInfo/>},
  { id: 3, label: 'Payments', content: 'No payment information to show!' },
];

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className=' flex flex-col w-8/12 ml-20 mt-10 mb-20'>
      <div className="mb-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`py-2 px-4 text-gray-600 focus:outline-none ${
              activeTab.id === tab.id ? 'border-b-2 border-blue-500' : ''
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="border rounded p-4">
        <p className="text-lg font-bold">{activeTab.label}</p>
        <p>{activeTab.content}</p>
      </div>
    </div>
  )
}

export default UserProfile