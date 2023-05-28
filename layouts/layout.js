import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

const Layout = ({children}) => {
    return (
        <div className='p-16 '>
            <Navbar/>
            {children}
            {/* <Footer/> */}
        </div>
    )
}

export default Layout