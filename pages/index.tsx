import Head from 'next/head'
// import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <>
    <Head>
      <title>Next Application</title>
    </Head>

    {/* Navbar */}
    <nav className='flex container justify-center p-5 text-lg font-bold'>
        <ul className='flex gap-11'>
          <li className='cursor-pointer'>Home</li>
          <li className='cursor-pointer'>About</li>
          <li className='cursor-pointer'>Blog</li>
          <li className='cursor-pointer'>Contact</li>
        </ul>
    </nav>

    {/* Name and title */}
    <div className='text-center'>
      <h1 className='text-4xl mt-20 mb-5'>Hunting Coder</h1>
      <p>A blog for hunting coders by hunting coder.</p>
    </div>

    {/* Questions */}
    <div className='text-center mt-10'>
    <h2 className='text-2xl font-bold'>How to learn JavaScript in 2022?</h2>
    <p>JavaScript is the language used to design logic for the web</p>
    </div>

    <div className='text-center mt-10'>
    <h2 className='text-2xl font-bold'>How to learn JavaScript in 2022?</h2>
    <p>JavaScript is the language used to design logic for the web</p>
    </div>

    <div className='text-center mt-10'>
    <h2 className='text-2xl font-bold'>How to learn JavaScript in 2022?</h2>
    <p>JavaScript is the language used to design logic for the web</p>
    </div>

    <div className='text-center mt-10'>
    <h2 className='text-2xl font-bold'>How to learn JavaScript in 2022?</h2>
    <p>JavaScript is the language used to design logic for the web</p>
    </div>
    </>
  )
}
