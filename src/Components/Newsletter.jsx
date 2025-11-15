import React from 'react'

const Newsletter = () => {

    const onSubmitHandler = (event) =>{
        event.preventDefault(); // It will not reload the webpage,It can not save the data
    }

  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800'>Subscribe now and get 20% Off</p>
        <p className='text-gray-600 mt-3'>Get 20% off your first order when you subscribe! Plus, be the first to know about new products and sales.
            Become a VIP subscriber! Get special offers, early access to sales, and more.
        </p>

        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
            <input className='w-full sm:flex-1 outline-none' type="email" placeholder='Enter your Email' required />
            <button type='submit' className='bg-black text-white yext-xs px-10 py-4'>SUBSCRIBE</button>
        </form>
    </div>
  )
}

export default Newsletter
