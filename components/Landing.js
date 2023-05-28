import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Card from './Card';
import Profile_pic from '../assets/images/Profile_pic.jpg'
import Typewriter from 'typewriter-effect'

const Landing = () => {
    return (
        <>
        <div className='h-[calc(100vh-240px)] flex justify-center items-center flex-col lg:flex-row w-full pt-10 px-6 md:px-16 text-white text-center'>
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
                    <div className='text-[10px] hidden lg:flex paragraph font-normal lg:mt-8 w-full'>
                        <span>
                        Hey !! I'm Nikhil Sharma, a third-year B.Tech student at SRM University in Chennai. My passion for technology has driven me to develop skills in both Android and web development, creating user-friendly applications and websites. I have strong organizational skills, leading and managing various events. My outstanding academic performance reflects my hard work and dedication to learning. I'm eager to continue growing my skills and achieving my goals in the future.
                        </span>
                    </div>
                </h1>
                
            </div>
            <div className='w-full justify-center items-center flex h-full lg:scale-110 scale-90'>
                <Card Profile_pic={Profile_pic}/>
            </div>
        </div>
            <div className='Slide-2 mt-12 text-xs text-gray-500 text-left'>
                <div className='paragraph lg:hidden px-8 w-full lg:w-1/2'>
                    <span>
                    Hey !! I'm Nikhil Sharma, a third-year B.Tech student at SRM University in Chennai. My passion for technology has driven me to develop skills in both Android and web development, creating user-friendly applications and websites. I have strong organizational skills, leading and managing various events. My outstanding academic performance reflects my hard work and dedication to learning. I'm eager to continue growing my skills and achieving my goals in the future.
                    </span>
                </div>
            </div>
        </>
    )
}

export default Landing