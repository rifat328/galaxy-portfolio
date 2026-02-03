"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const ExperienceData = [
    {
        position: "Software Engineer Intern",
        company: "Nerd Castle Limited",
        year: "Jul 2023 - Sep 2023",
        details: "Worked with ASP.NET Core and ASP.NET framework related technologies to enhance application functionality and user experiences."
    }
];

const Experience = () => {
    return (
        <section id="experience" className="flex flex-col items-center justify-center gap-5 h-full relative overflow-hidden pb-20 py-20 z-20 px-5">
            <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-cyan-500 py-4 text-center">
                My Experience
            </h1>

            <div className="w-full max-w-4xl flex flex-col gap-8">
                {ExperienceData.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.3 }}
                        className="flex flex-col md:flex-row justify-between items-start md:items-center p-6 border border-[#7042f861] bg-[#0300145e] rounded-xl hover:border-purple-500/80 transition"
                    >
                        <div className="flex flex-col gap-1">
                            <h2 className="text-2xl font-bold text-white">{item.position}</h2>
                            <h3 className="text-lg text-purple-300 font-medium">{item.company}</h3>
                        </div>
                        <div className="flex flex-col gap-2 md:items-end mt-4 md:mt-0 max-w-md">
                            <span className="text-cyan-400 font-mono text-sm border border-cyan-500/30 px-2 py-1 rounded inline-block w-fit">
                                {item.year}
                            </span>
                            <p className="text-gray-400 text-sm md:text-right leading-relaxed">
                                {item.details}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
