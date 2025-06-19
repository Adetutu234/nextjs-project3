import React from 'react'
import Button from '../components/Button'

const page = () => {
  return (
    <div className='p-10 bg-[url("https://i0.wp.com/backgroundabstract.com/wp-content/uploads/edd/2022/02/vecteezy_abstract-geometric-background-illustration-in-flat-style_-e1656068792936.jpg?resize=600%2C450&ssl=1")] bg-no-repeat bg-cover min-h-screen text-black '>
        <div className='text-center space-y-5'>
          <div className='inline-block'>
            <p className='font-semibold text-4xl uppercase'>about me</p>
            <div className='w-8 h-1 bg-purple-700 mx-auto mt-1 rounded-2xl'></div>
          </div>
          <p className='text-md'>Here you will find more information about me, what I do, and my current skills mostly in terms <br></br> of programming and technology</p>
        </div>
        
        <div className='grid grid-cols-2 p-15 '>
          <div className='p-5 space-y-5'>
            <h1 className='font-bold text-3xl'>Get to know me!</h1>
            <p className='text-md'>I'm a Frontend Focused Web Developer building and managing the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section. <br></br>
            I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community. Feel free to Connect or Follow me on my Linkedin and Instagram where I post useful content related to Web Development and Programming <br></br>
            I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.Contact
            </p>
            <Button text={'Contact'} className={'px-20 py-4 bg-purple-700 w-fit uppercase text-white font-semibold rounded-lg'}/>
          </div>

          <div className='p-5 space-y-5'>
            <h1 className='font-bold text-3xl'>My Skills</h1>
            <div className=''>
              <ul className='grid grid-cols-4 gap-5 '>
                <button className='bg-slate-700/10 px-4 py-2 rounded hover:bg-purple-300 hover:rounded w-fit'>TAILWIND</button>
                <button className='bg-slate-700/10 px-4 py-2 rounded hover:bg-purple-300 hover:rounded w-fit'>MONGODB</button>
                <button className='bg-slate-700/10 px-4 py-2 rounded hover:bg-purple-300 hover:rounded w-fit'>TYPESCRIPT</button>
                <button className='bg-slate-700/10 px-4 py-2 rounded hover:bg-purple-300 hover:rounded w-fit'>POSTMAN</button>
                <button className='bg-slate-700/10 px-4 py-2 rounded hover:bg-purple-300 hover:rounded w-fit'>GITHUB</button>
                <button className='bg-slate-700/10 px-4 py-2 rounded hover:bg-purple-300 hover:rounded w-fit'>EXPRESS</button>
                <button className='bg-slate-700/10 px-4 py-2 rounded hover:bg-purple-300 hover:rounded w-fit'>REDUX</button>
                <button className='bg-slate-700/10 px-4 py-2 rounded hover:bg-purple-300 hover:rounded w-fit'>REACT</button>
                <button className='bg-slate-700/10 px-4 py-2 rounded hover:bg-purple-300 hover:rounded w-fit'>HTML</button>
                <button className='bg-slate-700/10 px-4 py-2 rounded hover:bg-purple-300 hover:rounded w-fit'>NEXT</button>
                <button className='bg-slate-700/10 px-4 py-2 rounded hover:bg-purple-300 hover:rounded w-fit'>NODE</button>
                <button className='bg-slate-700/10 px-4 py-2 rounded hover:bg-purple-300 hover:rounded w-fit'>CSS</button>
                <button className='bg-slate-700/10 px-4 py-2 rounded hover:bg-purple-300 hover:rounded w-fit'>GIT</button>
              </ul>
            </div>
          </div>
        </div>
    </div>
  )
}

export default page
