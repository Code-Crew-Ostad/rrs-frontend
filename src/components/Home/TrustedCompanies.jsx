import React from 'react'
import img1 from '../../../public/company-logos/logo-1.svg'
import img2 from '../../../public/company-logos/logo-2.svg'
import img3 from '../../../public/company-logos/logo-3.svg'
import img4 from '../../../public/company-logos/logo-4.svg'
import img5 from '../../../public/company-logos/logo-5.svg'
import img6 from '../../../public/company-logos/logo-6.svg'
import img7 from '../../../public/company-logos/logo-7.svg'
import img8 from '../../../public/company-logos/logo-8.svg'

const TrustedCompanies = () => {
  return (
    <div className='flex flex-col items-center h-96'>
        <h1 className='text-2xl mb-20'>Trusted by Country's best Restaurants in over 30 districts</h1>

        <div className='marquee-container w-full'>
            <div className='flex marquee gap-28'>
                <img src={img1} alt="" className='w-36' />
                <img src={img2} alt="" className='w-20' />
                <img src={img3} alt="" className='w-20' />
                <img src={img4} alt="" className='w-20' />
                <img src={img5} alt="" className='w-20' />
                <img src={img6} alt="" className='w-20' />
                <img src={img7} alt="" className='w-20' />
                <img src={img8} alt="" className='w-20' />
            </div>
        </div>
    </div>
  )
}

export default TrustedCompanies