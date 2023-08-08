import React from 'react'
import SkillDynamic from './SkillDynamic'

function Skills() {
  return (
    <div id='skills' className='pt-24'>
      <div className='max-w-main  mx-4  sm:mx-11  lg:mx-24 2xl:mx-auto relative mb-20 sm:mb-44 xl:my-44 xl:flex' >
        <div className='xl:w-1/2 text-xl sm:text-2xl 2xl:text-3xl min-[2500px]:text-4xl xl:mr-16 text-[#666] sm:mb-40'>
          <h2 className='text-3xl sm:text-4xl 2xl:text-5xl  font-bold text-[#333] mb-10'>Check out my Skills!</h2>
          <p>I have all necessary skills for a front end developer such as HTML, CSS and JS. I mostly build sites using <span className='font-bold text-[#7843e9]'>React JS and Tailwind css</span>. You can also see my skills in the graph. </p>
          <a className='text-blue-700 my-3 block' href="https://www.example.com/">🚀 Try It Out! 🚀</a>
          <p>Also, I know the Python programming language well. With it, I can do many other things like automating tasks, web scraping.</p>
        </div>
        <div className=" xl:w-1/2 relative mx-auto h-[300px] max-h-[400px]" id="SkillDynamic"> {/* Wrap SkillDynamic */}
          <SkillDynamic />
        </div>
      </div>
    </div>
  )
}

export default Skills