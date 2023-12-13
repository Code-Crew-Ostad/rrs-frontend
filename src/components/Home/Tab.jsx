import React, { useState } from 'react';

const Tab = ({ label, isActive, onClick }) => {
    const tabClasses = `cursor-pointer py-2 px-4 rounded-lg font-medium ${
        isActive ? 'bg-[#f6f6f6] text-gray-900 drop-shadow-lg ' : 'text-gray-900 border-transparent'
    }`;
    return (
    <div className={tabClasses} onClick={onClick}>
        
        {label}
    </div>
    );
}

export default Tab