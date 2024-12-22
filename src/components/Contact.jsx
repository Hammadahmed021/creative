import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

const Contact = () => {
    return (
        <section className="bg-black relative z-10 pt-20 pb-6">
            <div className="container mx-auto px-2 ">
                <div className="flex items-center justify-between transition-transform duration-500 group ">
                    {/* Left Part */}
                    <h4
                        className="leading-tight text-white text-2xl font-extrabold transform group-hover:translate-x-[30%]"
                    >
                        Heard<br />
                        enough?
                    </h4>

                    {/* Center Part */}
                    <h2 className="text-white font-extrabold text-6xl uppercase">Contact us</h2>

                    {/* Right Part */}
                    <span
                        className="cursor-pointer p-4 rounded-full bg-white bg-opacity-15 border transform group-hover:-translate-x-[30%] transition-transform duration-500"
                    >
                        <FaArrowRightLong size={32} className="-rotate-45" color="#fff" />
                    </span>
                </div>
            </div>

            <div className="container mx-auto px-2 mt-10 border-t pt-4">
                <div className="text-white text-center text-sm">
                    © 2024 GOODLUCK!
                    . All rights reserved.
                </div>

            </div>
        </section>


    )
}

export default Contact
