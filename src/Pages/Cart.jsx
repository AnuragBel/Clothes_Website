import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Title from '../Components/Title';
import { assets } from '../assets/assets';
import CartTotal from '../Components/CartTotal';

function Cart() {

  const { products , currency , cartItems , updateQuantity , Navigate } = useContext(ShopContext);

  const [cartData,setCartData] = useState([]);

  useEffect(()=>{

    const tempData = []; // Temperary Variable
    for(const items in cartItems){
      for (const item in cartItems[items]){
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size:item,
            quantity:cartItems[items][item]
          })
        }
      }
    }
    setCartData(tempData);
  },[cartItems])

  return (
    <div className='border-t pt-14'>

      <div className='text-2xl mb-3'>
        <Title text1={'YOUR'} text2={'CART'}/>
      </div>

      <div>
        {
          cartData.map((item,index)=>{
// Using Id we find the product from product data
      //And store that in this Variable 
          const productData = products.find((product)=> product._id === item._id);

          return(
            // In this div we will display the product data
            <div key={index} className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
              <div className='flex items-start gap-6'>
                <img className='w-16 sm:w-20' src={productData.image[0]}/>
                <div>
                  <p className='text-xs sm:text-lg font-medium'>{productData.name}</p>
                  <div className='flex items-center gap-5 mt-2'>
                    <p className='px-1 sm:px-3 sm:py-1 border bg-slate-50'>{item.size}</p>
                    <p className='px-1 sm:px-3 sm:py-1 border bg-slate-50'>{currency}{productData.price}</p>
                  </div>
                </div>
              </div>
              {/* if your value is empty or 0 we simply return null */}
              {/* We use input function , When we increase the quantity the count of Cart is also increase  */}
              <input onClick={(e)=> e.target.value === '' || e.target.value === '0' ? null : updateQuantity(item._id,item.size,Number(e.target.value))} className='border max-w-50 sm:max-w-20 px-1 sm:px-5 py-1' type='number' min={1} defaultValue={item.quantity}/>
              <img onClick={()=>updateQuantity(item._id,item.size,0)} className='w-4 mr-4 sm:w-5 cursor-pointer' src={assets.bin_icon}/>
              {/* This icon is to removing the quantity , to remove/delete the quantity simply use 0 */}
            </div>
          );
          })
        }
      </div>

      <div className='flex justify-end my-20'>
        <div className='w-full sm:w-[450px]'>
          <CartTotal/>
          <div className='w-full text-end'>
            <button onClick={()=>Navigate('/placeorder')} className='bg-black text-white text-sm cursor-pointer mx-27 my-8 px-5 py-3'>PROCEED TO CHECKOUT</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Cart
