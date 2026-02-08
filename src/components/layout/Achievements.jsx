"use client";
import React from "react";
import { GraduationCap, Code2, Trophy, ExternalLink } from "lucide-react";
import Education3D from "@/components/sub/Education3D";
import { motion } from "framer-motion";
import Image from "next/image";

const Achievements = () => {
    return (
        <section className="flex flex-col items-center justify-center gap-8 min-h-screen mx-5 relative overflow-hidden py-20 z-20">

            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-8"
            >
                Achievements & Certifications
            </motion.h2>

            <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-4 gap-6 auto-rows-fr">

                {/* Publications - Takes 2 columns and 2 rows */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="lg:col-span-2 lg:row-span-2 bg-slate-900/50 border border-[#7042f861] rounded-2xl p-6 backdrop-blur-sm"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-3 bg-cyan-500/20 rounded-xl">
                            <Code2 className="text-cyan-400" size={28} />
                        </div>
                        <h3 className="text-2xl font-bold text-white">Publications</h3>
                    </div>

                    <div className="flex flex-col gap-4">
                        <div
                            className="p-4 bg-[#0300145e] rounded-xl hover:bg-purple-500/10 transition cursor-pointer border border-[#7042f861] group"
                            onClick={() => window.open('https://ieeexplore.ieee.org/document/10441196', '_blank')}
                        >
                            <div className="flex items-start justify-between">
                                <div>
                                    <h4 className="text-lg font-bold text-cyan-400 group-hover:text-cyan-300">
                                        IEEE Paper Published
                                    </h4>
                                    <p className="text-gray-300 text-sm mt-1">
                                        Smart Roads: Lighting the Way to Safety and Efficiency.
                                    </p>
                                </div>
                                <ExternalLink className="text-gray-400 group-hover:text-cyan-400 transition" size={18} />
                            </div>
                        </div>

                        <div
                            className="p-4 bg-[#0300145e] rounded-xl hover:bg-purple-500/10 transition cursor-pointer border border-[#7042f861] group"
                            onClick={() => window.open('https://www.frontiersin.org/journals/digital-health/articles/10.3389/fdgth.2025.1724348/full', '_blank')}
                        >
                            <div className="flex items-start justify-between">
                                <div>
                                    <h4 className="text-lg font-bold text-cyan-400 group-hover:text-cyan-300">
                                        Frontiers Research
                                    </h4>
                                    <p className="text-gray-300 text-sm mt-1">
                                        An in-depth exploration of machine learning methods for mental health state detection.
                                    </p>
                                </div>
                                <ExternalLink className="text-gray-400 group-hover:text-cyan-400 transition" size={18} />
                            </div>
                        </div>

                        <div
                            className="p-4 bg-[#0300145e] rounded-xl hover:bg-purple-500/10 transition cursor-pointer border border-[#7042f861] group"
                            onClick={() => window.open('https://shorturl.at/qo0mO', '_blank')}
                        >
                            <div className="flex items-start justify-between">
                                <div>
                                    <h4 className="text-lg font-bold text-cyan-400 group-hover:text-cyan-300">
                                        Article Publication
                                    </h4>
                                    <p className="text-gray-300 text-sm mt-1">
                                        Article Published on Poribesh Odidoptor, Sharonika Bisso Poribesh Dibosh 2023.
                                    </p>
                                </div>
                                <ExternalLink className="text-gray-400 group-hover:text-cyan-400 transition" size={18} />
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Education Card - Spans 2 columns, 1 row */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="lg:col-span-2 bg-slate-900/50 border border-indigo-500/30 p-6 rounded-2xl flex items-center gap-4 hover:bg-indigo-500/10 transition group"
                >
                    <div className="p-4 bg-indigo-500/20 rounded-xl text-indigo-400 group-hover:text-white group-hover:bg-indigo-500 transition duration-300">
                        <GraduationCap size={32} />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white">BSc in Computer Science</h3>
                        <p className="text-slate-400 text-sm">American International University-Bangladesh</p>
                    </div>
                </motion.div>

                {/* React Certification */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="bg-slate-900/50 border border-[#7042f861] rounded-2xl p-4 flex flex-col items-center justify-center hover:border-cyan-500/50 transition group cursor-pointer overflow-hidden"
                >
                    <div className="w-full aspect-square relative mb-3 rounded-xl overflow-hidden">
                        <Image
                            src="/Certification/React_Certificate.jpg"
                            alt="React Certificate"
                            fill
                            className="object-cover group-hover:scale-105 transition duration-300"
                        />
                    </div>
                    <h4 className="text-sm font-bold text-white text-center">React Developer</h4>
                    <p className="text-xs text-slate-400 text-center mt-1">Scrimba</p>
                </motion.div>

                {/* ASP.NET Certification */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.35 }}
                    viewport={{ once: true }}
                    className="bg-slate-900/50 border border-[#7042f861] rounded-2xl p-4 flex flex-col items-center justify-center hover:border-purple-500/50 transition group cursor-pointer overflow-hidden"
                >
                    <div className="w-full aspect-square relative mb-3 rounded-xl overflow-hidden">
                        <Image
                            src="/Certification/AspDotNetCertificate.jpg"
                            alt="ASP.NET Certificate"
                            fill
                            className="object-cover group-hover:scale-105 transition duration-300"
                        />
                    </div>
                    <h4 className="text-sm font-bold text-white text-center">ASP.NET Core</h4>
                    <p className="text-xs text-slate-400 text-center mt-1">BCC ICT Division</p>
                </motion.div>

                {/* Cisco CyberOps Associate Certification */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="bg-slate-900/50 border border-[#7042f861] rounded-2xl p-4 flex flex-col items-center justify-center hover:border-cyan-500/50 transition group cursor-pointer overflow-hidden"
                >
                    <div className="w-full aspect-square relative mb-3 rounded-xl overflow-hidden">
                        <Image
                            src="/Certification/CyberOpsAssoc.png"
                            alt="Cisco CyberOps Associate"
                            fill
                            className="object-contain group-hover:scale-105 transition duration-300"
                        />
                    </div>
                    <h4 className="text-sm font-bold text-white text-center">CyberOps Associate</h4>
                    <p className="text-xs text-slate-400 text-center mt-1">Cisco</p>
                </motion.div>

                {/* LeetCode Stats */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.45 }}
                    viewport={{ once: true }}
                    className="bg-slate-900/50 border border-[#7042f861] rounded-2xl p-4 flex flex-col items-center justify-center hover:border-amber-500/50 transition group cursor-pointer"
                    onClick={() => window.open('https://leetcode.com/u/rifathossain328663/', '_blank')}
                >
                    <Trophy className="text-amber-500 mb-2 group-hover:scale-110 transition" size={40} />
                    <h4 className="text-3xl font-bold text-white">150+</h4>
                    <p className="text-xs text-slate-400 text-center mt-1">LeetCode Problems</p>
                    <ExternalLink className="text-gray-400 group-hover:text-amber-400 transition mt-2" size={16} />
                </motion.div>

                {/* 3D Character Grid Item - Spans 2 columns, 1 row */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="lg:col-span-2 bg-slate-900/50 border border-indigo-500/30 rounded-2xl relative overflow-hidden flex items-center justify-center group"
                >
                    <div className="absolute inset-0 z-0">
                        <Education3D />
                    </div>
                    <div className="absolute inset-0 bg-slate-950/20 z-1 pointer-events-none group-hover:bg-transparent transition duration-500" />
                    <span className="relative z-10 text-lg font-bold text-white bg-slate-950/60 px-6 py-2 rounded-full backdrop-blur-sm border border-white/10 shadow-xl">
                        Continuous Learner
                    </span>
                </motion.div>

            </div>
        </section>
    );
};

export default Achievements;