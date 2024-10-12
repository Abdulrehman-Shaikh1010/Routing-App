import React from "react";
import Link from "next/link";

export default function Contact(){
  return(
    <div>
      <h1>This is a Router Contact page from <strong> AbdulRehman Shaikh</strong></h1>
      <ul>
      <li><Link href='About'>About</Link></li>
      <li><Link href='Header'>Header</Link></li>
      <li><Link href='Navbar'>Navbar</Link></li>
      </ul>
       
    </div>
  );
}
