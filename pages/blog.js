import React, { useEffect } from "react";
import Link from "next/link";
import { useState } from "react";
import fs from 'fs'

function Blog(props) {
  const [blogs, setBlogs] = useState(props.allBlogs);

  // useEffect(() => {
  //   fetch()...
  // }, []);
  
  return (
    <div>
      {blogs.map((blog,key) => (
        <div key={key} className="text-center mt-10 cursor-pointer">
          <Link href={`/blogpost/${blog.slug}`}>
            <h2 className="text-2xl font-bold">
              {blog.title}
            </h2>
          </Link>
          <p className="px-10 md:px-32">{blog.content}</p>
        </div>
      ))}
    </div>
  );
}

// export async function getServerSideProps(context) {
//   const fetchedData = await fetch("http://localhost:3000/api/blogs")
//   let myprops = await fetchedData.json()
  
//   return {
//     props: {data:myprops}, // will be passed to the page component as props
//   }
// }

export async function getStaticProps(context) {
  let data = await fs.promises.readdir("blogdata")
  let myfile;
  let allBlogs = []

  for(let i=0;i<data.length;i++){
    const item = data[i]
    myfile = await fs.promises.readFile(`blogdata/${item}`,'utf-8')
    allBlogs.push(JSON.parse(myfile))
  }

  return {
    props: {allBlogs}
  }
}

export default Blog;
