import Image from 'next/image'
import Button from '../components/Button'
import Link from 'next/link'
import image10 from '../images/image10.jpeg'
import react from '../images/react.svg'
import typescript from '../images/typescript.svg'
import javascript from '../images/javascript.svg'
import wordpress from '../images/wordpress.svg'

const page = () => {
  return (
    <div className='lg:p-10 p-8  '>
      {/* top */}
          <p className='text-gray-200 text-sm uppercase justify-self-center'>my bio</p>
        <div className='text-center space-y-5'>
          <div className='space-y-4'>
          <h1 className='text-3xl capitalize justify-self-center'>about <span className='text-teal-300'>me</span></h1>
          <p className='text-center text-lg w-200 justify-self-center'>Here you will find more information about me, what I do, and my current skills mostly in terms <br></br> of programming and technology </p>
          </div>

        </div>
        
        <div className='grid lg:grid-cols-2 grid-cols-1 lg:p-15 mt-10'>
          {/* left */}
          <div className="relative border-2 border-teal-300 rounded-full h-120 w-120 p-10">
            <Image src={image10} alt="about me" className='h-100 w-100 object-cover rounded-full mx-auto'/>
            <div className="absolute -top-4 left-65 transform -translate-x-1/2 -translate-y-2">
              <Image src={react} alt="react" className='h-15 w-fit object-contain rounded-full border-2 '/>
            </div>
            <div className="absolute top-50 -right-5 transform translate-x-2">
              <Image src={typescript} alt="typescript" className='h-13 w-fit object-contain rounded-full'/>
            </div>
            <div className="absolute bottom-1/2 -left-6 transform -translate-x-2">
              <Image src={javascript} alt="javascript" className='h-13 w-fit object-contain rounded-full'/>
            </div>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 translate-y-2">
              <Image src={wordpress} alt="wordpress" className='h-15 w-fit object-contain rounded-full'/>
            </div>
          </div>
          {/* right */}
          <div className='lg:p-5 space-y-5 '>
            <h1 className='font-bold text-2xl lg:text-3xl'>Get to know me!</h1>
            <p className='text-md'>I'm a Frontend Focused Web Developer building and managing the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section. <br className='pt-5'></br>
            I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community. Feel free to Connect or Follow me on my Linkedin and Instagram where I post useful content related to Web Development and Programming <br></br>
            I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.Contact
            </p>
            <Link href={'/contact'}>
            <Button text={'Contact'} className={'lg:px-20 px-6 py-2 hover:bg-teal-500 bg-teal-300 w-fit uppercase font-semibold rounded-lg text-black'}/>
            </Link>
          </div>

          {/* <div className='lg:p-5 space-y-5 mt-10'>
            <h1 className='font-bold text-3xl'>My Skills</h1>
            <div className=''>
              <ul className='grid lg:grid-cols-4 grid-cols-3 gap-4'>
                <button className='bg-slate-700/10 lg:px-2 lg:py-1 px-4 py-2 rounded hover:bg-purple-300 hover:rounded w-fit'>TAILWIND</button>
                <button className='bg-slate-700/10 lg:px-2 lg:py-1 px-4 py-2 rounded hover:bg-purple-300 hover:rounded w-fit'>MONGODB</button>
                <button className='bg-slate-700/10 lg:px-2 lg:py-1 px-4 py-2 rounded hover:bg-purple-300 hover:rounded w-fit'>TYPESCRIPT</button>
                <button className='bg-slate-700/10 lg:px-2 lg:py-1 px-4 py-2 rounded hover:bg-purple-300 hover:rounded w-fit'>POSTMAN</button>
                <button className='bg-slate-700/10 lg:px-2 lg:py-1 px-4 py-2 rounded hover:bg-purple-300 hover:rounded w-fit'>EXPRESS</button>
                <button className='bg-slate-700/10 lg:px-2 lg:py-1 px-4 py-2 rounded hover:bg-purple-300 hover:rounded w-fit'>GITHUB</button>
                <button className='bg-slate-700/10 lg:px-2 lg:py-1 px-4 py-2 rounded hover:bg-purple-300 hover:rounded w-fit'>REDUX</button>
                <button className='bg-slate-700/10 lg:px-2 lg:py-1 px-4 py-2 rounded hover:bg-purple-300 hover:rounded w-fit'>REACT</button>
                <button className='bg-slate-700/10 lg:px-2 lg:py-1 px-4 py-2 rounded hover:bg-purple-300 hover:rounded w-fit'>HTML</button>
                <button className='bg-slate-700/10 lg:px-2 lg:py-1 px-4 py-2 rounded hover:bg-purple-300 hover:rounded w-fit'>NEXT</button>
                <button className='bg-slate-700/10 lg:px-2 lg:py-1 px-4 py-2 rounded hover:bg-purple-300 hover:rounded w-fit'>NODE</button>
                <button className='bg-slate-700/10 lg:px-2 lg:py-1 px-4 py-2 rounded hover:bg-purple-300 hover:rounded w-fit'>CSS</button>
                <button className='bg-slate-700/10 px-4 py-1 rounded hover:bg-purple-300 hover:rounded w-fit'>GIT</button>
              </ul>
            </div>
          </div> */}

        </div>


    </div>
  )
}

export default page
