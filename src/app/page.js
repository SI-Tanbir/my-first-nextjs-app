import { useQuery } from "@tanstack/react-query";
import { Bentham } from "next/font/google";
import Image from "next/image";
import Link from "next/link";



const fetchData=async()=>{
  const data=await fetch('https://jsonplaceholder.typicode.com/posts')
  const res= await data.json()
  return res
}





 const Home=async()=>{



 
  const result=await fetchData()
  // console.log(result)

  return (
    
    <div className="bg-gray-400">
     
    <div className=" grid grid-cols-4 gap-8">

    {
        result?.map(({body,title,id})=>(
          <div className="border-cyan-300 border p-4 bg-black text-white " key={title}>
            <h3>{title}</h3>
            <p>{body}</p>
            <button className="underline text-blue-600"><Link href={`/${id}`}>See Details</Link></button>
          </div>
        ))
      }

    </div>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
export default Home