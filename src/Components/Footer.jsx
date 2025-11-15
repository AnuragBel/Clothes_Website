import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-10 text-sm'>

        <div>
            <img className='mb-5 w-32' src={assets.logo}/>
            <p className='w-full text-gray-700'>
                Discover fashion that fits your lifestyle. At Forever, we blend quality, comfort, and style to bring you clothing you'll love to wear every day. Whether you're dressing up or keeping it casual, we've got you covered. Thank you for shopping with us!
            </p>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-700'>
                <li>Home</li>
                <li>About US</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-700'>
                <li>+1-212-649-7827</li>
                <li>Contact@forever.com</li>
            </ul>
        </div>
    </div>

        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2025@ forever.com - ALL Right Reversed</p>
        </div>

    </div>
    )
}

export default Footer;
