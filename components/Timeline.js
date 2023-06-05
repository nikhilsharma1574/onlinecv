import React from 'react'
import dps from '../assets/svgs/dps.svg'
import SRM from '../assets/svgs/srm.svg'
import Image from 'next/image'
const Timeline = () => {
return (
    <div>
        <div className='flex flex-1 pl-6 justify-center items-center text-[10px]'>
                <ol className="relative border-l border-gray-200 dark:border-gray-700">                  
                    <li className="mb-10 ml-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-xs font-normal leading-none text-gray-400 dark:text-gray-500">May 2020</time>
                        <div className='flex items-center'>
                        <Image  src={dps} height={20} width={20} alt='Profile pic' className='m-2'/>
                        <h3 className="text-[12px] lg:text-[18px] font-semibold text-gray-900 dark:text-white">Delhi Public School , Bhilai</h3>
                        </div>
                        <p className="mb-4 text-[10px] font-normal lg:text-[12px] text-gray-500 dark:text-gray-400">Completed className 12th ,All India Senior School Certificate Examination (CBSE) in course PCM With 94%.</p>
                    </li>
                    <li className="mb-10 ml-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-xs font-normal leading-none text-gray-400 dark:text-gray-500">June 2024</time>
                        <div className='flex items-center'>
                        <Image  src={SRM} height={20} width={20} alt='Profile pic' className='m-2'/>
                        <h3 className="text-[12px] font-semibold lg:text-[18px] text-gray-900 dark:text-white">SRM University , Chennai</h3>
                        </div>
                        <p className="text-[10px] lg:text-[12px] font-normal text-gray-500 dark:text-gray-400">Currently in SRM University Ramapuram campus ,3rd year 6th semester persuing Computer Science and Engineering Specalized in Big Data Analytics , with current CGPA of 9.5.</p>
                    </li>
                </ol>
            </div>
    </div>
)
}

export default Timeline