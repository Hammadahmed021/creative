import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import { Services } from '../Utils/localDB'
import { div } from 'three/tsl'

const Service = () => {
  return (
    <section className='min-h-screen bg-black relative z-10 pt-20'>
      <div className="container mx-auto px-2 py-0">
        <h3 className='text-primary text-2xl flex items-center gap-3 font-extrabold uppercase leading-snug'>
          <FaArrowRightLong size={22} className='rotate-45' color='#fff' />
          services we offer
        </h3>
        <div className="mt-10">
  {Services?.map((item, index) => (
    <div 
      key={index} 
      className="border-t p-4 transition-transform duration-500 ease-in-out group hover:shadow-lg hover:scale-[1.02]"
    >
      <div className="flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-start gap-4">
          <span className="text-lg pt-4 font-semibold text-primary">{item?.number}</span>
          <div>
            <h2 
              className="font-extrabold text-[#403E3E] text-6xl uppercase transition-colors duration-300 group-hover:text-white"
            >
              {item?.title}
            </h2>
            <div 
              className="w-[75%] space-y-6 hidden group-hover:block opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            >
              <p className="text-white leading-snug">{item?.description}</p>
              <span 
                className="inline-block rounded-full px-6 py-2 bg-primary text-black text-base font-medium"
              >
                Learn More
              </span>
            </div>
          </div>
        </div>
        {/* Right Section - Image */}
        <div>
          <img
            src={item?.serviceImage}
            alt={item?.title}
            className="w-full h-auto transition-all duration-500 ease-in-out group-hover:rounded-[20px] group-hover:h-[250px] object-cover"
          />
        </div>
      </div>
    </div>
  ))}
</div>

      </div>

    </section>
  )
}

export default Service
