import React from "react";
import Link from 'next/link'

function blog() {
  return (
    <div>
      <div className="text-center mt-10 cursor-pointer">
        <Link href={`/blogpost/learn-javascript`}>
        <h2 className="text-2xl font-bold">How to learn JavaScript in 2022?</h2>
        </Link>
        <p>JavaScript is the language used to design logic for the web</p>
      </div>

      <div className="text-center mt-10 cursor-pointer">
        <h2 className="text-2xl font-bold">How to learn JavaScript in 2022?</h2>
        <p>JavaScript is the language used to design logic for the web</p>
      </div>

      <div className="text-center mt-10 cursor-pointer">
        <h2 className="text-2xl font-bold">How to learn JavaScript in 2022?</h2>
        <p>JavaScript is the language used to design logic for the web</p>
      </div>

      <div className="text-center mt-10 cursor-pointer">
        <h2 className="text-2xl font-bold">How to learn JavaScript in 2022?</h2>
        <p>JavaScript is the language used to design logic for the web</p>
      </div>
    </div>
  );
}

export default blog;
