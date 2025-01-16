import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div> <p>service pages</p>
      <Link className='m-4 hover:bg-cyan-400' href={'service/rental'}>rental price</Link>
      <Link className='m-4 hover:bg-cyan-400' href={'service/hourly'}>hourly price</Link>

    </div>
  )
}

export default page