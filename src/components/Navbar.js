import React from 'react'

import ezo from './assets/assets/Ezo.png'

const Navbar = () => {
  return (
    <div className=' z-[10000] shadow sticky top-0 bg-white'>
        <div className='flex justify-around py-6 '>
      <h1 className='text-[32px] text-black cursor-pointer'>ezo</h1>
      <ul className='flex gap-20 items-center cursor-pointer font-thin text-[#474747]'>
        <li className='hover:text-[#ccc] transition-[0.7s] '>home</li>
        <li className='hover:text-[#ccc] transition-[0.7s] '>skills</li>
        <li className='hover:text-[#ccc] transition-[0.7s] '>projects</li>
        <li className='text-white button transition-[0.7s] bg-[#00CE22] rounde  px-8 py-3'>contact</li>
      </ul>
        </div>
    </div >
  )
}

export default Navbar
