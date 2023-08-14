import React from 'react'
import weather from './assets/assets/weatherapp.PNG'

const Projects = () => {
  return (
    <div className="p-[100px] mt-[150px]">
      <div className="text-center">
        <h1 className='text-[32px] font-semibold mb-10'>Projects</h1>
      </div>
      <div className="grid grid-cols-3 gap-40 justify-center">
        <div className='border-2 rounded-[10px] cursor-pointer overflow-hidden relative group '>
          <img src={weather} className='w-[100%] h-[100%] rounded-[10px] group-hover:blur-[50px] duration-500'/>
        <h2 className='absolute bottom-0 p-[10px] group-hover:top-0 text-[22px] text-white '>Weather App</h2>
        <p className='absolute group-hover:top-[40px] text-white p-[10px] '>
          Built a weather app using an api. Type in any city to get its weather details!
          </p>
        </div>
        <div className='border-2 rounded-[10px] cursor-pointer'>hello</div>
        <div className='border-2 rounded-[10px] cursor-pointer'>hello</div>
        <div className='border-2 rounded-[10px] cursor-pointer'>hello</div>
        <div className='border-2 rounded-[10px] cursor-pointer'>hello</div>
        <div className='border-2 rounded-[10px] cursor-pointer'>hello</div>
      </div>
    </div>
  )
}

export default Projects
