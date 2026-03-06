"use client"

import React from 'react'
import { FacebookLogoIcon, LinkedinLogo, YoutubeLogo, TwitterLogoIcon, GithubLogo } from '@phosphor-icons/react'

const Footer = () => {
  return (
    <div className='grid lg:grid-cols-4 sm:grid-cols-1 p-10 pb-5 gap-10'>
      <div className='space-y-5'>
        <h1 className='font-bold text-xl uppercase'>Suliat Apanisile</h1>
        <p className='text-sm'>A Frontend focused Web Developer building Websites and Web Applications that leads to the success of the overall product</p>
      </div>

      <div className='border-r-1 border-r-teal-300'>
        <ul className='space-y-2 capitalize text-md'> 
          <li>web developer</li>
          <li>frontend developer</li>
        </ul>
      </div>

      <div className='border-r-1 border-r-teal-300'>
        <ul className='space-y-2 capitalize text-md'>
          <li>home</li>
          <li>about me</li>
          <li>my projects</li>
          <li>contact me</li>
        </ul>
      </div>

      <div className='space-y-5 cursor-pointer'>
        <p className='font-bold text-lg capitalize'>social media handles</p>
        <div className='lg:flex lg:space-x-5 space-y-3 shadow-2xl drop-shadow-2xl'>
            <p><TwitterLogoIcon size={25} className='hover:bg-purple-300 hover:rounded'/></p>
            <p><LinkedinLogo size={25} className='hover:bg-purple-300 hover:rounded'/></p>
            <p><YoutubeLogo size={25} className='hover:bg-purple-300 hover:rounded'/></p>
            <p><GithubLogo size={25} className='hover:bg-purple-300 hover:rounded'/></p>
            <p><FacebookLogoIcon size={25} className='hover:bg-purple-300 hover:rounded'/></p>
        </div>
      </div>

      <hr className="col-span-full bg-teal-300 h-0.5 mt-10" />
      <div className='col-span-full text-xs flex items-center justify-center'>
        <p> &copy; Copyright 2025. Made by <span className='font-bold underline text-teal-300'>Suliat Apanisile</span></p>
      </div>
    </div>
  )
}

export default Footer
