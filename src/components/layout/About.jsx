"use client";
import React from "react";
import { motion } from "framer-motion";

const About = () => {
    return (
        <section
            id="about"
            className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-20 py-20 z-20"
        >
            <div className="flex flex-col justify-around flex-wrap items-center max-w-[900px] w-full px-5">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="w-full text-center"
                >
                    <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-4">
                        About Me
                    </h1>
                    <p className="text-gray-300 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto">
                        I am a passionate Full Stack Software Engineer driven by the desire to create impactful digital solutions.
                        With a strong foundation in both software and business principles, I approach every project with a holistic mindset,
                        ensuring that technical excellence meets user needs and business goals.
                        I specialize in building scalable web applications, intuitive user interfaces, and robust backend systems.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
