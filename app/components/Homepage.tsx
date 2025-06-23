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
          <div className='min-h-[calc(100vh-80px)] lg:text-center lg:p-28 py-30 lg:space-y-10 space-y-5 bg-[url("https://files.123freevectors.com/wp-content/original/121373-light-grey-abstract-texture-background-image.jpg")] bg-no-repeat bg-cover rounded-2xl '>
            <p className='font-extrabold lg:text-5xl text-3xl text-center text-black uppercase'>hey, I'm suliat apanisile</p>
            <p className='lg:text-xl text-md text-slate-700 text-center'>A Result-Oriented Web Developer building and managing Websites and Web <br></br> Applications that leads to the success of the overall product</p>
            <Link href={'/projects'}>
              <Button text={'projects'} className={'w-fit lg:px-20 px-6 py-4 bg-purple-700 mx-auto rounded-lg font-bold uppercase'} onClick={handleClick}/>
            </Link>
          </div>
            <div className='lg:absolute lg:top-40 lg:bg-white lg:p-2'>
              <div className='lg:grid hidden lg:grid-rows-4 space-y-3 shadow-2xl drop-shadow-2xl cursor-pointer '>
                  <p><TwitterLogoIcon size={35} className='text-black hover:bg-purple-300 hover:rounded'/></p>
                  <p><LinkedinLogo size={35} className='text-black hover:bg-purple-300 hover:rounded'/></p>
                  <p><YoutubeLogo size={35} className='text-black hover:bg-purple-300 hover:rounded'/></p>
                  <p><GithubLogo size={35} className='text-black hover:bg-purple-300 hover:rounded'/></p>
                  <p><FacebookLogoIcon size={35} className='text-black hover:bg-purple-300 hover:rounded'/></p>
              </div>
            </div>
      </div>
    
  )
}

export default Homepage
