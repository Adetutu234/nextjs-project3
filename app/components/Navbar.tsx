"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import { List , XCircle } from '@phosphor-icons/react'

const Navbar = () => {
  const [openMenu,setOpenMenu]=useState("false")
  const handleOpen = () =>{
    setOpenMenu (!openMenu)}
  return (
    <div className='flex justify-between rounded-2xl lg:p-7 p-4 bg-white text-black font-bold '>
      <div>
        <p className='uppercase'>suliat apanisile</p>
      </div>

      <div>
        <ul className='md:flex gap-15 hidden '>
            <Link href='/'>HOME</Link>
            <Link href='/about'>ABOUT</Link>
            <Link href='/projects'>PROJECTS</Link>
            <Link href='/contact'>CONTACT</Link>
        </ul>
      </div>
        <div className='lg:hidden md:flex '>
            <button onClick={handleOpen}>
              {openMenu? <XCircle size={32}/> :  <List size={32}/>}
            </button>
        <div className=''>
          {openMenu && (
            <ul className='absolute left-0 top-15 w-full flex flex-col items-end gap-4 p-5 z-5 bg-white md:hidden backdrop-blur-xs'>
              <Link href='/' className='uppercase cursor-pointer hover:underline'>Homepage</Link>
              <Link href='/about' className='uppercase cursor-pointer hover:underline'>about</Link>
              <Link href='/projects' className='uppercase cursor-pointer hover:underline'>projects</Link>
              <Link href='/contact' className='uppercase cursor-pointer hover:underline'>contact</Link>
            </ul>
          )}
        </div>
        </div>
    </div>
  )
}

export default Navbar
