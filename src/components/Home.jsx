import React from 'react'
import HomeBg from './HomeBg'
import ImageBA from './ImageBA'


function Home() {
  return (
    <div className='relative '>
        <HomeBg/>
        <div className='absolute bottom-0 left-0 z-30 ml-10'><ImageBA/></div>
       
        <div className=' absolute top-1/2 transform  -translate-y-1/2  w-full'>
            <div className='  mt-20 mx-auto z-50 2xl:text-3xl min-[2500px]:text-4xl w-full text-center 2xl:max-w-4xl min-[2500px]:max-w-7xl'>
                <h1 className=' bg-white w-fit mx-auto 2xl:text-5xl  min-[2500px]:text-6xl mb-10 font-bold '>HEY, I'M <span className='bg-green-400 px-3'>ASLBEK KASIMOV</span></h1>
                <p  className=' bg-white w-fit mx-auto'>Frontend Web Developer passionate about crafting captivating user experiences.  </p>
                <p  className=' bg-white w-fit mx-auto'>Let's build something remarkable together!😊</p>
            </div>
            </div>
    </div>
  )
}

export default Home