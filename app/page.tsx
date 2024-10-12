'use client'
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function Home(){
  const route = useRouter();
  return(
    <div>
      <h1>This is a Router Home page from <strong> AbdulRehman Shaikh</strong></h1>
     
    </div>
  );
}
