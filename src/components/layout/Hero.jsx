"use client";

import React from "react";
import { motion } from "framer-motion";

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
        <div className="relative flex flex-col h-full w-full justify-center items-center z-[20] pt-20">
            <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-center md:text-start items-center md:items-start px-5 md:px-20">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col gap-6 mt-6 text-4xl md:text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
                >
                    <motion.span variants={slideInFromLeft(0.5)}>
                        Providing
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"> the best </span>
                        project experience
                    </motion.span>
                </motion.div>

                <motion.p
                    variants={slideInFromLeft(0.8)}
                    initial="hidden"
                    animate="visible"
                    className="text-lg text-gray-400 my-5 max-w-[600px]"
                >
                    I&apos;m a Full Stack Software Engineer with experience in Website,
                    Mobile, and Software development. Check out my projects and skills.
                </motion.p>

                <div className="flex flex-row gap-5">
                    <motion.a
                        variants={slideInFromLeft(1)}
                        initial="hidden"
                        animate="visible"
                        className="py-2 px-4 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
                    >
                        Learn More!
                    </motion.a>
                </div>
            </div>

            <div className="w-full h-full flex justify-center items-center">
                {/* Placeholder for a Blackhole or Hero Image */}
                <div className="w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-3xl absolute -z-10" />
            </div>
        </div>
    );
};

export default Hero;
