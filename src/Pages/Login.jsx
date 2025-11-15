import React, { useState } from 'react'

function Login() {

  const [currentState,setCurrentState] = useState('Sign Up');

  // OnSubmit Handler function
  const onSubmitHandler = async (event) =>{
    event.preventDefault();
  }

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-1 mb-50 gap-4 text-gray-700'>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800'/>
        <p className='prata-regular text-3xl'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800'/>
      </div>
      {/* When we Signing Up the Name we be displayed  */}
      {/* When we doing login we login with Email and password only */}
      {currentState === 'Login' ? '' : <input type='text' className='w-full px-3 py-2 sm:rounded border border-gray-800' placeholder='Enter your Name' required/>}
      <input type='email' className='w-full px-3 py-2 sm:rounded border border-gray-800' placeholder='Enter your Email' required/>
      <input type='password' className='w-full px-3 py-2 sm:rounded border border-gray-800' placeholder='Enter your Password' required/>
      <div className='w-full flex-justify-between text-sm mt-[-8px]'>
        <p className='cursor-pointer'>Forget Password?</p>
        {
          currentState === 'Login'
          ? <p onClick={()=>setCurrentState('Sign Up')} className='cursor-pointer'>Create Account</p>
          : <p onClick={()=>setCurrentState('Login')} className='cursor-pointer'>Login Here</p>
        }
      </div>
        <button className='bg-black text-white font-light w-full sm:rounded px-8 py-2 mt-4'>{currentState === 'Login' ? 'Sign In' : 'Sign Up'}</button>
    </form>
  )
}

export default Login
