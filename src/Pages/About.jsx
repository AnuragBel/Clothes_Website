import React from 'react'
import Title from '../Components/Title'
import { assets } from '../assets/assets'
import Newsletter from '../Components/Newsletter'

function About() {
  return (
    <div>
      
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='my-4 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img}/>
        <div className='flex flex-col justify-center gap-2 md:w-2/4 text-gray-700'>
        <hr className='w-full border-none h-[1.5px] bg-gray-700'/>
          <b>Fashion that Speaks You:-</b>
        <p>Welcome to [Forever], where style meets substance. We're more than just an online clothing store — we're a community built around bold self-expression, confidence, and individuality.
        Founded in [2000], [Forever] Company was born out of a simple idea: fashion should empower. Whether you're dressing for a boardroom, a brunch, or your boldest night out, we’re here to make sure you look and feel your best.</p>
        <hr className='w-full border-none h-[1.5px] bg-gray-700'/>

          <b>Our Mission :-</b>
          <p>To help people express themselves through fashion while making shopping easy, affordable, and inspiring.</p>
          <p>Join the Movement</p>
          <p>We’re proud to serve customers across [region and globally], with fast shipping, easy returns, and a growing online community. Follow us on social media and tag us in your looks — we love seeing how you wear [Forever].</p>
          <hr className='w-full border-none h-[1.5px] bg-gray-700'/>

          <p>Thank you for being a part of our journey.
          Let’s make fashion fun, fearless, and for everyone.</p>
          <hr className='w-full border-none h-[1.5px] bg-gray-700'/>

        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-10'>
        <div className='border px-10 md:px-10 py-8 sm:py-10 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600' >At [Forever], we believe quality is more than just a promise — it's our standard. Every piece of clothing we offer goes through a thorough Quality Assurance process to ensure that you receive only the best.</p>
        </div>
        <div className='border px-10 md:px-10 py-8 sm:py-10 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600' >At [Forever], we make shopping for fashion as easy and enjoyable as possible — because we know your time is valuable.</p>
        </div>
        <div className='border px-10 md:px-10 py-8 sm:py-10 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600' >At [Forever], our customers are at the heart of everything we do. We're here to make your shopping experience not just easy — but exceptional.</p>
        </div>
      </div>
      <hr className='w-full mb-5 border-none h-[1.5px] bg-gray-700'/>
      <Newsletter/>
    </div>
  )
}

export default About
