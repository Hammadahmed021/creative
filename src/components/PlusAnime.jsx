import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import plus from "../assets/images/plus.png";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const PlusAnime = () => {
    const imageRef = useRef(null);
    const containerRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "bottom top",
                scrub: true,
                
            },
        });

        // Animate the image
        tl.to(imageRef.current, {
            rotation: 360,
            xPercent: -50,
            yPercent: -50,
            left: "40%",
            top: "50%",
            duration: 2,
            ease: "power4.Out",
        });

        // Shrink image to small square
        tl.to(imageRef.current, {
            backgroundColor: "#741784",
            borderRadius: "0%",
            width: "40px",
            height: "40px",
            duration: 1,
            ease: "power2.out",
            left: "50%",
            top: "50%",
            opacity: 1,
            position: "fixed",
            zIndex: 1
        });

        // Expand box
        tl.to(imageRef.current, {
            opacity: 1,
            width: "100%",
            height: "100vh",
            duration: 2,
            ease: "power2.out",
            backgroundColor: "#741784",
            position: "fixed",

        });

        // Fade in text
        tl.to(textRef.current, {
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            position: "absolute",
            zIndex: 10,
            onStart: () => console.log("Fading in text..."),
            onComplete: () => console.log("Text should now be visible"),
        });
    }, []);

    return (
        <div ref={containerRef} className="min-h-[350vh] relative bg-white overflow-hidden p-4">
            {/* Original Text */}
            <h2 className="text-[220px] leading-none font-bold">Lorem</h2>

            {/* Spinning image */}
            <img
                ref={imageRef}
                src={plus}
                alt="Spinning"
                className="absolute left-1/3 z-0"
            />

            <h2 className="text-end text-[220px] font-bold leading-none mb-6">ipsum</h2>
            <div className="w-full flex h-[50vh] items-end">
                <div className="w-1/2"></div>
                <div className="w-1/2 text-start pl-10">
                    <p className="font-semibold text-[26px] leading-loose">We're a tight-knit collective of artists and creative minds dedicated to crafting unique film and photographic works that entertain and engage.</p>
                </div>
            </div>

            {/* Main Text */}
            <div
                ref={textRef}
                className=" text-white opacity-0 z-10 relative w-full h-full"
            >
                {/* <h2 className="text-[220px] text-start -mb-6 text-bold leading-none">Lorem</h2>
                <h2 className="text-end text-[220px] -mt-6 text-bold leading-none">ipsum</h2> */}
            </div>
        </div>
    );
};

export default PlusAnime;
