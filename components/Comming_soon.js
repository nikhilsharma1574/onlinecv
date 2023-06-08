import React from 'react'
import Image from 'next/image'
const Coming_soon = ({internship_title , image_link,desc,design}) => {
return (
    <div>
        <div role="status" className={`${design} flex space-y-8 justify-start h-full md:space-y-0 md:flex md:items-center scale-95 hover:scale-100 delay-75 transition-transform hover:cursor-pointer`}>
                <div className="flex-1/2 items-center justify-center  w-full h-[150px] bg-gray-300 rounded sm:w-96 dark:bg-gray-800">
                    <Image alt="Test"  src={image_link} height={500} width={500} className="p-4 object-contain h-full w-full"/>
                </div>
                <div className='w-full flex flex-col justify-start'>
                    <h1 className='font-bold text-sm text-center uppercase lg:text-lg'>
                        {internship_title}
                    </h1>
                    <p className='py-3 px-2 text-[10px] lg:text-[12px] text-gray-500 line-clamp-4'>
                    {desc}
                    </p>
                </div>
                <span className="sr-only">Loading...</span>
            </div>
    </div>
)
}

export default Coming_soon