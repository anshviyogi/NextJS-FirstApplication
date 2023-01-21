import React from 'react'
import {useRouter} from 'next/router'

function slug() {
    const router = useRouter()
    // Parameter after the folder name. Example: http://localhost:3000/blogpost/ansh
    // console.log(router.query)  -- slug

    const {slug} = router.query;

  return (
    <div className=''>
        <h1 className='text-center p-10 text-4xl font-bold'>Title of the page {slug}</h1>
        <hr />

        <div className='px-52 p-6'>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
    </div>
  )
}

export default slug