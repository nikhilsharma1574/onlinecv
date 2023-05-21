import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
    return (
        <div className='w-full bg-transparent flex justify-between items-center p-4 lg:py-6 max-w-6xl mx-auto h-16'>
            <h1 className='font-medium text-white text-lg'>Nikhil Sharma</h1>
            <div className='hidden lg:flex gap-8 text-white font-semibold'>
                <h1 className='hover:text-gray-400 duration-100 cursor-pointer transition-all'>Work</h1>
                <h1 className='hover:text-gray-400 duration-100 cursor-pointer transition-all'>Expertise</h1>
                <h1 className='hover:text-gray-400 duration-100 cursor-pointer transition-all'>About</h1>
                <h1 className='hover:text-gray-400 duration-100 cursor-pointer transition-all'>Pricing</h1>
                <h1 className='hover:text-gray-400 duration-100 cursor-pointer transition-all'>Blog</h1>
            </div>
            <div className='hidden lg:block'>
                <button className='bg-white px-[20px] py-[10px] font-semibold rounded-lg text-sm hover:scale-105 transition-all duration-300'>Get in Touch</button>
            </div>
            <div className=' lg:hidden'>
                <MenuIcon fontSize="large" className='text-white'/>
            </div>
        </div>
    )
}

export default Navbar