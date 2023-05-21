import Landing from '@/components/Landing'
import Navbar from '@/components/Navbar'
import Layout from '@/layouts/layout'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='w-full h-screen bg-gradient-to-b from-[#0c274b] via-[#040615] to-[#040615]'>
      <Layout>
        <Landing/>
      </Layout>
    </main>
  )
}
