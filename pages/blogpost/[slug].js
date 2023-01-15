import React from 'react'
import {useRouter} from 'next/router'

function slug() {
    const router = useRouter()
    // Parameter after the folder name. Example: http://localhost:3000/blogpost/ansh
    // console.log(router.query)  -- slug

    const {slug} = router.query;

  return (
    <div>
        <h1>{slug}</h1>
    </div>
  )
}

export default slug