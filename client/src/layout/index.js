import React from 'react'
import logo from '../assets/logo1.svg'

const AuthLayouts = ({children}) => {
  return (
    <>
        <header className='flex justify-center items-center py-3 h-20 shadow-md bg-white'>
            <img 
              src={logo}
              alt='logo'
              width={80}
              height={60}
            />
            <h1 className='text-3xl font-bold'><span className='text-[#555D5E]'>Chat</span> App</h1>
        </header>

        { children }
    </>
  )
}

export default AuthLayouts
