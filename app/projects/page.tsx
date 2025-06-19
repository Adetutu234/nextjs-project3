import React from 'react'
import Image from 'next/image'
import image1 from '../images/Screenshot 2025-06-18 044525.png'
import image4 from '../images/image4.png'

const page = () => {
  return (
    <div className='p-10 bg-[url("https://i0.wp.com/backgroundabstract.com/wp-content/uploads/edd/2022/02/vecteezy_abstract-geometric-background-illustration-in-flat-style_-e1656068792936.jpg?resize=600%2C450&ssl=1")] bg-no-repeat bg-cover min-h-screen text-black '>
      <div className='text-center space-y-5 pb-7'>
        <h1 className='font-semibold text-4xl inline-block border-b-4 border-purple-700'>Projects</h1>
        <p className='text-lg'>Here you will find some of the personal and clients projects that I created with each project containing its own case study</p>
      </div>
    <div className='space-y-10'>
          <div>
            <Image src={image1} alt='image of a project ' className='h-80 w-150 mx-auto'/>
                <div className='text-center space-y-3 p-7'>
                  <p className='inline-block border-b-4 border-purple-700 font-bold text-2xl'>Project 1 of 10</p>
                  <p className='font-bold text-xl'>Movie app</p>
                  <p className='text-md'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum facilis consectetur recusandae at. <br /> Dolorem temporibus veritatis eaque non distinctio veniam.</p>
                </div>
          </div>
  
          <div>
            <Image src={image4} alt='image of a project ' className='h-80 w-150 mx-auto'/>
                <div className='text-center space-y-3 p-7'>
                  <p className='inline-block border-b-4 border-purple-700 font-bold text-2xl'>Project 2 of 10</p>
                  <p className='font-bold text-xl'>Novel app</p>
                  <p className='text-md'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum facilis consectetur recusandae at. <br /> Dolorem temporibus veritatis eaque non distinctio veniam.</p>
                </div>
          </div>
  
          <div>
            <Image src={image1} alt='image of a project ' className='h-80 w-150 mx-auto'/>
                <div className='text-center space-y-3 p-7'>
                  <p className='inline-block border-b-4 border-purple-700 font-bold text-2xl'>Project 3 of 10</p>
                  <p className='font-bold text-xl'>Movie app</p>
                  <p className='text-md'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum facilis consectetur recusandae at. <br /> Dolorem temporibus veritatis eaque non distinctio veniam.</p>
                </div>
          </div>
  
          <div>
            <Image src={image1} alt='image of a project ' className='h-80 w-150 mx-auto'/>
                <div className='text-center space-y-3 p-7'>
                  <p className='inline-block border-b-4 border-purple-700 font-bold text-2xl'>Project 4 of 10</p>
                  <p className='font-bold text-xl'>Movie app</p>
                  <p className='text-md'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum facilis consectetur recusandae at. <br /> Dolorem temporibus veritatis eaque non distinctio veniam.</p>
                </div>
          </div>
  
          <div>
            <Image src={image1} alt='image of a project ' className='h-80 w-150 mx-auto'/>
                <div className='text-center space-y-3 p-7'>
                  <p className='inline-block border-b-4 border-purple-700 font-bold text-2xl'>Project 5 of 10</p>
                  <p className='font-bold text-xl'>Movie app</p>
                  <p className='text-md'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum facilis consectetur recusandae at. <br /> Dolorem temporibus veritatis eaque non distinctio veniam.</p>
                </div>
          </div>
    </div>
    </div>
  )
}

export default page
