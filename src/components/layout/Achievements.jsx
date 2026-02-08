"use client";
import React from "react";
import { GraduationCap, Code2, Trophy, ExternalLink } from "lucide-react";
import Education3D from "@/components/sub/Education3D";
import { motion } from "framer-motion";
import Image from "next/image";

const Achievements = () => {
    return (
        <section className="flex flex-col items-center justify-center gap-6 md:gap-8 min-h-screen mx-3 md:mx-5 relative overflow-hidden py-12 md:py-20 z-20">

            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-4 md:mb-8 text-center"
            >
                Achievements & Certifications
            </motion.h2>

            <div className="w-full max-w-7xl grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 auto-rows-fr">

                {/* Publications - Mobile: 2 cols, Tablet: 2 cols, Desktop: 2 cols x 2 rows */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="col-span-2 lg:row-span-2 bg-slate-900/50 border border-[#7042f861] rounded-xl md:rounded-2xl p-4 md:p-6 backdrop-blur-sm"
                >
                    <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                        <div className="p-2 md:p-3 bg-cyan-500/20 rounded-lg md:rounded-xl">
                            <Code2 className="text-cyan-400" size={20} />
                        </div>
                        <h3 className="text-lg md:text-2xl font-bold text-white">Publications</h3>
                    </div>

                    <div className="flex flex-col gap-2 md:gap-4">
                        <div
                            className="p-3 md:p-4 bg-[#0300145e] rounded-lg md:rounded-xl hover:bg-purple-500/10 transition cursor-pointer border border-[#7042f861] group"
                            onClick={() => window.open('https://ieeexplore.ieee.org/document/10441196', '_blank')}
                        >
                            <div className="flex items-start justify-between gap-2">
                                <div className="flex-1 min-w-0">
                                    <h4 className="text-sm md:text-lg font-bold text-cyan-400 group-hover:text-cyan-300">
                                        IEEE Paper
                                    </h4>
                                    <p className="text-gray-300 text-xs md:text-sm mt-1 line-clamp-2">
                                        Smart Roads: Lighting the Way to Safety and Efficiency.
                                    </p>
                                </div>
                                <ExternalLink className="text-gray-400 group-hover:text-cyan-400 transition flex-shrink-0" size={14} />
                            </div>
                        </div>

                        <div
                            className="p-3 md:p-4 bg-[#0300145e] rounded-lg md:rounded-xl hover:bg-purple-500/10 transition cursor-pointer border border-[#7042f861] group"
                            onClick={() => window.open('https://www.frontiersin.org/journals/digital-health/articles/10.3389/fdgth.2025.1724348/full', '_blank')}
                        >
                            <div className="flex items-start justify-between gap-2">
                                <div className="flex-1 min-w-0">
                                    <h4 className="text-sm md:text-lg font-bold text-cyan-400 group-hover:text-cyan-300">
                                        Frontiers Research
                                    </h4>
                                    <p className="text-gray-300 text-xs md:text-sm mt-1 line-clamp-2">
                                        Machine learning methods for mental health state detection.
                                    </p>
                                </div>
                                <ExternalLink className="text-gray-400 group-hover:text-cyan-400 transition flex-shrink-0" size={14} />
                            </div>
                        </div>

                        <div
                            className="p-3 md:p-4 bg-[#0300145e] rounded-lg md:rounded-xl hover:bg-purple-500/10 transition cursor-pointer border border-[#7042f861] group"
                            onClick={() => window.open('https://shorturl.at/qo0mO', '_blank')}
                        >
                            <div className="flex items-start justify-between gap-2">
                                <div className="flex-1 min-w-0">
                                    <h4 className="text-sm md:text-lg font-bold text-cyan-400 group-hover:text-cyan-300">
                                        Article Publication
                                    </h4>
                                    <p className="text-gray-300 text-xs md:text-sm mt-1 line-clamp-2">
                                        Poribesh Odidoptor, Sharonika Bisso Poribesh Dibosh 2023.
                                    </p>
                                </div>
                                <ExternalLink className="text-gray-400 group-hover:text-cyan-400 transition flex-shrink-0" size={14} />
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Education Card - Mobile: 2 cols, Desktop: 2 cols */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="col-span-2 bg-slate-900/50 border border-indigo-500/30 p-4 md:p-6 rounded-xl md:rounded-2xl flex items-center gap-3 md:gap-4 hover:bg-indigo-500/10 transition group"
                >
                    <div className="p-3 md:p-4 bg-indigo-500/20 rounded-lg md:rounded-xl text-indigo-400 group-hover:text-white group-hover:bg-indigo-500 transition duration-300 flex-shrink-0">
                        <GraduationCap size={24} className="md:w-8 md:h-8" />
                    </div>
                    <div className="flex-1 min-w-0">
                        <h3 className="text-base md:text-xl font-bold text-white truncate">BSc in Computer Science</h3>
                        <p className="text-slate-400 text-xs md:text-sm truncate">American International University-Bangladesh</p>
                    </div>
                </motion.div>

                {/* React Certification */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="bg-slate-900/50 border border-[#7042f861] rounded-xl md:rounded-2xl p-3 md:p-4 flex flex-col items-center justify-center hover:border-cyan-500/50 transition group cursor-pointer overflow-hidden"
                >
                    <div className="w-full aspect-square relative mb-2 md:mb-3 rounded-lg md:rounded-xl overflow-hidden">
                        <Image
                            src="/Certification/React_Certificate.jpg"
                            alt="React Certificate"
                            fill
                            className="object-cover group-hover:scale-105 transition duration-300"
                        />
                    </div>
                    <h4 className="text-xs md:text-sm font-bold text-white text-center">React Developer</h4>
                    <p className="text-[10px] md:text-xs text-slate-400 text-center mt-0.5 md:mt-1">Scrimba</p>
                </motion.div>

                {/* ASP.NET Certification */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.35 }}
                    viewport={{ once: true }}
                    className="bg-slate-900/50 border border-[#7042f861] rounded-xl md:rounded-2xl p-3 md:p-4 flex flex-col items-center justify-center hover:border-purple-500/50 transition group cursor-pointer overflow-hidden"
                >
                    <div className="w-full aspect-square relative mb-2 md:mb-3 rounded-lg md:rounded-xl overflow-hidden">
                        <Image
                            src="/Certification/AspDotNetCertificate.jpg"
                            alt="ASP.NET Certificate"
                            fill
                            className="object-cover group-hover:scale-105 transition duration-300"
                        />
                    </div>
                    <h4 className="text-xs md:text-sm font-bold text-white text-center">ASP.NET Core</h4>
                    <p className="text-[10px] md:text-xs text-slate-400 text-center mt-0.5 md:mt-1">BCC ICT</p>
                </motion.div>

                {/* Cisco CyberOps Associate Certification */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="bg-slate-900/50 border border-[#7042f861] rounded-xl md:rounded-2xl p-3 md:p-4 flex flex-col items-center justify-center hover:border-cyan-500/50 transition group cursor-pointer overflow-hidden"
                >
                    <div className="w-full aspect-square relative mb-2 md:mb-3 rounded-lg md:rounded-xl overflow-hidden">
                        <Image
                            src="/Certification/CyberOpsAssoc.png"
                            alt="Cisco CyberOps Associate"
                            fill
                            className="object-contain group-hover:scale-105 transition duration-300"
                        />
                    </div>
                    <h4 className="text-xs md:text-sm font-bold text-white text-center">CyberOps</h4>
                    <p className="text-[10px] md:text-xs text-slate-400 text-center mt-0.5 md:mt-1">Cisco</p>
                </motion.div>

                {/* LeetCode Stats */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.45 }}
                    viewport={{ once: true }}
                    className="bg-slate-900/50 border border-[#7042f861] rounded-xl md:rounded-2xl p-3 md:p-4 flex flex-col items-center justify-center hover:border-amber-500/50 transition group cursor-pointer"
                    onClick={() => window.open('https://leetcode.com/u/rifathossain328663/', '_blank')}
                >
                    <Trophy className="text-amber-500 mb-1 md:mb-2 group-hover:scale-110 transition" size={28} />
                    <h4 className="text-2xl md:text-3xl font-bold text-white">150+</h4>
                    <p className="text-[10px] md:text-xs text-slate-400 text-center mt-0.5 md:mt-1">LeetCode</p>
                    <ExternalLink className="text-gray-400 group-hover:text-amber-400 transition mt-1 md:mt-2" size={14} />
                </motion.div>

                {/* 3D Character Grid Item - Mobile: 2 cols, Desktop: 2 cols */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="col-span-2 h-[180px] md:h-[220px] lg:h-auto bg-slate-900/50 border border-indigo-500/30 rounded-xl md:rounded-2xl relative overflow-hidden flex items-center justify-center group"
                >
                    <div className="absolute inset-0 z-0">
                        <Education3D />
                    </div>
                    <div className="absolute inset-0 bg-slate-950/20 z-1 pointer-events-none group-hover:bg-transparent transition duration-500" />
                    <span className="relative z-10 text-sm md:text-lg font-bold text-white bg-slate-950/60 px-4 md:px-6 py-1.5 md:py-2 rounded-full backdrop-blur-sm border border-white/10 shadow-xl">
                        Continuous Learner
                    </span>
                </motion.div>

            </div>
        </section>
    );
};

export default Achievements;