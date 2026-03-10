"use client"

import React, { useState } from 'react'
import Button from './Button'
import { FacebookLogoIcon, LinkedinLogo, YoutubeLogo, TwitterLogoIcon, GithubLogo ,CodeIcon, MagicWandIcon, WebhooksLogoIcon } from '@phosphor-icons/react'
import Link from 'next/link'

const Homepage = () => {
  const [click , setClick]= useState(false)
  const handleClick = () => {
    setClick (!click)}
  return (
      <div className='relative '>
        {/* top */}
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
          
          {/* services */}
          <div className='bg-black/5'>
            <p className='text-gray-200 text-sm uppercase justify-self-center'>services</p>
            <h1 className='text-3xl capitalize justify-self-center'>what <span className='text-teal-300'>i do</span></h1>

            <div className='grid grid-cols-3 gap-5 p-10'>
              <div className='bg-white/10 shadow-2xl drop-shadow-2xl border-1 border-teal-300 p-5 hover:bg-teal-300 hover:text-black hover:shadow-2xl hover:drop-shadow-2xl rounded-xl '>
                <CodeIcon size={32} className='border-2 rounded-full p-1'/>
                <h1 className='font-bold text-xl border-b-1 border-b-teal-300 pt-3 capitalize'>web development</h1> 
                <p className='py-3 font-medium text-sm'>I use my knowledge of various programming languages such as HTML5, CSS3, REACT, JAVASCRIPT, TYPESCRIPT, TAILWIND TO build digital solutions for users</p>
              </div>
              <div className='bg-white/10 shadow-2xl drop-shadow-2xl border-1 border-teal-300 p-5 hover:bg-teal-300 hover:text-black hover:shadow-2xl hover:drop-shadow-2xl rounded-xl '>
                <WebhooksLogoIcon size={32} className='border-2 rounded-full p-1'/>
                <h1 className='font-bold text-xl border-b-1 border-b-teal-300 pt-3 capitalize'>wordpress development</h1> 
                <p className='py-3 font-medium text-sm'>Leveraging WordPress, I design and develop websites by customizing themes, building and configuring plugins, and using HTML, CSS, and JavaScript to create engaging digital experiences.</p>
              </div>
              <div className='bg-white/10 shadow-2xl drop-shadow-2xl border-1 border-teal-300 p-5 hover:bg-teal-300 hover:text-black hover:shadow-2xl hover:drop-shadow-2xl rounded-xl '>
                <MagicWandIcon size={32} className='border-2 rounded-full p-1'/>
                <h1 className='font-bold text-xl border-b-1 border-b-teal-300 pt-3 capitalize'>web development</h1> 
                <p className='py-3 font-medium text-sm'>I use my knowledge of various programming languages such as HTML5, CSS3, REACT, JAVASCRIPT, TYPESCRIPT, TAILWIND TO build digital solutions for users</p>
              </div>
            </div>
          </div>

          {/* EXperience */}
          {/* <div>
            <p className='text-gray-200 text-sm uppercase justify-self-center'>services</p>
            <h1 className='text-3xl capitalize justify-self-center'>experience <span className='text-teal-300'></span></h1> */}
            {/* grid 2 */}
            {/* <div> */}
                {/* blue */}
              {/* <div className='bg-blue-600'>
                <image />
              </div> */}
                {/* yellow */}
              {/* <div>
              </div> */}
                {/* pink */}
              {/* <div>
              </div> */}
                {/* red */}
              {/* <div>
              </div>
            </div>
          </div> */}

      </div>
    
  )
  // bg-[url("https://files.123freevectors.com/wp-content/original/121373-light-grey-abstract-texture-background-image.jpg")] bg-no-repeat bg-cover
}

export default Homepage
