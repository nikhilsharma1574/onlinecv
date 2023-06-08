import React from 'react'
import Image from 'next/image'
const skillcard = ({image,heading , paragraph, button,classdesign}) => {
return (
            <div class="lg:scale-110 object-contain md:w-[150px] w-[120px] flex flex-col bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <Image class={`w-full h-[100px] rounded-t-lg ${classdesign}`} src={image} height={100} width={100} alt="image" />
                </a>
                <div class="px-2 pb-3 pt-3">
                    <a href="#">
                        <h5 class="mb-2 text-[12px] font-bold tracking-tight text-gray-900 dark:text-white">{heading}</h5>
                    </a>
                    <p class="mb-1 text-[8px] font-normal line-clamp-3 text-gray-700 dark:text-gray-400">{paragraph}</p>
                    <a href="#" class="inline-flex items-center px-2 py-1 text-[9px] font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        {button}
                        <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>
                </div>
            </div>
)
}

export default skillcard