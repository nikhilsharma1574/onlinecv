    import Landing from '@/components/Landing'
    import Layout from '@/layouts/layout'
    // import Head from 'next/head'



    export default function Home() {
    return (
    <>
        <main id='element-bg' className='w-full h-screen bg-gradient-to-b from-[#0c274b] via-[#040615] to-[#040615]'>
        <div id='element-bg'>
        <Layout>
            <Landing/>
        </Layout>
        </div>
        </main>
    </>
    )
    }