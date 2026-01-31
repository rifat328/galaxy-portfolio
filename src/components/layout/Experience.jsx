"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const ExperienceData = {
    software: [
        {
            position: "Full Stack Developer",
            company: "Tech Innovations Inc.",
            year: "2023 - Present",
            details: "Leading the development of scalable web applications using Next.js and Node.js. Optimized database queries improving performance by 40%."
        },
        {
            position: "Frontend Engineer",
            company: "Creative Digital Agency",
            year: "2021 - 2023",
            details: "Built responsive and interactive user interfaces using React and Tailwind CSS. Collaborated with designers to implement pixel-perfect designs."
        }
    ],
    business: [
        {
            position: "Product Manager",
            company: "StartUp Hub",
            year: "2020 - 2021",
            details: "Managed the product lifecycle from concept to launch. Conducted market research and defined product roadmaps."
        },
        {
            position: "Business Analyst",
            company: "Global Solutions",
            year: "2019 - 2020",
            details: "Analyzed business requirements and translated them into technical specifications. Bridged the gap between stakeholders and development teams."
        }
    ]
};

const Experience = () => {
    const [activeTab, setActiveTab] = useState("software");

    return (
        <section id="experience" className="flex flex-col items-center justify-center gap-5 h-full relative overflow-hidden pb-20 py-20 z-20 px-5">
            <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-4 text-center">
                My Experience
            </h1>

            {/* Tabs */}
            <div className="flex flex-row gap-5 mb-10">
                <button
                    onClick={() => setActiveTab("software")}
                    className={`px-6 py-2 rounded-full text-lg font-semibold transition-all ${activeTab === "software"
                            ? "bg-gradient-to-r from-purple-500 to-cyan-500 text-white shadow-lg shadow-purple-500/30"
                            : "bg-transparent border border-purple-500/50 text-gray-300 hover:bg-purple-500/10"
                        }`}
                >
                    Software
                </button>
                <button
                    onClick={() => setActiveTab("business")}
                    className={`px-6 py-2 rounded-full text-lg font-semibold transition-all ${activeTab === "business"
                            ? "bg-gradient-to-r from-purple-500 to-cyan-500 text-white shadow-lg shadow-purple-500/30"
                            : "bg-transparent border border-purple-500/50 text-gray-300 hover:bg-purple-500/10"
                        }`}
                >
                    Business
                </button>
            </div>

            {/* Content */}
            <div className="w-full max-w-4xl flex flex-col gap-8">
                {ExperienceData[activeTab].map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
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
