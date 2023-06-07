import Image from 'next/image'
import React from 'react'
import Profilepic from '../assets/images/Profilepic.png'
import github_footer from '../assets/svgs/github_footer.svg'
import linkedin_footer from '../assets/svgs/linkedin_footer.svg'
import Hackerrank_footer from '../assets/svgs/Hackerrank_footer.svg'
import instagram_footer from '../assets/svgs/instagram_footer.svg'
import youtube_footer from '../assets/svgs/youtube_footer.svg'
import mail_footer from '../assets/svgs/mail_footer.svg'
import Link from 'next/link'

const Footer = () => {

  const Links_footer = ({title,image,link})=>{
    return(
    <>
    <div className='flex items-center flex-col hover:scale-110 transition-all gap-2 p-1'>

        <Image alt="Test" src={image} height={100} width={100} className='w-[30px]'/>
        <a className='hover:underline cursor-pointer' href={link} >{title}</a>
    
    </div>
    </>
    )
}

  return (
    <div className='h-[250px] bg-neutral-800 font-light text-xs p-4 pt-6 text-white'>
      <div className='flex flex-col gap-5'>  
      <ul className='text-center text-base'>Contact Developer</ul>
        <ul className='flex flex-col'>
          <ul className='p-4 pt-1 flex flex-cols-4 justify-between  sm:justify-center lg:justify-center md:justify-center lg:gap-10 md:gap-10'>
          <Links_footer title={"Linkdlen"}  link={'https://www.linkedin.com/in/nikhilshaarrma'} image={github_footer}/>      
          <Links_footer title={"Linkdlen"}  link={'https://www.linkedin.com/in/nikhilshaarrma'} image={Hackerrank_footer}/>      
          <Links_footer title={"Linkdlen"}  link={'https://www.linkedin.com/in/nikhilshaarrma'} image={instagram_footer}/>      
          <Links_footer title={"Linkdlen"}  link={'https://www.linkedin.com/in/nikhilshaarrma'} image={mail_footer}/>      
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