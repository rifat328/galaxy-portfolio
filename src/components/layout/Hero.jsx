"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Facebook, Instagram, Code2 } from "lucide-react";
import Hero3D from "@/components/sub/Hero3D";

const slideInFromLeft = (delay) => {
    return {
        hidden: { x: -100, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                delay: delay,
                duration: 0.5,
            },
        },
    };
};

const slideInFromRight = (delay) => {
    return {
        hidden: { x: 100, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                delay: delay,
                duration: 0.5,
            },
        },
    };
};

const Hero = () => {
    return (
        <div className="relative flex flex-col lg:flex-row h-screen w-full items-center justify-center lg:justify-between z-[20] px-3 lg:px-10 overflow-hidden ">

            {/* 1. Social Media Sidebar (Left) - Pill Shaped */}
            <motion.div
                initial="hidden"
                animate="visible"
                variants={slideInFromLeft(0.5)}
                className="hidden lg:flex flex-col gap-6 items-center z-30 mr-8 bg-slate-900/50 border border-indigo-500/30 px-4 py-8 rounded-full backdrop-blur-md shadow-lg shadow-indigo-500/20"
            >
                <a href="https://github.com/rifat328" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-rose-400 cursor-pointer transition transform hover:scale-125">
                    <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/rifat-hossain-a30b691ba/" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-rose-400 cursor-pointer transition transform hover:scale-125">
                    <Linkedin size={24} />
                </a>
                <a href="https://x.com/RifatHo16260122" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-rose-400 cursor-pointer transition transform hover:scale-125">
                    <Twitter size={24} />
                </a>
                <a href="https://leetcode.com/u/rifathossain328663/" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-rose-400 cursor-pointer transition transform hover:scale-125">
                    <Code2 size={24} />
                </a>
                <a href="https://www.facebook.com/rjey.rifat/" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-rose-400 cursor-pointer transition transform hover:scale-125">
                    <Facebook size={24} />
                </a>
                <a href="https://www.instagram.com/rjeyrifat/" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-rose-400 cursor-pointer transition transform hover:scale-125">
                    <Instagram size={24} />
                </a>
            </motion.div>


            {/* 2. Text Content (Center-Right) */}
            <div className="flex-1 flex flex-col gap-6 justify-center text-center lg:text-start z-30 max-w-2xl px-5 lg:px-0 xl:px-5">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col gap-2"
                >
                    <motion.h1
                        variants={slideInFromLeft(0.5)}
                        className="text-4xl md:text-5xl font-bold tracking-wider drop-shadow-lg text-transparent bg-clip-text bg-linear-to-r from-white via-slate-200 to-slate-500"
                    >
                        Rifat Hossain
                    </motion.h1>
                    <motion.h2 variants={slideInFromLeft(0.6)} className="text-2xl md:text-3xl font-semibold text-transparent bg-clip-text bg-linear-to-r from-indigo-400 via-rose-400 to-amber-400 animate-gradient-x">
                        Software Engineer
                    </motion.h2>
                </motion.div>

                <motion.p
                    variants={slideInFromLeft(0.8)}
                    initial="hidden"
                    animate="visible"
                    className="text-sm md:text-lg text-slate-300 my-5 max-w-[600px] leading-relaxed"
                >
                    I design and build immersive digital experiences. As a Full Stack Engineer, I merge technical precision with creative vision to solve complex problems.
                </motion.p>

                <motion.div
                    variants={slideInFromLeft(1)}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                >
                    <a href="#projects" className="py-3 px-8 bg-linear-to-r from-indigo-600 to-rose-600 text-center text-white cursor-pointer rounded-full text-base md:text-lg font-bold hover:shadow-[0_0_30px_rgba(225,29,72,0.6)] transition duration-300">
                        View Projects
                    </a>
                    <a href="#contact" className="py-3 px-8 border border-indigo-500/50 bg-slate-900/50 text-center text-white cursor-pointer rounded-full text-base md:text-lg hover:bg-indigo-500/10 transition duration-300">
                        Contact Me
                    </a>
                </motion.div>
            </div>

            {/* 3. 3D Model / Interactive Area (Far Right) */}
            <motion.div
                initial="hidden"
                animate="visible"
                variants={slideInFromRight(0.8)}
                className="w-full sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[400px] lg:h-[400px] xl:w-[600px] xl:h-[600px] flex items-center justify-center relative z-20"
            >
                <Hero3D />
            </motion.div>

        </div>
    );
};

export default Hero;
