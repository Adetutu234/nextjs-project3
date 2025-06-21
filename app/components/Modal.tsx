"use client"

import React from 'react'
import { XCircle } from "@phosphor-icons/react";

const Modal = ({handleToggle}:any) => {
  return (
    <div className='inset-0 backdrop-blur-xs fixed'>
      <div className='bg-white border-1 text-center relative mx-auto top-[35%] lg:w-150 w-70 lg:p-10 p-5 space-y-3'>
        <XCircle size={32} onClick={handleToggle} className='absolute right-1 top-1 hover:text-purple-700'/>
        <h1 className='font-bold text-2xl'>Thank you for reaching out! 🎉</h1>
        <p className='text-sm'>Your message has been successfully received. I truly appreciate you taking the time to contact me. I’ll review your message and get back to you as soon as possible. In the meantime, feel free to explore the rest of the site or connect with me on social media!</p>
      </div>
    </div>
  )
}

export default Modal
