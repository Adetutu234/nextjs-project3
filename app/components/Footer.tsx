"use client"

import React from 'react'
import { FacebookLogoIcon, LinkedinLogo, YoutubeLogo, TwitterLogoIcon, GithubLogo } from '@phosphor-icons/react'

const Footer = () => {
  return (
    <div className='grid lg:grid-cols-3 sm:grid-cols-1 p-10 pb-5 gap-10'>
      <div className='space-y-5 col-span-2'>
        <h1 className='font-bold text-xl uppercase'>Suliat Apanisile</h1>
        <p className='text-sm lg:w-150'>A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</p>
      </div>
      <div className='space-y-5 cursor-pointer'>
        <p className='font-bold text-xl uppercase '>social</p>
        <div className='lg:flex lg:space-x-6 space-y-3 shadow-2xl drop-shadow-2xl'>
            <p><TwitterLogoIcon size={30} className='hover:bg-purple-300 hover:rounded'/></p>
            <p><LinkedinLogo size={30} className='hover:bg-purple-300 hover:rounded'/></p>
            <p><YoutubeLogo size={30} className='hover:bg-purple-300 hover:rounded'/></p>
            <p><GithubLogo size={30} className='hover:bg-purple-300 hover:rounded'/></p>
            <p><FacebookLogoIcon size={30} className='hover:bg-purple-300 hover:rounded'/></p>
        </div>
      </div>
      <hr className="col-span-3 border-t border-white mt-12" />
      <div className='col-span-3 text-xs'>
        <p className='text-center'> &copy; Copyright 2025. Made by <span className='font-bold underline'>Suliat Apanisile</span></p>
      </div>
    </div>
  )
}

export default Footer
