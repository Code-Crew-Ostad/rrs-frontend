import React from 'react'

const UserInfo = () => {
  return (
    <>
        <div className='mt-5'>
            <p className='mb-2'>{localStorage.getItem('name')}</p>
            <p>{localStorage.getItem('email')}</p>
        </div>
    </>
  )
}

export default UserInfo