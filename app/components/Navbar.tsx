"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import { List , XCircle , BoxArrowDownIcon} from '@phosphor-icons/react'
import Button from './Button'

const Navbar = () => {
  const [openMenu,setOpenMenu]=useState(false)

  const handleOpen = () =>{
    setOpenMenu (!openMenu)}

  const handleClose = () =>{
    setOpenMenu (false)
  }

  return (
    <div className='flex justify-between rounded-2xl lg:p-7 p-5 bg-black text-gray-300 font-bold items-center '>
      <div>
        <p className='uppercase'>suliat apanisile</p>
      </div>

      <div>
        <ul className='md:flex gap-15 hidden capitalize items-center'>
            <Link href='/'>home</Link>
            <Link href='/about'>about</Link>
            <Link href='/projects'>projects</Link>
            <Link href='/contact'>contacts</Link>
            <div>
              <a href="/Suliat-Apanisile-Resume.pdf" target='_blank'>
              <Button text={'view resume'} className={' capitalize bg-teal-500 text-black w-fit px-4 py-2 mx-auto rounded-lg cursor-pointer font-bold flex gap-3'} icon={<BoxArrowDownIcon size={25} className={''}/>}/>
              </a>
            </div>
        </ul>
      </div>
        <div className='lg:hidden md:flex '>
            <button onClick={handleOpen}>
              {openMenu? <XCircle size={32}/> :  <List size={32}/>}
            </button>
        <div className=''>
          {openMenu && (
            <ul className='absolute left-0 top-15 w-full flex flex-col items-end gap-4 p-5 z-5 bg-white md:hidden'>
              <Link href='/' className='uppercase cursor-pointer hover:underline' onClick={handleClose}>Homepage</Link>
              <Link href='/about' className='uppercase cursor-pointer hover:underline' onClick={handleClose}>about</Link>
              <Link href='/projects' className='uppercase cursor-pointer hover:underline' onClick={handleClose}>projects</Link>
              <Link href='/contact' className='uppercase cursor-pointer hover:underline' onClick={handleClose}>contact</Link>
            </ul>
          )}
        </div>
        </div>
    </div>
  )
}

export default Navbar
