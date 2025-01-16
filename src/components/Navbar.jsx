"use client"
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

const Navbar = () => {
  const links = [
    {
      title: 'home',
      path: '/',
    },
    {
      title: 'service',
      path: '/service',
    },
    {
      title: 'blog',
      path: '/blog',
    },
  ];
  const pathname=usePathname()

  const router=useRouter()
  const handleLogin=()=>{
    router.push('/login')

  }
  return (
    <div className="bg-red-300">
      <ul className="flex gap-10 text-2xl text-center justify-center">
        {links?.map((link) =>  (


       


        
          // Explicitly return the JSX element inside map
          <li key={link.path}>
            <Link className={`${pathname === link.path && "text-cyan-300"}`} href={link.path}>{link.title}</Link>
          </li>
  ))}

<button className='bg-green-500  rounded' onClick={handleLogin}>Login</button>
      </ul>
      
    </div>
  );
};

export default Navbar;
