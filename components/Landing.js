import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Landing = () => {
    return (
        <div className='h-[calc(100vh-240px)] flex justify-center items-center flex-col w-full pt-24 px-6 md:px-16 text-white text-center'>
            {/* <button className='bg-slate-400/10 border flex items-center border-slate-400/20 px-4 py-1 rounded-full text-xs'><div className='w-2 h-2 bg-[#26f5dc] rounded-full mr-2'></div>We're looking for a designer. <span className='font-semibold flex justify-center items-center ml-2'>Read more <ArrowForwardIcon fontSize="small"/></span></button> */}
            <h1 className='text-transparent text-[40px] bg-clip-text bg-gradient-to-r from-[#fff] to-[#7fb6d5] font-bold'>
                Crafting products to shape tomorrow
            </h1>
            <p className='pt-4 text-[#ced6de]'>
                Strakzat is a digital product design studio bringing value as efficiently as possible by designing validated digital solutions.
            </p>
        </div>
    )
}

export default Landing