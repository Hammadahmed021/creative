import React from 'react'
import { FaBars } from 'react-icons/fa'
import { menuItems } from '../Utils/localDB'


const Header = () => {
  return (
    <header className='bg-black'>
      <nav className='container mx-auto py-6 flex items-center justify-between px-2'>
        <h2 className='text-white font-semibold text-2xl'>
          GOODLUCK!</h2>
        <ul className='flex items-center justify-between gap-4'>
          {
            menuItems?.map((item, index) => (
              <li className='text-white font-normal text-lg' key={index}>
                <a href={item?.link}>{item?.name}</a>
              </li>
            ))
          }
        </ul>
        <FaBars size={26} className='p-1 bg-gray-400 rounded-full' />
      </nav>
    </header>
  )
}

export default Header
