import React, { useEffect } from "react";
import { gsap } from "gsap";
import { IndexesData } from "../Utils/localDB";



const HoverComponent = () => {
    useEffect(() => {
        gsap.utils.toArray(".table-row").forEach((row) => {
            const { label } = row.dataset;

            row.addEventListener("mouseenter", () => {
                gsap.to(`img[data-image=${label}]`, { opacity: 1, scale: 1, duration: 0.5 });
            });

            row.addEventListener("mouseleave", () => {
                gsap.to(`img[data-image=${label}]`, { opacity: 0, scale: 0.8, duration: 0.5 });
            });
        });
    }, []);

    return (
        <div className="relative w-full mt-14">
            {/* Images for Hover Effect */}
            <div className="images absolute top-0 right-5 w-full h-full rotate-3 pointer-events-none">
                {IndexesData?.map((item) => (
                    <img
                        key={item.label}
                        src={item.image}
                        alt={item.client}
                        data-image={item.label}
                        className="absolute w-64 h-64 top-0 right-5 rounded-lg opacity-0 transform transition-transform duration-500"
                    />
                ))}
            </div>

            {/* Table Layout */}
            <table className="w-full text-left">
                {/* Table Header */}
                <thead>
                    <tr className="border-b">
                        {/* Empty Start Column */}
                        <th className="col-span-1"></th>
                        <th className="col-span-1 text-subTitle text-base font-medium p-4">Client Name</th>
                        <th className="col-span-1 text-subTitle text-base font-medium p-4">Industry</th>
                        <th className="col-span-1"></th>
                        {/* Empty End Column */}
                    </tr>
                </thead>

                {/* Table Body */}
                <tbody>
                    {IndexesData.map((item) => (
                        <tr
                            key={item.label}
                            data-label={item.label}
                            className="table-row w-full group cursor-pointer border-b rounded-lg transition-all border-gray-300 hover:bg-black hover:text-white duration-300"
                        >
                            <td className="p-4 rounded-tl-lg rounded-bl-lg text-subTitle text-base font-medium group-hover:text-white w-1/4">
                                {item.year}
                            </td>
                            <td className="p-4 text-black text-base font-medium group-hover:text-white w-1/4">
                                {item.client}
                            </td>
                            <td className="p-4 text-black text-base font-medium group-hover:text-white w-1/4">
                                {item.industry}
                            </td>
                            <td className="p-4 w-1/4 rounded-br-lg rounded-r-lg">
                                <span className="text-subTitle text-base font-medium group-hover:hidden">
                                    {item.cta}
                                </span>
                                <span className="text-subTitle text-base font-medium hidden group-hover:inline group-hover:text-white">
                                    View
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default HoverComponent;
