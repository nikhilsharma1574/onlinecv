import Card from './Card';
import Profilepic from '../assets/images/Profilepic.png'
import java from       '../assets/svgs/Java.svg'
import react_logo from '../assets/svgs/React_logo.svg'
import android_logo from '../assets/svgs/Android_studio.svg'
import Typewriter from 'typewriter-effect'
import Image from 'next/image';
import Next from '../assets/svgs/Next.svg'
import Html from '../assets/svgs/Html.svg'
import c from '../assets/svgs/C.svg'
import Timeline from '../components/Timeline.js';
import React, { useState, useEffect, useRef } from "react";
import BIRDS from "vanta/dist/vanta.waves.min";
import * as THREE from "three";
import Navbar from './Navbar'
import Skillcard from './Skillcard';
import techno from '../assets/images/Technocolabs.png'
import seedit from '..//assets/images/seed_it.png'
import Coming_soon from './Comming_soon';
import Resumint from '../assets/images/Resumint.png'
import android_app from '../assets/svgs/android_app.svg'
import spotify from '../assets/svgs/spotify.svg'
import Skill_card from './Skill_card';
import best_project from '../assets/images/best_project.png'
import hackathon from '../assets/images/Hackathon.png'
import Project_day from '../assets/images/project_day.png'
import technical_event from '../assets/images/technical_event.png'
import Modal from './Modal';
import Footer from './Footer';
import { animateScroll as scroll } from 'react-scroll';
import { FaArrowUp } from 'react-icons/fa/index';

