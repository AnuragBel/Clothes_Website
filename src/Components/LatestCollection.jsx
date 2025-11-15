// Here we store the latest collection products
import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Title from './Title';
import Productitem from './Productitem';

function LatestCollection() {
    // We get the product data
    const { products } = useContext(ShopContext);

    // Load the 10 product into an empty [] array
    // We store the product data in state variable
    const [latestProducts,setLatestProducts] = useState([]);

    // To load 10 products data
    useEffect(()=>{
        setLatestProducts(products.slice(0,10));
    },[]) //UseEffet function will be executed once when the components get loaded

  return (
    <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
        <Title text1={'LATEST'} text2={'COLLECTIONS'}/>
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-700'>
        New Arrivals Just Dropped! ✨  Explore our latest collection and discover fresh styles you'll love.
        </p>
        </div>
      
      {/* Rendering Products */}
      <div className='grid grid=cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
          // We store 10 product in latestProducts
          // We can display products details like(id,image,name,price) using map function
          latestProducts.map((item,index)=>(
            // Add proops
            <Productitem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
          ))
        }
      </div>
    </div>
  )
}

export default LatestCollection
