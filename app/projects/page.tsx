import React from 'react'
import Image from 'next/image'
import image1 from '../images/Screenshot 2025-06-18 044525.png'
import image4 from '../images/image4.png'
import image5 from '../images/image5.png'

const page = () => {
  return (
    <div className='p-10 bg-[url("https://i0.wp.com/backgroundabstract.com/wp-content/uploads/edd/2022/02/vecteezy_abstract-geometric-background-illustration-in-flat-style_-e1656068792936.jpg?resize=600%2C450&ssl=1")] bg-no-repeat bg-cover min-h-screen text-black '>
      <div className='text-center space-y-5 pb-7'>
        <div className='inline-block'>
          <p className='font-semibold text-4xl uppercase'>projects</p>
          <div className='bg-purple-700 h-1 mt-1 mx-auto rounded-2xl w-8'></div>
        </div>
        <p className='text-lg'>Here you will find some of the personal and clients projects that I created with each project containing its own case study</p>
      </div>
    <div className='space-y-20'>
          <div>
            <Image src={image1} alt='image of a project ' className='h-80 w-150 mx-auto'/>
                <div className='text-center space-y-3 p-7'>
                  <div className='inline-block'>
                    <p className='font-bold text-2xl'>Project 1 of 10</p>
                    <div className=' bg-purple-700 w-35 h-1 mx-auto mt-1 rounded-2xl'></div>
                  </div>
                  <p className='font-bold text-xl'>Movie app</p>
                  <p className='text-md'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum facilis consectetur recusandae at. <br /> Dolorem temporibus veritatis eaque non distinctio veniam.</p>
                  <div className='flex gap-5 justify-center pt-3'>
                    <button className='bg-slate-700/10 px-3 py-2 rounded-2xl hover:bg-purple-300 hover:rounded-2xl w-fit'>React-Router</button>
                    <button className='bg-slate-700/10 px-3 py-2 rounded-2xl hover:bg-purple-300 hover:rounded-2xl w-fit'>TailwindCSS</button>
                    <button className='bg-slate-700/10 px-3 py-2 rounded-2xl hover:bg-purple-300 hover:rounded-2xl w-fit'>Cloudinary</button>
                    <button className='bg-slate-700/10 px-3 py-2 rounded-2xl hover:bg-purple-300 hover:rounded-2xl w-fit'>Javascript</button>
                    <button className='bg-slate-700/10 px-3 py-2 rounded-2xl hover:bg-purple-300 hover:rounded-2xl w-fit'>React</button>
                    <button className='bg-slate-700/10 px-3 py-2 rounded-2xl hover:bg-purple-300 hover:rounded-2xl w-fit'>Axios</button>
                  </div>
                </div>
          </div>
  
          <div>
            <Image src={image4} alt='image of a project ' className='h-80 w-150 mx-auto'/>
                <div className='text-center space-y-3 p-7'>
                  <div className='inline-block'>
                    <p className='font-bold text-2xl'>Project 2 of 10</p>
                    <div className=' bg-purple-700 w-35 h-1 mx-auto mt-1 rounded-2xl'></div>
                  </div>
                  <p className='font-bold text-xl'>Novel app</p>
                  <p className='text-md'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum facilis consectetur recusandae at. <br /> Dolorem temporibus veritatis eaque non distinctio veniam.</p>
                  <div className='flex gap-5 justify-center pt-3'>
                    <button className='bg-slate-700/10 px-3 py-2 rounded-2xl hover:bg-purple-300 hover:rounded-2xl w-fit'>React-Router</button>
                    <button className='bg-slate-700/10 px-3 py-2 rounded-2xl hover:bg-purple-300 hover:rounded-2xl w-fit'>TailwindCSS</button>
                    <button className='bg-slate-700/10 px-3 py-2 rounded-2xl hover:bg-purple-300 hover:rounded-2xl w-fit'>Cloudinary</button>
                    <button className='bg-slate-700/10 px-3 py-2 rounded-2xl hover:bg-purple-300 hover:rounded-2xl w-fit'>Javascript</button>
                    <button className='bg-slate-700/10 px-3 py-2 rounded-2xl hover:bg-purple-300 hover:rounded-2xl w-fit'>React</button>
                    <button className='bg-slate-700/10 px-3 py-2 rounded-2xl hover:bg-purple-300 hover:rounded-2xl w-fit'>Unsplash</button>
                  </div>
                </div>
          </div>
  
          <div>
            <Image src={image5} alt='image of a project ' className='h-80 w-150 mx-auto'/>
                <div className='text-center space-y-3 p-7'>
                  <div className='inline-block'>
                    <p className='font-bold text-2xl'>Project 3 of 10</p>
                    <div className=' bg-purple-700 w-35 h-1 mx-auto mt-1 rounded-2xl'></div>
                  </div>
                  <p className='font-bold text-xl'>Todo app</p>
                  <p className='text-md'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum facilis consectetur recusandae at. <br /> Dolorem temporibus veritatis eaque non distinctio veniam.</p>
                  <div className='flex gap-5 justify-center pt-3'>
                    <button className='bg-slate-700/10 px-3 py-2 rounded-2xl hover:bg-purple-300 hover:rounded-2xl w-fit'>React-Router</button>
                    <button className='bg-slate-700/10 px-3 py-2 rounded-2xl hover:bg-purple-300 hover:rounded-2xl w-fit'>TailwindCSS</button>
                    <button className='bg-slate-700/10 px-3 py-2 rounded-2xl hover:bg-purple-300 hover:rounded-2xl w-fit'>Redux-React</button>
                    <button className='bg-slate-700/10 px-3 py-2 rounded-2xl hover:bg-purple-300 hover:rounded-2xl w-fit'>Javascript</button>
                    <button className='bg-slate-700/10 px-3 py-2 rounded-2xl hover:bg-purple-300 hover:rounded-2xl w-fit'>React</button>
                    <button className='bg-slate-700/10 px-3 py-2 rounded-2xl hover:bg-purple-300 hover:rounded-2xl w-fit'>API</button>
                  </div>
                </div>
          </div>
  
          <div>
            <Image src={image1} alt='image of a project ' className='h-80 w-150 mx-auto'/>
                <div className='text-center space-y-3 p-7'>
                  <div className='inline-block'>
                    <p className='font-bold text-2xl'>Project 4 of 10</p>
                    <div className=' bg-purple-700 w-35 h-1 mx-auto mt-1 rounded-2xl'></div>
                  </div>
                  <p className='font-bold text-xl'>Software Developer Portfolio Showcase</p>
                  <p className='text-md'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum facilis consectetur recusandae at. <br /> Dolorem temporibus veritatis eaque non distinctio veniam.</p>
                  <div className='flex gap-5 justify-center pt-3'>
                    <button className='bg-slate-700/10 px-3 py-2 rounded-2xl hover:bg-purple-300 hover:rounded-2xl w-fit'>Nextjs</button>
                    <button className='bg-slate-700/10 px-3 py-2 rounded-2xl hover:bg-purple-300 hover:rounded-2xl w-fit'>TailwindCSS</button>
                    <button className='bg-slate-700/10 px-3 py-2 rounded-2xl hover:bg-purple-300 hover:rounded-2xl w-fit'>Cloudinary</button>
                    <button className='bg-slate-700/10 px-3 py-2 rounded-2xl hover:bg-purple-300 hover:rounded-2xl w-fit'>Typescript</button>
                    <button className='bg-slate-700/10 px-3 py-2 rounded-2xl hover:bg-purple-300 hover:rounded-2xl w-fit'>Vercel</button>
                    <button className='bg-slate-700/10 px-3 py-2 rounded-2xl hover:bg-purple-300 hover:rounded-2xl w-fit'>PhosphorIcons</button>
                  </div>
                </div>
          </div>
  
          <div>
            <Image src={image1} alt='image of a project ' className='h-80 w-150 mx-auto'/>
                <div className='text-center space-y-3 p-7'>
                  <div className='inline-block'>
                    <p className='font-bold text-2xl'>Project 5 of 10</p>
                    <div className=' bg-purple-700 w-35 h-1 mx-auto mt-1 rounded-2xl'></div>
                  </div>
                  <p className='font-bold text-xl'>Movie app</p>
                  <p className='text-md'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum facilis consectetur recusandae at. <br /> Dolorem temporibus veritatis eaque non distinctio veniam.</p>
                  <div className='flex gap-5 justify-center pt-3'>
                    <button className='bg-slate-700/10 px-3 py-2 rounded-2xl hover:bg-purple-300 hover:rounded-2xl w-fit'>React-Router</button>
                    <button className='bg-slate-700/10 px-3 py-2 rounded-2xl hover:bg-purple-300 hover:rounded-2xl w-fit'>TailwindCSS</button>
                    <button className='bg-slate-700/10 px-3 py-2 rounded-2xl hover:bg-purple-300 hover:rounded-2xl w-fit'>Cloudinary</button>
                    <button className='bg-slate-700/10 px-3 py-2 rounded-2xl hover:bg-purple-300 hover:rounded-2xl w-fit'>Javascript</button>
                    <button className='bg-slate-700/10 px-3 py-2 rounded-2xl hover:bg-purple-300 hover:rounded-2xl w-fit'>React</button>
                    <button className='bg-slate-700/10 px-3 py-2 rounded-2xl hover:bg-purple-300 hover:rounded-2xl w-fit'>Axios</button>
                  </div>
                </div>
          </div>
    </div>
    </div>
  )
}

export default page
