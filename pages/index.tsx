import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
// import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <>
    <Head>
      <title>Next Application</title>
    </Head>

    {/* Example of Style JSX */}

    {/* <style jsx>
      {`
      .mySpan{
        color:red;
      }
      `}
    </style> */}

    {/* Navbar */}
    {/* <nav className='flex container justify-center p-5 text-lg font-bold'>
        <ul className='flex gap-11'>
          <Link href='/'>
          <li className='cursor-pointer'>Home</li>
          </Link>

          <Link href='/about'>
          <li className='cursor-pointer'>About</li>
          </Link>

          <Link href='/blog'>
          <li className='cursor-pointer'>Blog</li>
          </Link>

          <Link href='/contact'>
          <li className='cursor-pointer'>Contact</li>
          </Link>
        </ul>
    </nav> */}

    {/* Example for style jsx  */}
    {/* <span className='mySpan'>Style JSX</span> */}

    {/* Name and title */}
    <div className='text-center'>
      <h1 className='text-4xl mt-20 mb-5'>Hunting Coder</h1>
      <p>A blog for hunting coders by hunting coder.</p>
    </div>
      {/* <Image src='/https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' width={237} height={158}/> */}

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
