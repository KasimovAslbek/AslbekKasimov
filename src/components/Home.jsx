import React from 'react'
import HomeBg from './HomeBg'
import ImageBA from './ImageBA'
import MySparkleButton from './MySparkleButton'
import { Link } from 'react-scroll';


function Home() {
  return (
    <div id='home' className='relative '>
        <div className='absolute 2xl:top-1/2 2xl:transform  2xl:-translate-y-1/2 2xl:left-0 top-52 w-fit right-10 z-40 2xl:ml-10 hidden lg:block'><ImageBA/></div>
        <HomeBg/>
        
        
       
        <div className='xl:-ml-10 2xl:-ml-0 absolute top-1/2 transform  -translate-y-1/2  w-full z-30'>
            <div className='relative  mt-20 mx-auto text-xl sm:text-2xl z-40 2xl:text-3xl min-[2500px]:text-4xl w-full text-center  2xl:max-w-4xl min-[2500px]:max-w-7xl'>
                <h1 className=' bg-[#fafafa] w-fit mx-auto text-3xl sm:text-4xl 2xl:text-5xl  min-[2500px]:text-6xl mb-10 font-bold '>HEY, I'M  <span className='bg-green-400 px-3 block sm:inline-block'>ASLBEK KASIMOV</span></h1>
                <p  className=' bg-[#fafafa] w-fit mx-auto'>Frontend Web Developer passionate about crafting captivating user experiences.  </p>
                <p  className=' bg-[#fafafa] w-fit mx-auto mb-10 lg:mb-16'>Let's build something remarkable together!😊</p>
                <Link to="projects"  smooth={true}  duration={800}><MySparkleButton/></Link>
            </div>
              
        </div>
    </div>
  )
}

export default Home