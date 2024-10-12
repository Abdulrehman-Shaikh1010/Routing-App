'use client'
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function Home(){
  const route = useRouter();
  return(
    <div>
      <h1>This is a Router Home page from <strong> AbdulRehman Shaikh</strong></h1>
      <ul>
        <li><Link href='About'>About</Link></li>
        <li><Link href='Contact'>Contact</Link></li>
        <li><Link href='Header'>Header</Link></li>
          <li><Link href='Navbar'>Navbar</Link></li>
      </ul>

        <ul>
          <br />
       <li> <button className="p-5 bg-green-500" onClick={() => route.push('/')}> Home page</button> </li>
       <br />
       <li> <button className="p-5 bg-green-500" onClick={() => route.push('/About')}> About page</button> </li>
       <br />
       <li> <button className="p-4 bg-green-400" onClick={() => route.push('/Header')}> Header page</button> </li>
       <br />
       <li> <button className="p-4 bg-green-400" onClick={() => route.push('/Navbar')}> Navbar page</button> </li>
        </ul>
    </div>
  );
}
