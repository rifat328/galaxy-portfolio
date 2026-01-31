"use client";

import React, { useRef } from "react";
import ProjectCard from "@/components/sub/ProjectCard";
import { motion, useTransform, useScroll } from "framer-motion";

const ProjectsData = [
    {
        title: "Galaxy Portfolio",
        category: "Web Development",
        description: "A futuristic 3D portfolio website featuring black hole animations and warp speed transitions.",
        tools: ["Next.js", "Three.js", "Framer Motion", "Tailwind"],
        link: "#",
        src: "/project1.png",
    },
    {
        title: "E-Commerce AI",
        category: "AI & ML",
        description: "An intelligent shopping assistant that recommends products based on user browsing behavior and preferences.",
        tools: ["Python", "TensorFlow", "React", "FastAPI"],
        link: "#",
        src: "/project2.png",
    },
    {
        title: "Crypto Dashboard",
        category: "Fintech",
        description: "Real-time cryptocurrency tracking dashboard with advanced charting and portfolio management features.",
        tools: ["Vue.js", "D3.js", "Firebase", "WebSockets"],
        link: "#",
        src: "/project3.png",
    },
];

const Projects = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-65%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-transparent" id="projects">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">

                {/* Title Overlay */}
                <div className="absolute top-10 left-10 md:left-20 z-10 w-full">
                    <h1 className="text-[40px] md:text-[60px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                        Selected Works
                    </h1>
                </div>

                <motion.div style={{ x }} className="flex gap-10 pl-[5vw]">
                    {ProjectsData.map((project, index) => (
                        <ProjectCard
                            key={index}
                            index={index}
                            title={project.title}
                            category={project.category}
                            description={project.description}
                            tools={project.tools}
                            link={project.link}
                            src={project.src}
                            number={`0${index + 1}`}
                        />
                    ))}
                    {/* Extra padding or call to action card at the end */}
                    <div className="min-w-[20vw] flex items-center justify-center">
                        <span className="text-gray-500 text-xl">View More on GitHub &rarr;</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