const Landing = () => {
    const [vantaEffect, setVantaEffect] = useState(0);
        const vantaRef = useRef(null);

        useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(
            BIRDS({
                el: vantaRef.current,
                THREE: THREE,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                color: 0x111111
            })
            );
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy();
        };
        }, [vantaEffect]);
        const [isvisible,setvisible] = useState(false);
        const visiblity = ()=>{
            if (typeof window !== 'undefined' && window.scrollY > 300) {
                setvisible(true);
            } else {
                setvisible(false);
            }
        }
        const scrolltop = () => {
            scroll.scrollToTop();
        };
        useEffect(() => {
            if (typeof window !== 'undefined') {
            window.addEventListener('scroll', visiblity);
        
            return () => {
                window.removeEventListener('scroll', visiblity);
            };
            }
        }, []);

    return (
        <>
        <div ref={vantaRef} className='h-screen'>
            <Navbar/>
            {isvisible &&(
                <div className='fixed bottom-4 right-4 z-50'>
                    <button className='bg-black hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300' onClick={scrolltop}>
                        <FaArrowUp />
                    </button>
                </div>
            )}
        <div className='flex justify-center items-center flex-col lg:mt-12 lg:flex-row w-full pt-10 px-6 md:px-16  text-center'>
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
        </div>
        <div className='bg-zinc-900'>
            <div className='Slide-2 text-xs text-gray-500 text-left'>
                <div className='paragraph lg:hidden px-8 py-8 w-full lg:w-1/2'>
                    <span>
                    Hey !! Im Nikhil Sharma, a third-year B.Tech student at SRM University in Chennai. My passion for technology has driven me to develop skills in both Android and web development, creating user-friendly applications and websites. I have strong organizational skills, leading and managing various events. My outstanding academic performance reflects my hard work and dedication to learning. Im eager to continue growing my skills and achieving my goals in the future.
                    </span>
                </div>
            </div>
            <div className='lg:flex flex-1 flex-row'>

                <div className='flex lg:flex-1 flex-col justify-centerskill p-4'>
                        <h1 className='m-4 text-white font-medium lg:text-[25px]'>SKILL BADGE</h1>
                    <div className='grid grid-cols-4 gap-4 w-full'data-aos="fade-right">
                        <div className='grid place-content-center'><Image src={Next} height={100} width={100} alt='Profile pic' className='hover:scale-110 rounded-full lg:w-[70px] lg:h-[70px] object-cover w-[45px] h-[45px] transition mt-4'/></div>
                        <div className='grid place-content-center'><Image src={android_logo} height={100} width={100} alt='Profile pic' className='hover:scale-110 rounded-full lg:w-[70px] lg:h-[70px] object-cover w-[45px] h-[45px] transition mt-4'/></div>
                        <div className='grid place-content-center'><Image src={react_logo} height={100} width={100} alt='Profile pic' className='hover:scale-110 rounded-full lg:w-[70px] lg:h-[70px] object-cover w-[45px] h-[45px] transition mt-4'/></div>
                        <div className='grid place-content-center'><Image src={c} height={100} width={100} alt='Profile pic' className='hover:scale-110 rounded-full lg:w-[70px] lg:h-[70px] object-cover w-[45px] h-[45px] transition mt-4'/></div>
                        <div className='grid place-content-center'><Image src={java} height={100} width={100} alt='Profile pic' className='hover:scale-110 rounded-full lg:w-[70px] lg:h-[70px] object-cover w-[45px] h-[45px] transition mt-4'/></div>
                        <div className='grid place-content-center'><Image  src={Html} height={20} width={20} alt='Profile pic' className='m-2'/></div>
                    </div>
                </div>

                <div className='flex lg:flex-1 flex-col justify-centerskill p-4'>
                        <h1 className='m-4 text-white font-medium lg:text-[25px] text-right lg:text-left'>EDUCATION</h1>
                    <div className='w-full p-4' data-aos="fade-left">
                        <Timeline/>
                    </div>
                </div>
            </div>
            <div className='p-4 text-white flex flex-col'>
                <h1 className='font-medium lg:text-[25px]'>INTERNSHIPS</h1>
                <div className='card body flex flex-wrap justify-center lg:gap-10 gap-5 mt-6 lg:justify-start lg:p-6'>
                    <Coming_soon data-aos="zoom-in-up" internship_title={"Technocolabs"} image_link={techno} desc={"As a Data Scientist Intern at Technocolabs, you will have the opportunity to work on real-world projects and gain practical experience in the field of data science."}/>
                    <Coming_soon internship_title={"SEED IT SOLUTION"} design={""} image_link={seedit} desc={"As a Data Scientist Intern at Technocolabs, you will have the opportunity to work on real-world projects and gain practical experience in the field of data science."}/>
                </div>
            </div>

            <div className='p-4 text-white flex flex-col'>
                <h1 className='text-right font-medium lg:text-[25px]'>PROJECTS</h1>
                <div className='card body flex flex-wrap justify-center lg:gap-10 gap-5 mt-6 lg:justify-end lg:p-6'>
                    <Skillcard image={spotify} classdesign={"object-contain p-2"} heading={"SRM HOSTEL Manager"} paragraph={"Seed it Solution paragraph | Seed it Solution paragraph"} button={"know more"}/>
                    <Skillcard image={android_app} classdesign={"object-contain p-2"} heading={"SRM HOSTEL Manager"} paragraph={"Seed it Solution paragraph | Seed it Solution paragraph"} button={"know more"}/>
                    <Skillcard image={Resumint} classdesign={"object-contain p-2"} heading={"SRM HOSTEL Manager"} paragraph={"Seed it Solution paragraph | Seed it Solution paragraph"} button={"know more"}/>
                </div>
            </div>

            <div className='p-4 text-white flex flex-col'>
                <h1 className='text-left font-medium lg:text-[25px]'>ACHIVEMENTS</h1>
                <div className='card body flex flex-wrap justify-center items-center flex-col lg:flex-row lg:gap-10 gap-5 mt-6 lg:justify-start lg:p-6'>
                    <Skill_card image_link={technical_event} card_title={"Project day"} />
                    <Skill_card image_link={best_project} card_title={"Project day"} />
                    <Skill_card image_link={hackathon} card_title={"Project day"} />
                    <Skill_card image_link={Project_day} card_title={"Project day"} />
                </div>
            </div>
        </div>
        <div id='bottom'>
        <Footer/>
        </div>
        </>
    )
}
export default Landing