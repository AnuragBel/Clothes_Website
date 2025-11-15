import React, {useContext} from 'react'
import { ShopContext } from '../Context/ShopContext';
import { Link } from 'react-router-dom';

// To Store 10 products details
const Productitem = ({id,image,name,price}) => {

const {currency} = useContext(ShopContext);

  return (
    // If anyone click on the product item it redirect to product page

    // Using this component we will display multiple products in the LatestCollection
    <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
        <div className='overflow-hidden'>
            <img className='hover:scale-110 transition ease-in-out' src={image[0]}/>
        </div>
        <p className='pt-3 pb-1 text-sm'>{name}</p> {/* pt pb=padding from the top and bottom text-sm=text small*/}
        <p className='text-sm font-medium'>{currency}{price}</p>
    </Link>
  )
}

export default Productitem
