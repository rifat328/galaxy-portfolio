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
                    <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-cyan-500 py-4">
                        About Me
                    </h1>
                    <p className="text-gray-300 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto">
                        I&apos;m a <span className="text-white font-medium">Software Engineer</span> and <span className="text-white font-medium">Computer Science</span> graduate focused on building real-world, scalable web applications.
                        <br /><br />
                        I work with <span className="text-cyan-400 font-medium">React</span>, <span className="text-cyan-400 font-medium">Next.js</span>, <span className="text-cyan-400 font-medium">Node.js</span>, <span className="text-cyan-400 font-medium">Express</span>, <span className="text-cyan-400 font-medium">MongoDB</span>, and <span className="text-cyan-400 font-medium">ASP.NET Core</span>, and I enjoy designing systems that balance performance, security, and maintainability.
                        I have experience deploying applications, working with <span className="text-white font-medium">REST APIs</span>, and structuring projects in a way that supports future scalability and team collaboration.
                        <br /><br />
                        I&apos;ve also worked with <span className="text-cyan-400 font-medium">Python</span> and <span className="text-cyan-400 font-medium">Machine Learning</span> during my academic journey and published a research paper on <span className="text-white font-medium">IEEE</span> and <span className="text-white font-medium">Frontiers</span>.
                        <br /><br />
                        I&apos;m open to opportunities where I can contribute, learn, and grow as an engineer.
                    </p>
                </motion.div>


            </div>
        </section>
    );
};

export default About;
