"use client"

import React, { useState } from 'react'
import Button from '../components/Button'
import Modal from '../components/Modal'
import { PhoneIcon, EnvelopeOpenIcon, MapPinLineIcon } from '@phosphor-icons/react'


const page = () => {
  const [toggle, setToggle]=useState(false)
  const handleToggle = () =>{
    setToggle (!toggle)
  }
  return (
    <div className=''>
          {/* top */}
        <div>
          <div className='space-y-1'>
          <p className='text-gray-200 text-sm uppercase justify-self-center'>services</p>
          <h1 className='text-3xl capitalize justify-self-center'>contact <span className='text-teal-300'>me</span></h1>
          <p className='text-center'> i am currently open to full-time, contract or part-time opportunities in Front End Development </p>
          </div>
          {/* grid */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10 bg-white/10 p-10 m-40'>
            {/* left */}
          <div>
            <p>Have an awesome project idea? <br/><span className='text-teal-300'> Let's collaborate and bring it to life! </span></p>
            <ul className='space-y-5 pt-5'>
              <div className='flex gap-3 '>
                <PhoneIcon size={35} className='border-2 rounded-full p-1 text-black bg-teal-300'/>
                <p>+2347025151571</p>
              </div>
              <div className='flex gap-3'>
                <EnvelopeOpenIcon size={35} className='border-2 rounded-full p-1 text-black bg-teal-300'/>
                <p>apanisilemorenikeji@gmail.com</p>
              </div>
              <div className='flex gap-3'>
                <MapPinLineIcon size={35} className='border-2 rounded-full p-1 text-black bg-teal-300'/>
                Lagos.Nigeria
              </div>
            </ul>
          </div>

          {/* right */}
      <div className=''>
        <form action="" className='space-y-3 '>
          <p className='font-bold'>Full Name</p>
          <input 
            type="text"
            placeholder='Enter Name'
            className='outline-1 text-sm lg:p-5 p-3 bg-slate-700/10 w-full rounded-lg' />

          <p className='font-bold'>Email Address</p>
          <input 
            type="email"
            placeholder='Enter Email'
            className='outline-1 text-sm lg:p-5 p-3 bg-slate-700/10 w-full rounded-lg' />

          <p className='font-bold'>Message</p>
            <textarea
              placeholder="Enter your message"
              rows= {3}
              className="w-full p-4 border rounded-md resize-none bg-slate-700/10"/>
            </form>
        <div className='flex justify-center mt-5'>
          <Button text={'submit'} className={'lg:px-20 px-6 py-2 cursor-pointer rounded-lg uppercase font-bold bg-teal-300 text-center lg:w-fit text-black '} onClick={handleToggle}/>
        </div>
        {toggle && <Modal handleToggle={handleToggle}/>}
      </div>

          </div>

        </div>
        
    </div>
  )

}

export default page
