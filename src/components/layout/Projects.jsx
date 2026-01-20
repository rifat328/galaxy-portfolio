"use client";

import React from "react";
import ProjectCard from "@/components/sub/ProjectCard";
import { motion } from "framer-motion";

const Projects = () => {
    return (
        <motion.div
            className="flex flex-col items-center justify-center py-20 z-20"
            id="projects"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
                My Projects
            </h1>
            <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 items-center justify-center">
                <ProjectCard
                    src="/NextWebsite.png"
                    title="Modern Next.js Portfolio"
                    description="A dark themed portfolio website built with Next.js 14, Tailwind CSS, and Framer Motion."
                    link="#"
                />
                <ProjectCard
                    src="/CardImage.png"
                    title="Interactive Website Cards"
                    description="A component library for interactive cards using React and Tailwind CSS."
                    link="#"
                />
                <ProjectCard
                    src="/SpaceWebsite.png"
                    title="Space Themed Website"
                    description="A 3D promotional website for a space agency using Three.js and React Three Fiber."
                    link="#"
                />
            </div>
        </motion.div>
    );
};

export default Projects;
