import React from 'react'

const MailTemplate = () => {


  return (
    <div className='h-vh'>
        <div className='m-5'>
            <form className="flex bg-green-200 shadow-md rounded w-full gap-8">
                <div className='flex flex-col p-2 justify-between w-1/2 text-md font-light'>
                    <div >
                        <label className="block text-black mb-4">
                        <span className='bg-green-500 px-3 py-2 text-lg text-white'>Accept Template</span>
                        </label>
                        <textarea className="border border-green-900 rounded-lg w-full p-2 text-black" rows="15">
                        Dear Sir,
                        Your request for the reservation for table T1-R-3C is successful.
                        Your Table is T1-R-3C and you chose your time from 8:00 PM to 9:00 PM with total 
                        guest of 10.
                        We are eagerly waiting for you to serve. 
                        Thank You.
                        XYZ Restaurant 
                        Abc lane, Dhaka
                        Powered by GET REST APP
                        </textarea>              
                    </div>
                </div>
                <div className='text-base font-light p-2 w-1/2'>
                    <div >
                        <label className="block text-black mb-4">
                        <span className='bg-red-500 px-3 py-2 text-lg text-white'>Reject Template</span>
                        </label>
                        <textarea className="border border-green-900 rounded-lg w-full p-2 text-black" rows="15">
                        Dear Sir,
                        Your request for the reservation for table T1-R-3C was not successful.
                        We are sorry fo the inconveninece. 
                        Thank You.
                        XYZ Restaurant 
                        Abc lane, Dhaka
                        Powered by GET REST APP

                        </textarea>              
                    </div>
                    <div className='flex flex-col gap-4 items-end'>
                        <button className='block bg-yellow-500 text-white font-medium shadow-sm rounded-2xl px-3 py-2 mt-6 hover:shadow-2xl hover:scale-105' type="button">Save Changes</button>          
                    </div>
                </div>
            </form>
        </div> 
    </div>
  )
}

export default MailTemplate