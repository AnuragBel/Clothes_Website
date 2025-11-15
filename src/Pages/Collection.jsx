import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { assets } from '../assets/assets';
import Title from '../Components/Title';
import Productitem from '../Components/Productitem';


function Collection() { 

  // We want to get the data of all products using const API
  const { products , search , showSearch } = useContext(ShopContext);
  const [showfilter,setShowfilter] = useState(false);
  const [filterProducts,setFilterProducts] = useState([]);

  // ----------------- Adding logic to the filters -----------------------
  const [category,setCategory] = useState([]); 
  const [subCategory,setSubCategory] = useState([]);

  // for Sorting
  const [sortType,setSortType] = useState('relavent');

    // for Category
  const toggleCategory = (e) => {
    
    if (category.includes(e.target.value)){
      setCategory(prev=> prev.filter(item => item !== e.target.value))
    }
    else{
      setCategory(prev => [...prev,e.target.value])
    }
  }

    // for Subcategory
    const toggleSubCategory = (e) =>{

      if (subCategory.includes(e.target.value)){
      setSubCategory(prev=> prev.filter(item => item !== e.target.value))
    }
    else{
      setSubCategory(prev => [...prev,e.target.value])
    }
  }

  // We run applyfilter function whenever the category and subcategory get updated
  const applyFilter = () => {

    let productsCopy = products.slice();

    // This is for Search bar
    if ( showSearch && search ) {
      productsCopy = productsCopy.filter(item => item.name.toLowercase().includes(search.toLowercase()))
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory));
    }

    setFilterProducts(productsCopy)
  }

  // For sorting the products
  const sortProduct = () => {
    // fp = filterProduct
    let fpCopy = filterProducts.slice();

    switch (sortType) {
      case 'low-high':
        setFilterProducts(fpCopy.sort((a,b)=>(a.price - b.price)));
        break;

      case 'high-low':
        setFilterProducts(fpCopy.sort((a,b)=>(b.price - a.price)));
        break;

      default:
        applyFilter();
        break;
    }
  }

  useEffect(() => {
    applyFilter();
  },[category,subCategory,search,showSearch]);

  useEffect(() => {
      sortProduct();
  },[sortType]) //When we change the sort type then this function will executed

  // Logic for filter ^

  // It only use for console log
  // useEffect(()=>{
  //   console.log(category);
  // },[category])

  // useEffect(()=>{   
  //   console.log(subCategory);
  // },[subCategory])


  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      
      {/* filter Options */}
      {/* onClick={()=>setShowfilter(!showfilter)} = If it false it will make it true, if it is true it will make it false*/}
      {/* If it is closed it make it open, If it is opened it make it closed in phone screen only */}
      <div className='min-w-60'>
        <p onClick={()=>setShowfilter(!showfilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS :
          {/* img tag is for phone */}
          <img className={`h-3 sm:hidden ${showfilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon}/>
        </p>

      {/* For filters =  */}
      {/* Category filter */}
      {/* {}-used for dynamic classname that will be updated using the class variable */}
      <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showfilter ? '' : 'hidden'} sm:block`}>
        <p className='mb-3 text-sm font-medium'>CATEGORIES :</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Men'} onChange={toggleCategory}/>MEN
            </p>

            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Women'} onChange={toggleCategory}/>WOMEN
            </p>

            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Kids'} onChange={toggleCategory}/>KIDS
            </p>
          </div>
      </div>

      {/* SubCategory filter */}
      <div className={`border border-gray-300 p-5 py-3 my-6 ${showfilter ? '' : 'hidden'} sm:block`}>
        <p className='mb-3 text-sm font-medium'>TYPES :</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Topwear'} onChange={toggleSubCategory}/>TOPWEAR
            </p>

            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Bottomwear'} onChange={toggleSubCategory}/>BOTTOMWEAR
            </p>

            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Winterwear'} onChange={toggleSubCategory}/>WINTERWEAR
            </p>
          </div>
      </div>
      </div>

      {/* Right Side */}
      <div className='flex-1'>

        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'ALL'} text2={'COLLECTIONS'}/>

          {/* Product sort */}
          <select onChange={(e)=>setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
            <option value="relevant">Sort by : Relavent</option>
            <option value="low-high">Sort by : low-high</option>
            <option value="hidh-low">Sort by : high-low</option>
          </select>
        </div>

      {/* Map products */}

          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6 mb-10'>
            {filterProducts.map((item, index) => {
  return (
    <Productitem key={index} id={item._id} name={item.name} price={item.price} image={item.image} />
  );
})}
          </div>
      </div>
    </div>
  )
}

export default Collection;
