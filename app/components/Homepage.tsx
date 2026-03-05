"use client"

import React, { useState } from 'react'
import Button from './Button'
import { FacebookLogoIcon, LinkedinLogo, YoutubeLogo, TwitterLogoIcon, GithubLogo } from '@phosphor-icons/react'
import Link from 'next/link'

const Homepage = () => {
  const [click , setClick]= useState(false)
  const handleClick = () => {
    setClick (!click)}
  return (
      <div className='relative '>
          <div className='min-h-[calc(100vh-80px)] lg:text-center lg:p-28 py-30 lg:space-y-10 space-y-5 bg-black rounded-2xl '>
            <p className='font-extrabold lg:text-5xl text-3xl text-center capitalize'>hey, I'm <span className='text-teal-300'>suliat apanisile</span></p>
            <p className='lg:text-xl text-md text-grey-300 lg:max-w-175 mx-auto'>A Result-Oriented Web Developer building and managing Websites and Web Applications that leads to the success of the overall product</p>
            <Link href={'/projects'}>
              <Button text={'projects'} className={'w-fit lg:px-20 px-6 py-4 bg-teal-300 mx-auto rounded-lg font-bold uppercase text-black'} onClick={handleClick}/>
            </Link>
            <div className='pt-10'>
              <div className='flex gap-10 cursor-pointer justify-center '>
                  <p><TwitterLogoIcon size={35} className='text-black hover:bg-teal-300 rounded-full bg-white p-1'/></p>
                  <p><LinkedinLogo size={35} className='text-black hover:bg-teal-300 rounded-full bg-white p-1'/></p>
                  <p><YoutubeLogo size={35} className='text-black hover:bg-teal-300 rounded-full bg-white p-1'/></p>
                  <p><GithubLogo size={35} className='text-black hover:bg-teal-300 rounded-full bg-white p-1'/></p>
                  <p><FacebookLogoIcon size={35} className='text-black hover:bg-teal-300 rounded-full bg-white p-1'/></p>
              </div>
            </div>
          </div>
      </div>
    
  )
  // bg-[url("https://files.123freevectors.com/wp-content/original/121373-light-grey-abstract-texture-background-image.jpg")] bg-no-repeat bg-cover
}

export default Homepage
