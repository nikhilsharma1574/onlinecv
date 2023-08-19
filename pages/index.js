import React, { useState, useEffect, useRef } from "react";
import Landing from '@/components/Landing'
import Layout from '@/layouts/layout'
export default function Home ()  {
  return (
    <>
      <main id='element-bg' className='h-screen  bg-gradient-to-b'>
      <Layout>
          <Landing/>
      </Layout>
    </main>
    </>
  )
}