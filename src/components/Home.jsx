import React from 'react'
import HomeBg from './HomeBg'

function Home() {
  return (
    <div className='relative'>
        <HomeBg/>
       
        <div className=' absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  w-full'>
            <div className=' font-bold mt-20 mx-auto z-50 text-2xl w-fit text-center max-w-4xl'>
                <h1 className=' bg-white text-4xl '>HEY, I'M <span className='bg-green-400 px-3'>ASLBEK KASIMOV</span></h1>
                <p  className=' bg-white '>Frontend Web Developer passionate about crafting captivating user experiences.  </p>
                <p  className=' bg-white '>Let's build something remarkable together!😊</p>
            </div>
            </div>
            
    </div>
  )
}

export default Home