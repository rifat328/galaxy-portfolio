"use client";

import React from "react";

const ProjectCard = ({ src, title, description, link }) => {
    return (
        <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
            {/* Placeholder for project image using a colored div if src is missing or invalid URL, 
          but here we expect a valid image path or we can use a gradient placeholder */}
            <div className="w-full h-64 bg-slate-900 flex items-center justify-center overflow-hidden">
                {/* If you have images, use <img src={src} ... /> */}
                <div className="w-full h-full bg-gradient-to-br from-purple-900 to-black opacity-50" />
            </div>

            <div className="relative p-4">
                <h1 className="text-2xl font-semibold text-white">{title}</h1>
                <p className="mt-2 text-gray-300">{description}</p>
                <div className="mt-4">
                    <a href={link} className="text-purple-400 hover:text-purple-300">View Project &rarr;</a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
