import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

const Layout = ({children}) => {
    return (
        <div className='overflow-x-hidden'>
            {children}
        </div>
    )
}

export default Layout