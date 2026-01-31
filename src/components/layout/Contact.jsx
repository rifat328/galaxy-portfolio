"use client";

import React from "react";
import { Send, Award, GraduationCap } from "lucide-react";
import Education3D from "@/components/sub/Education3D";

const Contact = () => {
    return (
        <section id="contact" className="py-20 px-5 relative z-20 overflow-hidden bg-slate-950">
            {/* Gradient Title */}
            <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-rose-500 py-10 text-center">
                Get In Touch
            </h1>

            <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto h-full items-stretch">

                {/* 1. Contact Form (Left) */}
                <div className="flex-1 bg-slate-900/50 border border-indigo-500/30 p-8 rounded-3xl backdrop-blur-md flex flex-col justify-center shadow-lg shadow-indigo-500/10">
                    <h2 className="text-2xl font-bold text-white mb-6">Send me a message</h2>
                    <form className="flex flex-col gap-6 w-full">
                        <div className="flex flex-col gap-2">
                            <label className="text-slate-300 text-sm font-medium">Name</label>
                            <input type="text" placeholder="Your Name" className="bg-[#1e293b] border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-rose-400 focus:ring-1 focus:ring-rose-400 transition" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-slate-300 text-sm font-medium">Email</label>
                            <input type="email" placeholder="your@email.com" className="bg-[#1e293b] border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-rose-400 focus:ring-1 focus:ring-rose-400 transition" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-slate-300 text-sm font-medium">Message</label>
                            <textarea rows="5" placeholder="Your Message..." className="bg-[#1e293b] border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-rose-400 focus:ring-1 focus:ring-rose-400 transition resize-none"></textarea>
                        </div>
                        <button type="submit" className="bg-gradient-to-r from-indigo-600 to-rose-600 hover:from-indigo-500 hover:to-rose-500 py-3 px-6 rounded-lg text-white font-bold flex items-center justify-center gap-2 hover:scale-[1.02] transition shadow-lg shadow-rose-500/20">
                            <span>Send Message</span>
                            <Send size={18} />
                        </button>
                    </form>
                </div>

                {/* 2. Bento Grid (Right) */}
                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 auto-rows-max h-full">

                    {/* Education Card */}
                    <div className="md:col-span-2 bg-slate-900/50 border border-indigo-500/30 p-6 rounded-3xl flex flex-row items-center gap-4 hover:bg-indigo-500/10 transition group">
                        <div className="p-4 bg-indigo-500/20 rounded-full text-indigo-400 group-hover:text-white group-hover:bg-indigo-500 transition duration-300">
                            <GraduationCap size={32} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white">BSc in Computer Science</h3>
                            <p className="text-slate-400 text-sm">American International University-Bangladesh</p>
                        </div>
                    </div>

                    {/* Achievement 1 */}
                    <div className="bg-slate-900/50 border border-indigo-500/30 p-6 rounded-3xl flex flex-col gap-2 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-amber-500/10">
                        <Award className="text-amber-500 mb-2" size={28} />
                        <h4 className="text-lg font-bold text-white">Dean&apos;s List</h4>
                        <p className="text-xs text-slate-400">Academic Excellence Award 2024</p>
                    </div>

                    {/* Achievement 2 */}
                    <div className="bg-slate-900/50 border border-indigo-500/30 p-6 rounded-3xl flex flex-col gap-2 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-rose-500/10">
                        <Award className="text-rose-500 mb-2" size={28} />
                        <h4 className="text-lg font-bold text-white">Hackathon Winner</h4>
                        <p className="text-xs text-slate-400">1st Place at TechStorm 2023</p>
                    </div>

                    {/* 3D Character/Object Grid Item using Education3D */}
                    <div className="md:col-span-2 h-[200px] md:h-auto min-h-[220px] bg-slate-900/50 border border-indigo-500/30 rounded-3xl relative overflow-hidden flex items-center justify-center group">
                        <div className="absolute inset-0 z-0">
                            <Education3D />
                        </div>
                        <div className="absolute inset-0 bg-slate-950/20 z-1 pointer-events-none group-hover:bg-transparent transition duration-500" />
                        <span className="relative z-10 text-xl font-bold text-white bg-slate-950/60 px-6 py-2 rounded-full backdrop-blur-sm border border-white/10 shadow-xl">
                            Continuous Learner
                        </span>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
