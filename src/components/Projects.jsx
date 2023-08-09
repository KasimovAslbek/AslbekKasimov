import React from 'react'
import ProjectSlider from './ProjectsSlider'

function Projects() {
  return (
    <div id='projects' className='pt-40'>
        <div>
            <h2 className='text-center text-3xl sm:text-4xl 2xl:text-5xl  min-[2500px]:text-6xl  font-bold'>My projects</h2>
            <div className='h-3 w-16 bg-[#7843e9] rounded-full mx-auto mt-4 mb-10 md:mb-20'></div>
            <div className='mx-11 lg:w-11/12 lg:mx-auto'>
                <ul className='text-2xl lg:text-3xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 w-full mx-auto font-bold text-blue-700 gap-4'>
                    <li>👉<a href="https://kasimov-aslbek-maroon.netlify.app/">Maroon</a></li>
                    <li>👉<a href="https://qosimov-s-zoo.netlify.app/">Zoo online</a></li>
                    <li>👉<a href="https://dream-perfect.vercel.app/">Dream perfect</a></li>
                    <li>👉<a href="https://a-qosimov-dream-tour.netlify.app/">Dream tour</a></li>
                    <li>👉<a href="https://qosimov-car-payments.netlify.app/">Car payment</a></li>
                    <li>👉<a href="https://3d-qosimov.netlify.app/">3D case</a></li>
                    <li>👉<a href="https://github.com/KasimovAslbek/bublBug">Bug bubl</a></li>
                </ul>
            </div>
        </div>
        <div className="mr-40"> <ProjectSlider/></div>
    </div>
  )
}

export default Projects