import React from 'react'
import pic1 from './assets/undraw_to_the_moon_re_q21i.svg'

import react from './assets/assets/react.png'
import tailwind from './assets/assets/tailwind.png'
import css from './assets/assets/pngwing.com.png'
import js from './assets/javascript.png'
import html from './assets/html.png'


import { useEffect, useRef } from 'react';


const Main = () => {

  return (
    <div className="flex flex-col">
    <div className='p-[100px] flex items-center justify-around mb-[100px] hide scroll' id='home'>
      <div>
        <h1 className='text-[60px]'>
            <p className='font-semibold'>My Name is <span className='gradient1'>Ezat.</span></p>
            <h1 className=' py-4 font-semibold'>About me</h1>
            <p className='text-[14px] font-light py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis neque quidem facere assumenda,<br/> voluptatem suscipit dolor id deserunt esse itaque!</p>
        </h1>
        <div className='my-[32px] flex items-center flex-col gap-4 justify-start sm:flex-row '>
            <button className='rounded bg-[#1d9371] text-black px-8 py-3 button transition-[0.7s] flex-col sm:flex-row'>Resume</button>
            <button className=' bg-black rounded px-8 py-3 text-white transition-[0.7s] button2'>Hire me</button>
        </div>
      </div>
      <div className=' relative hidden md:block'>
        <div className='black right-[75px]'></div>
        <div className='green right-[100px] top-[450px]'></div>
        <div className='green2 top-[50px] right-[550px]'></div>
        <img src={pic1} className='w-[500px] '/>
        <h1></h1>
      </div>
    </div>
      <div className="p-[100px]  ">
        <h1 className='text-center pb-[42px] text-[25px]'>My tech <span className='gradient1 '>stack</span></h1>
        <div className="flex flex-col border-b  items-center justify-center gap-8 md:flex-row ">
          <div className="group relative cursor-pointer flex items-center justify-center">
          <img src={html} className='w-[100px] pb-[32px] group-hover:translate-y-[-50px] duration-300 ' />
          <p className='absolute top-0 opacity-0 group-hover:opacity-100 duration-200 group-hover:translate-y-[50px] text-center'>HTML</p>
          </div>
          <div className="group relative cursor-pointer flex items-center justify-center">
          <img src={css} className='w-[100px] pb-[32px] group-hover:translate-y-[-50px] duration-300' />
          <p className='absolute top-0 opacity-0 group-hover:opacity-100 duration-200 group-hover:translate-y-[50px] text-center'>CSS</p>
          </div>
          <div className="group relative cursor-pointer flex items-center justify-center">
          <img src={js} className='w-[100px] pb-[32px] group-hover:translate-y-[-50px] duration-300' />
          <p className='absolute top-0 opacity-0 group-hover:opacity-100 duration-200 group-hover:translate-y-[50px] text-center'>JavaScript</p>
          </div>
          <div className="group relative cursor-pointer flex items-center justify-center">
          <img src={react} className='w-[100px] pb-[32px] group-hover:translate-y-[-50px] duration-300' />
          <p className='absolute top-0 opacity-0 group-hover:opacity-100 duration-200 group-hover:translate-y-[50px]'>React</p>
          </div>
          <div className="group relative cursor-pointer">
          <img src={tailwind} className='w-[100px] pb-[32px] group-hover:translate-y-[-50px] duration-300' />
          <p className='absolute top-0 opacity-0 group-hover:opacity-100 duration-200 group-hover:translate-y-[25px] text-center'>Tailwind CSS</p>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Main
