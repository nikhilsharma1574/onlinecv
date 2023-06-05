import Image from 'next/image'
import React from 'react'
import Profilepic from '../assets/images/Profilepic.png'
import github_footer from '../assets/svgs/github_footer.svg'
import linkedin_footer from '../assets/svgs/linkedin_footer.svg'
import Hackerrank_footer from '../assets/svgs/Hackerrank_footer.svg'
import instagram_footer from '../assets/svgs/instagram_footer.svg'
import youtube_footer from '../assets/svgs/youtube_footer.svg'
import mail_footer from '../assets/svgs/mail_footer.svg'

const Footer = () => {
  return (
    <div className='h-[250px] bg-zinc-900 font-light text-xs p-4 pt-6 text-white'>
      <div className='flex flex-col gap-5'>  
      <ul className='text-center text-base'>Contact Developer</ul>
        <ul className='flex flex-col'>
          <ul className='p-4 pt-1 flex flex-cols-4 justify-between  sm:justify-center lg:justify-center md:justify-center lg:gap-10 md:gap-10'>
            <Image  src={github_footer} height={100} width={100} alt='Profile pic' className='rounded-full object-cover max-w-[40px] max-h-[40px] hover:scale-105 transition mt-4'/>
            <Image  src={linkedin_footer} height={100} width={100} alt='Profile pic' className='rounded-full object-cover max-w-[40px] max-h-[40px] hover:scale-105 transition mt-4'/>
            <Image  src={Hackerrank_footer} height={100} width={100} alt='Profile pic' className='rounded-full object-cover max-w-[40px] max-h-[40px] hover:scale-105 transition mt-4'/>
            <Image  src={mail_footer} height={100} width={100} alt='Profile pic' className='rounded-full object-cover max-w-[40px] max-h-[40px] hover:scale-105 transition mt-4'/>
          </ul>
        </ul>
        <ul className='text-center'>About us</ul>
        <div className='flex text-center justify-center text-[9px] text-gray-500'>
          NIKHIL SHARMA | SRM UNIVERSITY <br/>www.nikhilsharma.ml<br/>
        </div>
      </div>
    </div>
  )
}

export default Footer