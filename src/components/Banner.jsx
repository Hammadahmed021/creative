import React from 'react'
import Header from './Header'
import bTop from '../assets/images/b-top.png'
import { FaArrowCircleRight, FaArrowRight } from 'react-icons/fa'
import { FaArrowRightLong } from 'react-icons/fa6'
import ModelViewer from './ModelViewer'

const Banner = () => {
  return (
    <section className='min-h-screen relative bg-white z-10'>
      <Header />
      <div className='bg-hero min-h-screen bg-no-repeat bg-center bg-cover'>
        <div className="container mx-auto px-2">
          <div className="flex items-center min-h-screen">
            <div className="w-1/2">
              <h1 className='text-[68px] font-extrabold leading-snug text-white uppercase'>
                Work together,
                build the future
              </h1>
              <p className='text-lg text-white py-10'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>

            </div>
            <div className="w-1/2">
              <div style={{ width: '100%', height: '100%' }}>
                <ModelViewer />
              </div>
            </div>
          </div>
         
          <div className="text-center w-full sm:w-1/2 mx-auto pb-24">
            <div className="flex justify-center">
              <h3 className='text-white justify-center text-2xl flex items-center gap-3 font-extrabold uppercase leading-snug'>
                <FaArrowRightLong size={22} className='rotate-45' />
                What we do
              </h3>
            </div>
            <p className='text-lg text-white py-10'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <b>tempor</b> incididunt ut labore
              et dolore magna aliqua. Ut enim ad minim <b>veniam</b>, quis nostrud exercitation ullamco laboris.
            </p>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Banner
