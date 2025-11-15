import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {

    const { search , setSearch , showSearch , setShowSearch } = useContext(ShopContext);
    const [visible,setVisible] = useState(false)
    const location = useLocation(); //uselocation is used to inherit any functions or state in specific location

    // It displays the search bar only on the collection page
    useEffect(()=>{
        // Here we inherit search bar in collection page
        if(location.pathname.includes('collection')){
            setVisible(true);
        }
        else{
            setVisible(false);
        }
    },[location])

    return showSearch && visible ? ( //If this both state will true then the search bar will be visible
    <div className='text-center'>
        {/* for  Search Box  */}
        <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2'>
            <input value={search} onClick={(e)=> setSearch(e.target.value)} className='flex-1 outline-none bg-inherit text-large' type='text' placeholder='Search in Collections'/>
            <img className='w-4' src={assets.search_icon} />
        </div>
        <img onClick={(e)=> setShowSearch(false)} className='inline w-3 cursor-pointer' src={assets.cross_icon} />
    </div>
  ) : null
}

export default SearchBar
