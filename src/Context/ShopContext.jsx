import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


// To store common variables and state variables at one place,We can use it any where
export const ShopContext = createContext();

const ShopContextProvider = (props) =>{

    // variables               //For this ₹ sign press Ctrl + Alt + 4
    const currency = '$'; //We can change currency as per requirnment such as $ or ₹
    const delivery_fee = 10; 
    const [search,setSearch] = useState('');
    const [showSearch,setShowSearch] = useState(false)
    const Navigate = useNavigate();  // useNavigate is a hook in react
    // When it is true it display the search bar if false it display nothing

    //---------------- To display cart Items ------------------------
    const [cartItems,setCartItems] = useState({});

    const addToCart = async (ItemId,size) =>{
        let cartData = structuredClone(cartItems);

        if(!size){
            toast.error('Select Product Size');
            return;
        }

        if (cartData[ItemId]) {
            if (cartData[ItemId[size]]){
                cartData[ItemId][size] +=1;
            }
            else{
                cartData[ItemId][size] = 1;
            }
        }
        else{
            cartData[ItemId] = {};
            cartData[ItemId][size] = 1;
        }
        setCartItems(cartData);
    }

    const getCartCount = () =>{
        let totalCount = 0;
        for(const items in cartItems){
            for(const item in cartItems[items]){
                try {
                    if(cartItems[items][item] > 0){
                        totalCount += cartItems[items][item];
                    }
                } catch (error) {
                    
                }
            }
        }
        return totalCount;
    }

    // --------------------- Delete and Modify the Cart data-------------
    const updateQuantity = async (itemId,size,quality) =>{
        
        let cartData = structuredClone(cartItems);

        cartData[itemId][size] = quality;

        setCartItems(cartData);
    }

    // ------------------ Total Cart Amount ----------------------
    const getCartAmount = () => {
        let totalAmount = 0;
        for(const items in cartItems){
            let itemInfo = products.find((product)=> product._id === items);
            for(const item in cartItems[items]){
                try {
                    if(cartItems[items][item]>0){
                        totalAmount += itemInfo.price * cartItems[items][item];
                    }
                } catch (error) {
                }
            }
        }
        return totalAmount;
    }

    const value = {
        products , currency , delivery_fee,
        search , setSearch , showSearch , setShowSearch , 
        cartItems , addToCart , getCartCount , updateQuantity ,
        getCartAmount , Navigate
    } // We can access it in any component or anywhere we want 

    return(
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;