import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav className="flex container justify-center p-5 text-lg font-bold">
      <ul className="flex gap-11">
        <Link href="/">
          <li className="cursor-pointer">Home</li>
        </Link>

        <Link href="/about">
          <li className="cursor-pointer">About</li>
        </Link>

        <Link href="/blog">
          <li className="cursor-pointer">Blog</li>
        </Link>

        <Link href="/contact">
          <li className="cursor-pointer">Contact</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
