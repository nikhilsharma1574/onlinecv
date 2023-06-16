import Image from 'next/image'
import MyButton from './MyButton'
import React, { useState, useEffect, useRef } from "react";


    const Card = ({Profile_pic ,clickfunction}) => {
    return (
            <div className='backdrop-blur-sm object-contain card text-sm flex flex-col justify-start items-center  bg-slate-500/20 p-6 rounded-xl w-[250px] h-[300px]'>
                <Image  src={Profile_pic} height={100} width={100} alt='Profile pic' className='rounded-full object-cover w-[80px] h-[80px] hover:scale-105 transition mt-4'/>
                <span className='mt-6 first-letter text-white'>
                    Nikhil Sharma
                </span>
                <span className='text-xs mt-4 text-gray-400'>
                    Software Developer | Organizer | Web Developer 
                </span>
                <div className=''>
                <MyButton functionn={clickfunction} href="/test" buttonText={"Connect"} style="bg-white px-6 mt-6 py-2 rounded-md hover:bg-slate-300 bg-white text-black transition"/>
                </div>
            </div>
    )
    }

    export default Card