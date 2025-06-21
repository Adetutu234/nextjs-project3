"use client"

import React, { useState } from 'react'
import Button from '../components/Button'
import Modal from '../components/Modal'

const page = () => {
  const [toggle, setToggle]=useState(false)
  const handleToggle = () =>{
    setToggle (!toggle)
  }
  return (
    <div className='p-10 bg-[url("https://i0.wp.com/backgroundabstract.com/wp-content/uploads/edd/2022/02/vecteezy_abstract-geometric-background-illustration-in-flat-style_-e1656068792936.jpg?resize=600%2C450&ssl=1")] bg-no-repeat bg-cover min-h-screen text-black '>
      <div className='text-center space-y-5 pb-7'>
        <div className="inline-block">
          <h1 className='font-semibold text-4xl'>Contact</h1>
          <div className='w-8 h-1 bg-purple-700 mx-auto mt-1 rounded-2xl'></div>
        </div>

        <p className='text-md'>Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</p>
      </div>

      <div className='lg:ml-40 lg:mr-40 lg:p-10  bg-white gap-5 space-y-5 '>
        <form action="" className='space-y-3 p-5 '>
          <p className='font-bold'>Name</p>
          <input 
            type="text"
            placeholder='Full Name'
            className='outline-1 text-sm lg:p-5 p-3 bg-slate-700/10 w-full rounded-lg' />

          <p className='font-bold'>Email</p>
          <input 
            type="email"
            placeholder='JaneDoe@gmail.com'
            className='outline-1 text-sm lg:p-5 p-3 bg-slate-700/10 w-full rounded-lg' />

          <p className='font-bold'>Message</p>
            <textarea
              placeholder="Enter your message"
              rows= {8}
              className="w-full p-4 border rounded-md resize-none bg-slate-700/10"/>
            <Button text={'submit'} className={'lg:px-20 px-6 py-4 cursor-pointer rounded-lg uppercase font-bold bg-purple-700 text-center lg:w-fit text-white '} onClick={handleToggle}/>
            {toggle && <Modal handleToggle={handleToggle}/>}
        </form>
      </div>
    </div>
  )
}

export default page
