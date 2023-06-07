import React, { useState, useEffect, useRef } from "react";
// import BIRDS from "vanta/dist/vanta.waves.min";
// import * as THREE from "three";
import Landing from '@/components/Landing'
import Layout from '@/layouts/layout'
import Footer from "@/components/Footer";

export default function Home ()  {


  // useEffect(() => {
  //   if (!vantaEffect) {
  //     setVantaEffect(
  //       BIRDS({
  //         el: vantaRef.current,
  //         THREE: THREE,
  //         mouseControls: true,
  //         touchControls: true,
  //         gyroControls: false,
  //         minHeight: 200.00,
  //         minWidth: 200.00,
  //         scale: 1.00,
  //         scaleMobile: 1.00,
  //         color: 0x111111
  //       })
  //     );
  //   }
  //   return () => {
  //     if (vantaEffect) vantaEffect.destroy();
  //   };
  // }, [vantaEffect]);
  return (
    <>
      <main id='element-bg' className='w-full h-screen bg-gradient-to-b from-[#0c274b] via-[#040615] to-[#040615]'>
      {/* <div ref={vantaRef}> */}
      <Layout>
          <Landing/>
          <Footer/>
      </Layout>
      {/* </div> */}
    </main>
    </>
  )
}