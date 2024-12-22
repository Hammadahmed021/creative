import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import HoverComponent from './HoverComp'


const Indexes = () => {
    return (
        <section className="bg-white z-10 relative">
        <div className="container mx-auto px-2 py-28">
            <h3 className='text-black text-2xl flex items-center gap-3 font-extrabold uppercase leading-snug'>
                Index
                <FaArrowRightLong size={22} className='rotate-45' />
            </h3>
            <HoverComponent />
        </div>
        </section>
    )
}   

export default Indexes
