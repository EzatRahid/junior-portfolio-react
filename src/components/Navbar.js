import React, {useState} from 'react'

import ezo from './assets/assets/Ezo.png'

import {BiMenu} from 'react-icons/bi'

const Navbar = () => {

  const [menuVisible, setMenuVisible] = useState(false);
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };



  return (
    <div className=' z-[10000] shadow sticky top-0 bg-white'>
        <div className='flex justify-around py-4 '>
      <h1 className='text-[32px] text-black cursor-pointer'><img src={ezo}className='w-[85px]'/></h1>
      <ul className='flex gap-20 items-center cursor-pointer font-thin text-[#474747] duration-300'>
        <li className='hover:text-[#ccc] transition-[0.7s] hidden sm:block'><a href="#home">home</a></li>
        {/* <li className='hover:text-[#ccc] transition-[0.7s] '>skills</li> */}
        <li className='hidden hover:text-[#ccc] transition-[0.7s] sm:block '><a href="#projects">projects</a></li>
        <li className='hidden text-white button transition-[0.7s] sm:block bg-[#1d9371] rounde  px-8 py-3'>contact</li>
        <li className="block text-black sm:hidden"><BiMenu className='text-[40px]' onClick={toggleMenu}/>
        <div className={`bg-[#1d9371] ${menuVisible ? 'block' : 'hidden'} duration-300  relative flex justify-center`}>
            <ul className=' flex flex-col gap-5 bg-[#1d9371] p-4 text-white absolute rounded-[10px] RollIn RollOut'>
              <li className='hover:text-[#ccc]'><a href="#home">home</a></li>
              <li className='hover:text-[#ccc]'><a href="#projects">projects</a></li>
              <li className='hover:text-[#ccc]'>contact</li>
            </ul>
        </div>
         </li>    
      </ul>
      </div>
    </div >
  )
}

export default Navbar
