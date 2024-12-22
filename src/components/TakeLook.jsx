import React, { useEffect } from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TakeLook = () => {
  useEffect(() => {
    // GSAP ScrollTrigger for the first row: stays fixed at the center of the viewport
    const firstRowAnim = gsap.fromTo(
      ".take-look-row", // Targeting the first row
      {
        y: 50, // Starting position
        position: "absolute",
      },
      {
        position: "fixed", // Fix it at the center of the viewport
        top: "45%", // Keep it at the center during scrolling
        scrollTrigger: {
          trigger: ".take-look-row", // Element to watch
          start: "top center", // Trigger when the top hits the center of the viewport
          end: "bottom center", // End when the bottom hits the top of the viewport
          scrub: true, // Smoothly scrubs the animation with scrolling
          onLeave: () => {
            // When the section leaves the view, reset its position
            gsap.set(".take-look-row", { position: "absolute", top: "50%" });
          },
          onLeaveBack: () => {
            // Reset to original position when scrolling back into view
            gsap.set(".take-look-row", { position: "absolute", top: "50%" });
          }
        },
      }
    );

    // GSAP ScrollTrigger for the second row: animate the circle up as we scroll
    const circleAnim = gsap.fromTo(
      ".circle-row", // Targeting the circle section
      { y: 100 }, // Start below the viewport
      {
        y: 0, // Scroll into view
        scrollTrigger: {
          trigger: ".circle-row", // Element to watch
          start: "top center", // Start when it enters the viewport
          end: "bottom center", // End when it hits the top of the viewport
          scrub: true, // Smooth scroll with animation
          
          onLeaveBack: () => {
            // Reset circle position when scrolling back into view
            gsap.set(".circle-row", { y: 100 });
          }
        },
      }
    );

  }, []);

  return (
    <section className='bg-white relative z-10 pt-16 flex flex-col items-center justify-center py-10 min-h-screen pb-20'>
      {/* First Row (Fixed at center) */}
      <div className='take-look-row flex justify-between items-center container mx-auto'>
        <div className='leading-none'>
          <h3 className='text-[60px] uppercase font-extrabold leading-none'>
            take a look
          </h3>
          <h3 className='text-[60px] uppercase font-extrabold leading-none'>
            at what
          </h3>
          <span className='block h-16 w-auto'></span>
        </div>

        <span className='border-b border-gray-500 w-[55%] block mt-4 -ml-24'></span>
        
        <div className='leading-none'>
          <span className='block h-16 w-auto'></span>
          <h3 className='text-[60px] uppercase font-extrabold leading-none'>
            we can do
          </h3>
          <h3 className='text-[60px] uppercase font-extrabold leading-none text-end'>
            for you
          </h3>
        </div>
      </div>

      {/* Second Row (Circle that scrolls upwards) */}
      <div className='circle-row w-60 h-60 rounded-full bg-black flex items-center justify-center mt-64'>
        <h3 className='text-white text-2xl flex flex-col justify-center items-center gap-3 font-extrabold uppercase leading-snug'>
          <FaArrowRightLong size={22} className='rotate-45' color='#F5CC49' />
          see all <br />work
        </h3>
      </div>
    </section>
  );
};

export default TakeLook;
