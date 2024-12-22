import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import poster from "../assets/images/poster.png"
import perfume from "../assets/images/perfume.png"

const Work = () => {
  return (
    <div className='py-16 relative z-10 bg-white'>
      <div className="container mx-auto px-2">
        <h3 className='text-black text-2xl flex items-center gap-3 font-extrabold uppercase leading-snug'>
          SELECTED WORK
          <FaArrowRightLong size={22} className='rotate-45' />
        </h3>
      </div>
      <div className="w-full container mx-auto gap-8 pt-6 flex px-2">
        <div className="w-7/12">

          <div className="relative group w-auto hover:cursor-pointer">
            {/* Image */}
            <img
              src={poster}
              alt="Poster"
              className="w-full transition-all duration-300  group-hover:rounded-[30px] rounded-lg"
            />

            {/* Border Effect */}
            <div className="relative mt-6">
              {/* Light Gray Border (static) */}
              <span
                className="block h-[2px] bg-gray-200 w-full"
              ></span>

              {/* Black Animated Border (on hover) */}
              <span
                className="absolute top-0 left-0 h-[2px] w-0 bg-black transition-all duration-[1500ms] group-hover:w-full"
              ></span>
            </div>

            {/* Text content */}
            <div className="mt-4 text-black flex items-start justify-between">
              <h6 className="font-bold text-[24px]">Lorum ipsum</h6>
              <p className='w-full sm:w-[50%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>

        </div>
        <div className="w-5/12">
          <div className="relative group w-auto hover:cursor-pointer">
            {/* Image */}
            <img
              src={perfume}
              alt="Poster"
              className="w-full transition-all duration-300 rounded-lg group-hover:rounded-[30px]"
            />

            {/* Border Effect */}
            <div className="relative mt-6">
              {/* Light Gray Border (static) */}
              <span
                className="block h-[2px] bg-gray-200 w-full"
              ></span>

              {/* Black Animated Border (on hover) */}
              <span
                className="absolute top-0 left-0 h-[2px] w-0 bg-black transition-all duration-[1500ms] group-hover:w-full"
              ></span>
            </div>

            {/* Text content */}
            <div className="mt-4 text-black">
              <h6 className="font-bold text-[24px]">Lorum ipsum</h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>

            </div>
          </div>


        </div>
      </div>

      <div className="w-full container mx-auto gap-8 mt-20 flex px-2">
        <div className="w-5/12">



        </div>
        <div className="w-7/12">
          <div className="relative group w-auto hover:cursor-pointer">
            {/* Image */}
            <img
              src={poster}
              alt="Poster"
              className="w-full transition-all duration-300  group-hover:rounded-[30px] rounded-lg"
            />

            {/* Border Effect */}
            <div className="relative mt-6">
              {/* Light Gray Border (static) */}
              <span
                className="block h-[2px] bg-gray-200 w-full"
              ></span>

              {/* Black Animated Border (on hover) */}
              <span
                className="absolute top-0 left-0 h-[2px] w-0 bg-black transition-all duration-[1500ms] group-hover:w-full"
              ></span>
            </div>

            {/* Text content */}
            <div className="mt-4 text-black flex items-start justify-between">
              <h6 className="font-bold text-[24px]">Lorum ipsum</h6>
              <p className='w-full sm:w-[50%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>

          <div className='flex items-center justify-between gap-4 mt-12'>
            <div className="relative group w-auto hover:cursor-pointer">
              {/* Image */}
              <img
                src={perfume}
                alt="Poster"
                className="w-full transition-all duration-300 rounded-lg group-hover:rounded-[30px]"
              />

              {/* Border Effect */}
              <div className="relative mt-6">
                {/* Light Gray Border (static) */}
                <span
                  className="block h-[2px] bg-gray-200 w-full"
                ></span>

                {/* Black Animated Border (on hover) */}
                <span
                  className="absolute top-0 left-0 h-[2px] w-0 bg-black transition-all duration-[1500ms] group-hover:w-full"
                ></span>
              </div>

              {/* Text content */}
              <div className="mt-4 text-black">
                <h6 className="font-bold text-[24px]">Lorum ipsum</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>

              </div>
            </div>
            <div className="relative group w-auto hover:cursor-pointer">
              {/* Image */}
              <img
                src={perfume}
                alt="Poster"
                className="w-full transition-all duration-300 rounded-lg group-hover:rounded-[30px]"
              />

              {/* Border Effect */}
              <div className="relative mt-6">
                {/* Light Gray Border (static) */}
                <span
                  className="block h-[2px] bg-gray-200 w-full"
                ></span>

                {/* Black Animated Border (on hover) */}
                <span
                  className="absolute top-0 left-0 h-[2px] w-0 bg-black transition-all duration-[1500ms] group-hover:w-full"
                ></span>
              </div>

              {/* Text content */}
              <div className="mt-4 text-black">
                <h6 className="font-bold text-[24px]">Lorum ipsum</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full container mx-auto gap-8 mt-20 flex px-2">
        <div className="w-7/12">
          <div className="relative group w-auto hover:cursor-pointer">
            {/* Image */}
            <img
              src={poster}
              alt="Poster"
              className="w-full transition-all duration-300  group-hover:rounded-[30px] rounded-lg"
            />

            {/* Border Effect */}
            <div className="relative mt-6">
              {/* Light Gray Border (static) */}
              <span
                className="block h-[2px] bg-gray-200 w-full"
              ></span>

              {/* Black Animated Border (on hover) */}
              <span
                className="absolute top-0 left-0 h-[2px] w-0 bg-black transition-all duration-[1500ms] group-hover:w-full"
              ></span>
            </div>

            {/* Text content */}
            <div className="mt-4 text-black flex items-start justify-between">
              <h6 className="font-bold text-[24px]">Lorum ipsum</h6>
              <p className='w-full sm:w-[50%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>

          <div className='flex items-center justify-between gap-4 mt-12'>
            <div className="relative group w-auto hover:cursor-pointer">
              {/* Image */}
              <img
                src={perfume}
                alt="Poster"
                className="w-full transition-all duration-300 rounded-lg group-hover:rounded-[30px]"
              />

              {/* Border Effect */}
              <div className="relative mt-6">
                {/* Light Gray Border (static) */}
                <span
                  className="block h-[2px] bg-gray-200 w-full"
                ></span>

                {/* Black Animated Border (on hover) */}
                <span
                  className="absolute top-0 left-0 h-[2px] w-0 bg-black transition-all duration-[1500ms] group-hover:w-full"
                ></span>
              </div>

              {/* Text content */}
              <div className="mt-4 text-black">
                <h6 className="font-bold text-[24px]">Lorum ipsum</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>

              </div>
            </div>
            <div className="relative group w-auto hover:cursor-pointer">
              {/* Image */}
              <img
                src={perfume}
                alt="Poster"
                className="w-full transition-all duration-300 rounded-lg group-hover:rounded-[30px]"
              />

              {/* Border Effect */}
              <div className="relative mt-6">
                {/* Light Gray Border (static) */}
                <span
                  className="block h-[2px] bg-gray-200 w-full"
                ></span>

                {/* Black Animated Border (on hover) */}
                <span
                  className="absolute top-0 left-0 h-[2px] w-0 bg-black transition-all duration-[1500ms] group-hover:w-full"
                ></span>
              </div>

              {/* Text content */}
              <div className="mt-4 text-black">
                <h6 className="font-bold text-[24px]">Lorum ipsum</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-5/12">



        </div>
      </div>
    </div>
  )
}

export default Work
