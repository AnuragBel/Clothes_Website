import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Title from '../Components/Title';
import Productitem from './Productitem';

const RelatedProducts = ({category,subCategory}) => {

    const{ products } = useContext(ShopContext);
    const [related,setRelated] = useState([]);

    useEffect(()=>{
        // When the data will be updated it get executed
        if (products.length > 0){
            let productsCopy = products.slice();

            productsCopy = productsCopy.filter((item)=> category === item.category);
            productsCopy = productsCopy.filter((item)=> subCategory === item.subCategory);

            setRelated(productsCopy.slice(0,5))
        }

    },[products])

  return (
    <div className='my-10'>
      <div className='text-center text-3x1 py-2 text-lg'>
        <Title text1={'RELATED'} text2={'PRODUCTS'} />
      </div>

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {related.map((item, index) => {
  return (
    <Productitem key={index} id={item._id} name={item.name} price={item.price} image={item.image} />
  );
})}
      </div>
    </div>
  )
}

export default RelatedProducts
