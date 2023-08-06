import React, { useState } from 'react';
import logo from '../images/face-mini.jpg'

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className='relative text-lg lg:text-xl xl:text-2xl font-bold  text-[#333] z-20'>
        <div className='flex items-center justify-between  mx-4 sm:mx-6 md:mx-11 py-6 lg:py-10 lg:mx-20 '>
            <div className='flex items-center gap-2.5  '>
                <img className='w-10 h-10 lg:w-fit lg:h-fit rounded-full cursor-pointer' src={logo} alt="" />
                <h2 className='uppercase text-xl lg:text-2xl cursor-pointer hover:text-[#7843e9] transition-color duration-300 ease-in-out'>Aslbek Kasimov</h2>
            </div>
            <div>
                <ul className='hidden md:flex gap-7 lg:gap-12 xl:gap-16  '>
                    <li><a className='hover:text-[#7843e9] transition-color duration-300 ease-in-out' href="https://www.example.com">Home</a></li>
                    <li><a className='hover:text-[#7843e9] transition-color duration-300 ease-in-out' href="https://www.example.com">Skills</a></li>
                    <li><a className='hover:text-[#7843e9] transition-color duration-300 ease-in-out' href="https://www.example.com">Projects</a></li>
                    <li><a className='hover:text-[#7843e9] transition-color duration-300 ease-in-out' href="https://www.example.com">About</a></li>
                    <li><a className='hover:text-[#7843e9] transition-color duration-300 ease-in-out' href="https://www.example.com">Contect</a></li>
                </ul>
                <div className='md:hidden' >
                    <svg className={`cursor-pointer ${menuOpen ? 'hidden' : ''}`} onClick={() => setMenuOpen(!menuOpen)} xmlns="http://www.w3.org/2000/svg" width="24" height="14" viewBox="0 0 24 14" fill="none">
                        <path d="M0 1H24M0 7H24M0 13H24" stroke="#122947" strokeWidth="2"/>
                    </svg>
                    <svg className={`cursor-pointer ${menuOpen ? '' : 'hidden'}`} onClick={() => setMenuOpen(!menuOpen)} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M1 1L10 10M19 19L10 10M10 10L19 1L1 19" stroke="#122947" strokeWidth="2"/>
                    </svg>
                </div>
            </div>
        </div>
        <div  className={`absolute  w-full top-16 left-0 ${menuOpen ? '' : 'hidden'} `}>
            <ul className='text-right flex flex-col  mt-5 shadow-xl rounded-b-md'>
                <li className='border-t w-full py-5 '><a className='mr-4 sm:mr-6     hover:text-[#7843e9] transition-color duration-300 ease-in-out' href="https://www.example.com">Home</a></li>
                <li className='border-t w-full py-5 '><a className='mr-4 sm:mr-6     hover:text-[#7843e9] transition-color duration-300 ease-in-out' href="https://www.example.com">Skills</a></li>
                <li className='border-t w-full py-5 '><a className='mr-4 sm:mr-6     hover:text-[#7843e9] transition-color duration-300 ease-in-out' href="https://www.example.com">Projects</a></li>
                <li className='border-t w-full py-5 '><a className='mr-4 sm:mr-6     hover:text-[#7843e9] transition-color duration-300 ease-in-out' href="https://www.example.com">About</a></li>
                <li className='border-t w-full py-5 '><a className='mr-4 sm:mr-6     hover:text-[#7843e9] transition-color duration-300 ease-in-out' href="https://www.example.com">Contect</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar