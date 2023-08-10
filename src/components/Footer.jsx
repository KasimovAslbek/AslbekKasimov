import React from 'react'
import linkedin from '../images/linkedin.png'
import github from '../images/github.png'
import facebook from '../images/facebook.png'
import upwork from '../images/upwork.png'
import telegram from '../images/telegram.png'






function Footer() {
  return (
    <div id='contact' className='bg-[#000] text-[#fff] '>
        <div className='flex flex-col-reverse  sm:flex-row justify-between max-w-main  mx-4  sm:mx-11  lg:mx-24 2xl:mx-auto py-14 sm:py-20 border-b-4'>
        <div className='lg:w-2/5'>
            <h2 className='text-2xl font-bold mb-5'>ASLBEK KASIMOV</h2>
            <p  className='text-xl mb-10'>Let's build something remarkable together!</p>
            <p className='text-xl italic'><span className='hidden sm:inline-block'>Email: </span>aslbekkasimob@gamil.com</p>
        </div>
        <div>
            <p className='text-2xl font-bold mb-5'>SOCIAL</p>
            <div className='flex  gap-2.5 mb-7'>
                <a href="https://t.me/AsilbekQosimov"><img className='w-7 h-7' src={telegram} alt="" /></a>
                <a href="https://www.facebook.com/profile.php?id=100009330039674"><img className='w-7 h-7' src={facebook} alt="" /></a>
                <a href="https://www.linkedin.com/in/aslbek-kasimov-850436157/"><img className='w-7 h-7' src={linkedin} alt="" /></a>
                <a href="https://github.com/KasimovAslbek"><img className='w-7 h-7' src={github} alt="" /></a>
                <a href="https://www.upwork.com/freelancers/~0150385c1c881151ea"><img className='w-7 h-7' src={upwork} alt="" /></a>
                
            </div>
            
        </div>
        </div>
        <div className='py-10'>
            <p className='text-center'>© Copyright 2023. Made by Aslbek Kasimov</p>
        </div>
    </div>
  )
}

export default Footer