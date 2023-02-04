import React from 'react'
import {useRouter} from 'next/router'
import fs from 'fs'

function Slug(props) {
    const router = useRouter()
    // Parameter after the folder name. Example: http://localhost:3000/blogpost/ansh
    // console.log(router.query)  -- slug

    const {slug} = router.query;

  return (
    <div className=''>
        <h1 className='text-center p-10 text-4xl font-bold'>Title of the page {slug}</h1>
        <hr />

        <div className='px-52 p-6'>
          <p>{props.myBlog.content}</p>
        </div>
    </div>
  )
}

// ------------ Server Side Props ----------

// export async function getServerSideProps(context) {
//   const data = await fetch(`http://localhost:3000/api/getBlog?slug=${context.query.slug}`)
//   const jsonData = await data.json()
  
//   return {
//     props: {jsonData}, // will be passed to the page component as props
//   }
// }

// -------------- Static Site Props --------------

export async function getStaticPaths(){ // how many pages make to be made using "slug"
  return{
    paths: [
      {params: {slug:"how-to-learn-flask"}},
      {params: {slug:"how-to-learn-js"}},
      {params: {slug:"how-to-learn-nextjs"}},
    ],
    fallback:true
  }
}

export async function getStaticProps(context) {
  const {slug} = context.params;

  let myBlog = await fs.promises.readFile(`blogdata/${slug}.json`,'utf-8')

  return {
    props: {myBlog: JSON.parse(myBlog)}, // will be passed to the page component as props
  }
}

export default Slug