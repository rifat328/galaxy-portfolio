"use client";

import React from "react";
import { ExternalLink, Code2 } from "lucide-react";

const ProjectCard = ({ src, title, description, link, number, category, tools, index }) => {
    const isEven = index % 2 === 0;

    return (
        <div className="min-w-[80vw] md:min-w-[30vw] lg:min-w-[30vw] h-[70vh] flex flex-col justify-center p-4 pr-0 snap-center">
            <div className={`w-full h-full border-r border-b border-[#7042f861] bg-[#0300145e] rounded-3xl overflow-hidden flex flex-col ${isEven ? 'md:flex-col' : 'md:flex-col-reverse'} p-6 gap-6 relative group transition-all duration-500 hover:border-[#7042f8]`}>

                {/* Media Section */}
                <div className="w-full h-1/2 overflow-hidden rounded-xl relative">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition duration-500 z-10" />
                    {/* Placeholder if no src */}
                    <div className="w-full h-full bg-linear-to-br from-purple-900/50 to-black flex items-center justify-center">
                        <span className="text-4xl">🚀</span>
                    </div>
                </div>

                {/* Content Section */}
                <div className="w-full h-1/2 flex flex-col justify-between z-20">
                    <div className="flex flex-col gap-2">
                        <div className="flex justify-between items-start">
                            <div className="text-6xl font-black font-orbitron bg-linear-to-br from-white via-gray-300 to-gray-600 bg-clip-text text-transparent shadow-gray-500/50 drop-shadow-sm">{number}</div>
                            <div className="flex flex-col items-end">
                                <h3 className="text-2xl md:text-3xl font-bold bg-linear-to-br from-white via-gray-300 to-gray-600 bg-clip-text text-transparent shadow-gray-500/50 drop-shadow-sm uppercase tracking-wider">{title}</h3>
                                <span className="text-cyan-400 text-sm font-mono tracking-widest">{category}</span>
                            </div>
                        </div>

                        <div className="mt-4 flex flex-wrap gap-2">
                            {tools.map((tool, i) => (
                                <span key={i} className="text-xs font-semibold text-purple-200 border border-purple-500/30 px-2 py-1 rounded-full bg-purple-500/10">
                                    {tool}
                                </span>
                            ))}
                        </div>
                        <p className="mt-4 text-gray-300 text-sm md:text-base leading-relaxed line-clamp-3">
                            {description}
                        </p>
                    </div>

                    <div className="flex justify-end mt-4">
                        <button
                            onClick={() => window.open(link, '_blank')}
                            className="flex items-center gap-2 bg-white text-black px-6 py-2 rounded-full font-bold hover:bg-purple-200 transition group/btn"
                        >
                            <span>Live Demo</span>
                            <ExternalLink size={16} className="group-hover/btn:rotate-45 transition duration-300" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
