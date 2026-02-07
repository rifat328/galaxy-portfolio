"use client"
import React from "react";
import { Skill_data, currentStack_data } from "@/constants";
import { Layers, Cpu } from "lucide-react";

const Skills = () => {
    // Subset for Current Stack
    const currentStack = currentStack_data;
    // All skills for marquee - split into two rows
    const allSkills = Skill_data;
    const halfLength = Math.ceil(allSkills.length / 2);
    const firstRow = allSkills.slice(0, halfLength);
    const secondRow = allSkills.slice(halfLength);

    return (
        <section
            id="skills"
            className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-20 py-20 z-20"
        >
            {/* Background elements */}
            <div className="absolute w-full h-full -z-10 opacity-30">
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

                <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-2 max-w-[900px] xl:max-w-[1200px] 2xl:max-w-[1440px] w-full">
                    {currentStack.map((skill, index) => (
                        <div key={index} className="flex flex-col items-center gap-3 p-4 bg-[#0300145e] border border-[#7042f861] rounded-xl hover:scale-105 transition duration-300">
                            {/* Placeholder for Image if not available */}
                            <div className="w-[60px] h-[60px] flex items-center justify-center bg-white/5 rounded-full text-2xl">
                                {skill.Image ? (
                                    <img
                                        src={skill.Image}
                                        alt={skill.skill_name}
                                        className="w-full h-full object-contain p-2"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            // Show the emoji sibling if image fails
                                            if (e.target.nextSibling) e.target.nextSibling.style.display = 'block';
                                        }}
                                    />
                                ) : null}
                                <span style={{ display: skill.Image ? 'none' : 'block' }}>⚡</span>
                            </div>
                            <span className="text-gray-200 font-medium text-center">{skill.skill_name}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* All Skills - Marquee Section */}
            <div className="flex flex-col items-center justify-center mt-10 w-full overflow-hidden">
                <div className="flex items-center gap-2 mb-8">
                    <Cpu className="text-cyan-500" />
                    <h2 className="text-3xl font-semibold text-white">All Skills</h2>
                </div>

                <div className="w-full flex flex-col gap-4">
                    {/* First Row - Left to Right */}
                    <div className="w-full relative flex overflow-x-hidden">
                        {/* We use 2 copies of the array here */}
                        <div className="animate-marquee flex flex-row gap-4 py-3 whitespace-nowrap min-w-full w-max">
                            {[...firstRow, ...firstRow].map((skill, index) => (
                                <SkillItem key={`row1-${index}`} skill={skill} color="purple" />
                            ))}
                        </div>
                    </div>

                    {/* Second Row - Right to Left */}
                    <div className="w-full relative flex overflow-x-hidden">
                        {/* We use 2 copies of the array here */}
                        <div className="animate-marquee-reverse flex flex-row gap-4 py-3 whitespace-nowrap min-w-full w-max">
                            {[...secondRow, ...secondRow].map((skill, index) => (
                                <SkillItem key={`row2-${index}`} skill={skill} color="cyan" />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Extracted Component for cleaner code
const SkillItem = ({ skill, color }) => {
    const isPurple = color === "purple";

    // Dynamic styles based on color prop
    const bgGradient = isPurple
        ? "linear-gradient(to right, rgba(168, 85, 247, 0.1), rgba(6, 182, 212, 0.1))"
        : "linear-gradient(to right, rgba(6, 182, 212, 0.1), rgba(168, 85, 247, 0.1))";

    const borderColor = isPurple
        ? "rgba(168, 85, 247, 0.3)" // purple-400/30
        : "rgba(34, 211, 238, 0.3)"; // cyan-400/30

    const shadowColor = isPurple
        ? "rgba(112, 66, 248, 0.15)"
        : "rgba(66, 153, 248, 0.15)";

    return (
        <div
            className="flex flex-row items-center gap-3 px-5 py-3 rounded-full shrink-0 border transition-all duration-300 hover:scale-105 cursor-pointer"
            style={{
                background: bgGradient,
                borderColor: borderColor,
                backdropFilter: 'blur(10px)',
                boxShadow: `0 8px 32px 0 ${shadowColor}`,
                // Fallback background color if gradient fails or for transparency
                backgroundColor: 'rgba(20, 20, 40, 0.3)'
            }}
        >
            {skill.Image && (
                <div className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-full p-1">
                    <img
                        src={skill.Image}
                        alt={skill.skill_name}
                        className="w-full h-full object-contain"
                        onError={(e) => { e.target.style.display = 'none' }}
                    />
                </div>
            )}
            <span className="text-white font-semibold text-sm">{skill.skill_name}</span>
        </div>
    );
};

export default Skills;