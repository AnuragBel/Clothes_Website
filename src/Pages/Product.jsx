import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../Components/RelatedProducts';

function Product() {

  const {productId} = useParams(); // Using this hook we can get the product by ID
  // We can store the product in one useState hook
  const { products , currency , addToCart } = useContext(ShopContext);
  const [productData,setProductData] = useState(false);
  const [image,setImage] = useState('');
  const [size,setSize] = useState('');

  const fetchProductData = async () =>{

    // Here we get the products data from assets file
    products.map((item)=>{
      if(item._id === productId){
        setProductData(item)
        setImage(item.image[0])
        return null;
      }
    })
  }

  // Whenever the product Id updated we will get the product data 
  useEffect(()=>{
    fetchProductData();
  },[productId, products])

  return productData ? ( //we used one ternary operator(true,false)
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/* ------------------- Product data ----------------- */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>

        {/* ----------------- Product Image ---------------- */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>

          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-auto w-full'>
          {/* Here we display the product images */}
          {
            // Here we displayed smaller images
            productData.image.map((item,index)=>( 
              <img onClick={()=>setImage(item)} src={item} key={index} className='w-[70%] sm:w-small sm:mb-3 rounded-md cursor-pointer'/>
            )) // onclick event to choose the image from smaller images
          }
          </div>
            {/* Here we displayed bigger images */}
            <div className='w-full sm:w-[100%] p-2 sm:p-4'>
              <img className='w-full h-auto' src={image}/>  {/* We take image from const image variable */}
            </div>
        </div>
            {/* -------------------- Product Info ----------------- */}
            <div className='flex-1'>
              <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
              <div className='flex items-center gap-1 mt-2'>
                <img src={assets.star_icon} alt="" className="w-3 5" />
                <img src={assets.star_icon} alt="" className="w-3 5" />
                <img src={assets.star_icon} alt="" className="w-3 5" />
                <img src={assets.star_icon} alt="" className="w-3 5" />
                <img src={assets.star_dull_icon} alt="" className="w-3 5" />
                <p className='pl-2'>(122)</p>
            </div>
            <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
            <p className='mt-5 text-gray-700 md:w-4/5'>{productData.description}</p>
            <div className='flex flex-col gap-4 my-8'>
              <p>Select Size :-</p>
              <div className='flex gap-2'>
                {productData.sizes.map((item,index)=>(
                  <button onClick={()=>setSize(item)} className={`border py-2 px-4 bg-gray-300 ${item === size ? 'border-orange-500' : ''}`} key={index}>{item}</button>
                ))}
              </div>
            </div>
            <button onClick={()=>addToCart(productData._id,size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>ADD TO CART</button>
            <hr className='mt-8 sm:w-4/5'/>
            <div className='text-lg text-gray-600 mt-5 mb-5 flex flex-col gap-1'>
              <p>100% Original product.</p>
              <p>Cash on Delivery is Available on this product.</p>
              <p>Easy return and exchange policy within 7 days.</p>
            </div>
          </div>
      </div>
      <hr/>
      {/* --------------- Description & Review section ---------------- */}
      <div className='mt-10'>
        <div className='flex'>
          <p className='border px-5 py-3 mb-5 text-sm'>Description :-</p>
        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-700'>
          <p>Discover fashion that fits your lifestyle. At Forever, we offer a curated collection of stylish, high-quality clothing for men, women, and kids.
  From everyday essentials to statement pieces, our designs are made to inspire confidence and comfort in every moment.
We believe in fashion that’s more than just trendy — it’s timeless, sustainable, and made with care.
Whether you're dressing up for a night out or looking for that perfect relaxed fit, our collections are here to keep you feeling and looking your best.
</p>
<p>
<p>✅ Fast Shipping</p>
<p>✅ Easy Returns</p>
<p>✅ New Arrivals Every Week</p>

<p className='mt-2'>Wear your story. Shop now.</p>
</p>
    </div>
    </div>
  <div className='flex'>
  <p className='border px-5 py-3 mt-10 mb-5 text-sm'>Reviews (122) :-</p>
</div>
<div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-700'>
  <p>1. ⭐ Great quality and super comfortable!"
I ordered a pair of joggers and a hoodie — both exceeded my expectations! The fabric is soft, the fit is perfect, and they look just like the photos. Will definitely order again.</p>
<p>2. ⭐ I was worried about the sizing, but everything fit perfectly. Delivery was quick too — my order arrived in 3 days. Love the style and the customer service was helpful!</p>
<p>3. ⭐ I appreciate the eco-friendly packaging and the fact that the clothes are ethically made. I bought the linen shirt and it's become a staple in my wardrobe.</p>
<p>4. ⭐ The material is really nice and looks premium, but the pants were a bit tight. I’ll size up next time. Still giving 4 stars because the return process was super easy.</p>
<p>5. ⭐ I wanted a clean, minimalist look and this site delivered. Everything feels thoughtfully designed — modern but comfortable. Highly recommend.</p>
</div>
      {/* Display latest products */}
          
        <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>
        {/*we added props */}
    </div>
  ) : <div className='opacity-0'></div>
}

export default Product
