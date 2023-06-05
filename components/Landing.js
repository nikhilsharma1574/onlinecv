import React from 'react';
import Card from './Card';
import Profilepic from '../assets/images/Profilepic.png'
import Typewriter from 'typewriter-effect'
// import Footer from './Footer'
import Image from 'next/image';
import Next from '../assets/svgs/Next.svg'
import java from '../assets/svgs/java.svg'
import Html from '../assets/svgs/Html.svg'
import react_logo from '../assets/svgs/react_logo.svg'
import c from '../assets/svgs/C.svg'
import android_logo from '../assets/svgs/android_studio.svg'
import Timeline from '../components/Timeline.js';

const Landing = () => {
    return (
        <>
        {/* h-[calc(100vh-240px)]  */}
        <div className='h-[calc(100vh-240px)] flex justify-center items-center flex-col lg:flex-row w-full pt-10 px-6 md:px-16  text-center'>
            <div className='flex w-full py-6 font-bold tracking-wider h-full'>
                <h1 className='lg:p-6 lg:justify-center lg:items-start lg:text-[50px] lg:flex lg:flex-col text-transparent text-[25px] bg-clip-text bg-gradient-to-r from-[#fff] to-[#7fb6d5] font-bold text-left'>
                    I am
                    <Typewriter
                        options={{
                            strings: ['Web Developer', 'Organizer' , 'Android Developer' , "Designer" ],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                    <div className='text-[12px] hidden lg:flex paragraph font-medium lg:mt-8 w-full'>
                        <span>
                        Hey !! Im Nikhil Sharma, a third-year B.Tech student at SRM University in Chennai. My passion for technology has driven me to develop skills in both Android and web development, creating user-friendly applications and websites. I have strong organizational skills, leading and managing various events. My outstanding academic performance reflects my hard work and dedication to learning. Im eager to continue growing my skills and achieving my goals in the future.
                        </span>
                    </div>
                </h1>
                
            </div>
            <div className='w-full justify-center items-center flex h-full lg:scale-[150px] scale-90'>
                <Card Profile_pic={Profilepic}/>
            </div>
        </div>
            <div className='Slide-2 mt-12 text-xs text-gray-500 text-left'>
                <div className='paragraph lg:hidden px-8 py-8 w-full lg:w-1/2'>
                    <span>
                    Hey !! Im Nikhil Sharma, a third-year B.Tech student at SRM University in Chennai. My passion for technology has driven me to develop skills in both Android and web development, creating user-friendly applications and websites. I have strong organizational skills, leading and managing various events. My outstanding academic performance reflects my hard work and dedication to learning. Im eager to continue growing my skills and achieving my goals in the future.
                    </span>
                </div>
            </div>
            {/* <div className='lg:flex flex-1 flex-row'>

                <div className='flex lg:flex-1 flex-col justify-centerskill p-4'>
                        <h1 className='m-4 text-white font-medium lg:text-[25px]'>SKILL BADGE</h1>
                    <div className='grid grid-cols-4 gap-4 w-full'>
                        <div className='grid place-content-center'><Image src={Next} height={100} width={100} alt='Profile pic' className='hover:scale-110 rounded-full lg:w-[70px] lg:h-[70px] object-cover w-[45px] h-[45px] transition mt-4'/></div>
                        <div className='grid place-content-center'><Image src={android_logo} height={100} width={100} alt='Profile pic' className='hover:scale-110 rounded-full lg:w-[70px] lg:h-[70px] object-cover w-[45px] h-[45px] transition mt-4'/></div>
                        <div className='grid place-content-center'><Image src={react_logo} height={100} width={100} alt='Profile pic' className='hover:scale-110 rounded-full lg:w-[70px] lg:h-[70px] object-cover w-[45px] h-[45px] transition mt-4'/></div>
                        <div className='grid place-content-center'><Image src={c} height={100} width={100} alt='Profile pic' className='hover:scale-110 rounded-full lg:w-[70px] lg:h-[70px] object-cover w-[45px] h-[45px] transition mt-4'/></div>
                        <div className='grid place-content-center'><Image src={java} height={100} width={100} alt='Profile pic' className='hover:scale-110 rounded-full lg:w-[70px] lg:h-[70px] object-cover w-[45px] h-[45px] transition mt-4'/></div>
                        <div className='grid place-content-center'><Image src={Html} height={100} width={100} alt='Profile pic' className='hover:scale-110 rounded-full lg:w-[70px] lg:h-[70px] object-cover w-[45px] h-[45px] transition mt-4'/></div>
                    </div>
                </div>

                <div className='flex lg:flex-1 flex-col justify-centerskill p-4'>
                        <h1 className='m-4 text-white font-medium lg:text-[25px]'>EDUCATION</h1>
                    <div className='w-full p-4'>
                        <Timeline/>
                    </div>
                </div>
            </div> */}
        </>
    )
}

export default Landing