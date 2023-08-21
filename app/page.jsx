"use client";
import Link from "next/link";

 // This is a client component
export default function Home(){

  return (
    <main >
    <Link href='/potter'>
       <h2 type='submit' className="absolute rounded-l-none w-36 btn btn-lg">
         Harry Potter Characters
       </h2>
     </Link>
    </main>
  )
}
