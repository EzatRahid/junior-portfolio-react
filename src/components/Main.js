import React from 'react'
import pic1 from './assets/undraw_to_the_moon_re_q21i.svg'

import { useEffect, useRef } from 'react';


const Main = () => {

  return (
    <div className='p-[100px] flex items-center justify-around mb-[100px] hide'>
      <div>
        <h1 className='text-[60px]'>
            <p className='font-semibold'>My Name is <span className='gradient1'>Ezat.</span></p>
            <h1 className=' py-4 font-semibold'>About me</h1>
            <p className='text-[14px] font-light py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis neque quidem facere assumenda,<br/> voluptatem suscipit dolor id deserunt esse itaque!</p>
        </h1>
        <div className='my-[32px]'>
            <button className='rounded bg-[#00CE22] text-black px-8 py-3 button transition-[0.7s]'>Resume</button>
            <button className='ml-[16px] bg-black rounded px-8 py-3 text-white transition-[0.7s] button2'>Hire me</button>
        </div>
      </div>
      <div className=' relative'>
        <div className='black right-[75px]'></div>
        <div className='green right-[100px] top-[450px]'></div>
        <div className='green2 top-[50px] right-[550px]'></div>
        <img src={pic1} className='w-[500px]'/>
        <h1></h1>
      </div>
    </div>
  )
}

export default Main
