"use client";

import React, { useRef } from "react";
import ProjectCard from "@/components/sub/ProjectCard";
import { motion, useTransform, useScroll } from "framer-motion";

const ProjectsData = [
    {
        title: "PCS - Parcel Courier",
        category: "Full Stack / Security",
        description: "Scalable backend with role-based access, JWT auth, and DDoS protection using Arkjet. Includes a Next.js frontend dashboard.",
        tools: ["Node.js", "Express", "MongoDB", "Next.js", "Arkjet"],
        link: "https://github.com/rifat328/parcel-currier-service",
        src: "/project1.png",
    },
    {
        title: "ChefsKit AI",
        category: "AI Web App",
        description: "AI-powered recipe generator using Mistral model. Optimizes data fetching with exponential debouncing for cost-efficiency.",
        tools: ["React", "Mistral AI", "Tailwind CSS", "JavaScript"],
        link: "https://github.com/rifat328/ChefsKit",
        src: "/project2.png",
    },
    {
        title: "Stream Anomaly Detection",
        category: "Data Science",
        description: "Real-time anomaly detection in data streams using Z-score algorithms with live visualization of outliers.",
        tools: ["Python", "Matplotlib", "Pandas", "NumPy"],
        link: "https://github.com/rifat328/Anomaly-Detection-on-Streamed-Data",
        src: "/project3.png",
    },
    {
        title: "Subscription Tracker",
        category: "Backend System",
        description: "Service to track user subscriptions and send email notifications before expiration to help save money.",
        tools: ["Node.js", "Nodemailer", "Cron Jobs", "MongoDB"],
        link: "https://github.com/rifat328/subscription-service",
        src: "/project1.png", // Reuse placeholder
    },
    {
        title: "Disease Detection ML",
        category: "Machine Learning",
        description: "Multi-disease prediction system for diabetes, stroke, and hypertension using advanced machine learning models.",
        tools: ["Python", "Scikit-Learn", "Jupyter", "Pandas"],
        link: "https://shorturl.at/eRsLF",
        src: "/project2.png", // Reuse placeholder
    },
    {
        title: "Nickelfox E-Commerce",
        category: "Frontend UI",
        description: "Modern, responsive e-commerce interface built with React and Vite, focusing on clean design and component reusability.",
        tools: ["React", "Vite", "CSS Modules", "Responsive Design"],
        link: "https://github.com/rifat328/nickelfox.com",
        src: "/project3.png", // Reuse placeholder
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
            {/* Ghost Snap Points for smooth mandatory scrolling through the animation */}
            <div className="absolute inset-0 w-full h-full pointer-events-none">
                <div className="w-full h-screen snap-start" />
                <div className="w-full h-screen snap-start" />
                <div className="w-full h-screen snap-start" />
            </div>

            <div className="sticky top-0 flex h-screen items-center overflow-hidden">

                {/* Title Overlay */}
                <div className="absolute top-24 left-10 md:left-20 z-10 w-full">
                    <h1 className="text-[40px] md:text-[60px] font-semibold text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-cyan-500">
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
