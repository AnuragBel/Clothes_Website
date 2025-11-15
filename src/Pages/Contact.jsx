import React from 'react'
import Title from '../Components/Title'
import { assets } from '../assets/assets'
import Newsletter from '../Components/Newsletter'

function Contact() {
  return (
    <div>
      
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-20'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img}/>
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>OUR STORE -</p>
          <p className='text-gray-600'>57627 Willms Station <br/> Suite 350, Washington, USA</p>
          <p className='text-gray-600'>Tel: (415) 555-0132 <br/> Email: admin@Forever.com</p>
          <p className='font-semibold text-gray-600'>Careers at Forever</p>
          <p className='text-gray-600'>Learn more about our teams and job openings.</p>
          <button className='border border-black px-8 py-4 text-sm sm:rounded hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>

      <Newsletter/>
    </div>
  )
}

export default Contact
