import React, { useContext, useState } from 'react'
import {assets} from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext';

const Navbar = () => {

        const [visible,setVisible] = useState(false);

        // This is to display search bar on the webpage 
        // Whenever we click on search icon the search bar is displayed
        const {setShowSearch , getCartCount} = useContext(ShopContext);

  return (
    <div className='flex items-center justify-between py-5 font-medium'>
    
    {/* When we click to the website logo it redirect to the home page */}
    <Link to='/'><img src={assets.logo} className='w-36' alt=''/></Link>
    
    <ul className='hidden sm:flex gap-5 text-sm text-grey-700'>

        <NavLink to='/' className='flex flex-col items-center gap-1'>
        <p>HOME</p>{/*For button */}
        <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/> {/*For Underline */}
        </NavLink>

        <NavLink to='/collection' className='flex flex-col items-center gap-1'>
        <p>COLLECTION</p>{/*For button */}
        <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/> {/*For Underline */}
        </NavLink>

        <NavLink to='/about' className='flex flex-col items-center gap-1'>
        <p>ABOUT US</p>{/*For button */}
        <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/> {/*For Underline */}
        </NavLink>

        <NavLink to='/contact' className='flex flex-col items-center gap-1'>
        <p>CONTACT</p>{/*For button */}
        <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/> {/*For Underline */}
        </NavLink>

    </ul>

    <div className='flex item-center gap-6'>
        <img onClick={()=>setShowSearch(true)} src={assets.search_icon} className='w-5 cursor-pointer' alt=''/>  {/*Search Icon*/}

        {/*-------------- This code is of Profile icon ----------------- */}
        <div className='group relative'>
          <Link to='/login'><img className='w-5 cursor-pointer' src={assets.profile_icon} alt=''/> {/*Profile Icon*/}</Link>
            <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'> {/*Drop down list */}
              <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                <p className='cursor-pointer hover:text-black'>My profile</p>
                <p className='cursor-pointer hover:text-black'>Orders</p>
                <p className='cursor-pointer hover:text-black'>Logout</p>
              </div>
            </div>
        </div>
        <Link to='/cart' className='relative'>
              <img src={assets.cart_icon} className='w-5 min-w-5'alt=''/> {/*Cart Icon*/}
              <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4
              bg-black text-white ascept-square rounded-full text-[8px]'>{getCartCount()}</p>
            </Link>
            <img onClick={()=>setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden'/>
            {/* Sidebar menu for smaller screens */}
    </div>
            {/* Sidebar menu for smaller screens */}
        <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? "w-full" : "w-0"}`}>
          <div className='flex flex-col text-gray-600'>
            <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3'>
              <img className='h-4 rotate-180' src={assets.dropdown_icon} alt='' />
              <p className='cursor-pointer'>Back</p>
          </div>
          {/* Now we give links for Sidebar menu to ridirect anywhere */}
          <NavLink onClick={()=>setVisible(false)} className='py-2 p1-6 border' to='/'>HOME</NavLink>
          <NavLink onClick={()=>setVisible(false)} className='py-2 p1-6 border' to='/collection'>COLLECTION</NavLink>
          <NavLink onClick={()=>setVisible(false)} className='py-2 p1-6 border' to='/about'>ABOUT US</NavLink>
          <NavLink onClick={()=>setVisible(false)} className='py-2 p1-6 border' to='/contact'>CONTACT</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Navbar
