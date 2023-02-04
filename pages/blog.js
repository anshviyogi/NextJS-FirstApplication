import React, { useEffect } from "react";
import Link from "next/link";
import { useState } from "react";

function blog(props) {
  const [blogs, setBlogs] = useState(props.data);
  console.log(props)

  // useEffect(() => {
    // fetch()...
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
    const fetchedData = await fetch("http://localhost:3000/api/blogs")
    let myprops = await fetchedData.json()
    
    return {
      props: {data:myprops}, // will be passed to the page component as props
    }
  }
export default blog;
