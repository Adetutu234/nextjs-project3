import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between rounded-2xl p-7 bg-white text-black font-bold '>
      <div>
        <p className='uppercase'>next js project</p>
      </div>

      <div>
        <ul className='flex gap-15'>
            <Link href='/'>HOME</Link>
            <Link href='/about'>ABOUT</Link>
            <Link href='/projects'>PROJECTS</Link>
            <Link href='/contact'>CONTACT</Link>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
