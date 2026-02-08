"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ExperienceData = {
    software: [
        {
            position: "Software Engineer Intern",
            company: "Nerd Castle Limited",
            year: "Jul 2023 - Sep 2023",
            details: "Worked with ASP.NET Core and ASP.NET framework related technologies to enhance application functionality and user experiences."
        },
        // Add more software items here
    ],
    business: [
        {
            position: "Store Manager",
            company: "Kakon Pharma and Departmental Store",
            year: "2023 - OCT 2024",
            details: "Managed daily store operations, including inventory management, customer service, and sales. Oversaw staff scheduling and training to ensure high standards of service delivery."
        }
    ]
};

const Experience = () => {
    const [activeTab, setActiveTab] = useState("software");

    const tabs = [
        { id: "software", label: "Software" },
        { id: "business", label: "Business" }
    ];

    return (
        <section id="experience" className="flex flex-col items-center justify-center gap-5 h-full relative overflow-hidden pb-20 py-20 z-20 px-5">
            <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-cyan-500 py-4 text-center">
                My Experience
            </h1>

            {/* Pill Shaped Switcher */}
            <div className="flex items-center p-1 bg-[#0300145e] border border-[#7042f861] rounded-full mb-10 relative">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`relative z-10 px-8 py-2 text-sm font-medium transition-colors duration-300 w-32 ${activeTab === tab.id ? "text-white" : "text-gray-400 hover:text-gray-200"
                            }`}
                    >
                        {tab.label}
                        {activeTab === tab.id && (
                            <motion.div
                                layoutId="activeTab"
                                className="absolute inset-0 bg-linear-to-r from-purple-600 to-cyan-600 rounded-full -z-10"
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                        )}
                    </button>
                ))}
            </div>

            {/* List Format: 
                position 
                company           year          details 
            */}
            <div className="w-full max-w-5xl flex flex-col gap-6">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="flex flex-col gap-6"
                    >
                        {ExperienceData[activeTab].map((item, index) => (
                            <div key={index} className="w-full">
                                {/* Row 1: Position */}
                                <div className="mb-2">
                                    <h2 className="text-2xl font-bold text-white tracking-wide">
                                        {item.position}
                                    </h2>
                                </div>

                                {/* Row 2: Company, Year, Details */}
                                <div className="grid grid-cols-1 md:grid-cols-12 items-start py-4 border-b border-[#7042f861] group hover:border-purple-500/50 transition-colors">
                                    <div className="md:col-span-3">
                                        <h3 className="text-lg text-purple-400 font-medium">
                                            {item.company}
                                        </h3>
                                    </div>
                                    <div className="md:col-span-3 mt-1 md:mt-0">
                                        <span className="text-cyan-400 font-mono text-sm opacity-80">
                                            {item.year}
                                        </span>
                                    </div>
                                    <div className="md:col-span-6 mt-3 md:mt-0">
                                        <p className="text-gray-400 text-sm leading-relaxed italic md:not-italic">
                                            {item.details}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Experience;