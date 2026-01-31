"use client"
import React from "react";
import { Skill_data } from "@/constants";
import { Code, Database, Globe, Layers, Cpu } from "lucide-react";

const Skills = () => {
    // Subset for Current Stack (first 5 for example)
    const currentStack = Skill_data.slice(0, 5);
    // All skills repeated for marquee smoothness
    const allSkills = [...Skill_data, ...Skill_data];

    return (
        <section
            id="skills"
            className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-20 py-20 z-20"
        >
            {/* Background elements */}
            <div className="absolute w-full h-full z-[-10] opacity-30">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/80" />
            </div>

            {/* Current Stack */}
            <div className="flex flex-col items-center justify-center mb-10 mt-10 w-full px-5">
                <div className="flex items-center gap-2 mb-6">
                    <Layers className="text-purple-500" />
                    <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-4 text-center">
                        Current Stack
                    </h1>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-[900px] w-full">
                    {currentStack.map((skill, index) => (
                        <div key={index} className="flex flex-col items-center gap-3 p-4 bg-[#0300145e] border border-[#7042f861] rounded-xl hover:scale-105 transition duration-300">
                            {/* Placeholder for Image if not available */}
                            <div className="w-[60px] h-[60px] flex items-center justify-center bg-white/5 rounded-full text-2xl">
                                {skill.Image ? (
                                    <img src={skill.Image} alt={skill.skill_name} className="w-full h-full object-contain p-2" onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block' }} />
                                ) : null}
                                <span className={skill.Image ? "hidden" : "block"}>⚡</span>
                            </div>
                            <span className="text-gray-200 font-medium text-center">{skill.skill_name}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* All Skills Marquee */}
            <div className="flex flex-col items-center justify-center mt-10 w-full overflow-hidden">
                <div className="flex items-center gap-2 mb-6">
                    <Cpu className="text-cyan-500" />
                    <h2 className="text-3xl font-semibold text-white">All Skills</h2>
                </div>

                <div className="w-full relative flex overflow-x-hidden group">
                    <div className="animate-marquee flex flex-row gap-10 py-5 whitespace-nowrap min-w-full">
                        {allSkills.map((skill, index) => (
                            <div key={index} className="flex flex-row items-center gap-2 bg-[#2a0e61] px-6 py-3 rounded-full border border-purple-500/30 shrink-0">
                                <span className="text-white font-bold">{skill.skill_name}</span>
                            </div>
                        ))}
                    </div>
                    <div className="animate-marquee2 flex flex-row gap-10 py-5 whitespace-nowrap min-w-full absolute top-0 left-0">
                        {allSkills.map((skill, index) => (
                            <div key={`dup-${index}`} className="flex flex-row items-center gap-2 bg-[#2a0e61] px-6 py-3 rounded-full border border-purple-500/30 shrink-0">
                                <span className="text-white font-bold">{skill.skill_name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
