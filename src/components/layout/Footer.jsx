"use client";
import React from "react";
import { Mail, Phone, Github, Linkedin, Twitter, Code2, Facebook, Instagram } from "lucide-react";

const Footer = () => {
    return (
        <div className="w-full bg-slate-950 text-gray-200 border-t border-indigo-500/30 pt-10">
            <div className="max-w-7xl mx-auto w-full h-full flex flex-col md:flex-row items-center md:items-start justify-between p-10 gap-10 md:gap-0">

                {/* 1. Left: Vertical Social Logos */}
                <div className="flex flex-col items-center md:items-start gap-4">
                    <div className="font-bold text-[16px] mb-2 text-white">Socials</div>
                    <div className="flex flex-wrap md:flex-col gap-4">
                        <div className="flex gap-4">
                            <a href="https://github.com/rifat328" target="_blank" rel="noreferrer" className="bg-slate-800 p-2 rounded-full hover:bg-rose-500 hover:text-white transition duration-300 shadow-lg hover:shadow-rose-500/25">
                                <Github size={20} />
                            </a>
                            <a href="https://www.linkedin.com/in/rifat-hossain-a30b691ba/" target="_blank" rel="noreferrer" className="bg-slate-800 p-2 rounded-full hover:bg-rose-500 hover:text-white transition duration-300 shadow-lg hover:shadow-rose-500/25">
                                <Linkedin size={20} />
                            </a>
                            <a href="https://x.com/RifatHo16260122" target="_blank" rel="noreferrer" className="bg-slate-800 p-2 rounded-full hover:bg-rose-500 hover:text-white transition duration-300 shadow-lg hover:shadow-rose-500/25">
                                <Twitter size={20} />
                            </a>
                        </div>
                        <div className="flex gap-4">
                            <a href="https://leetcode.com/u/rifathossain328663/" target="_blank" rel="noreferrer" className="bg-slate-800 p-2 rounded-full hover:bg-rose-500 hover:text-white transition duration-300 shadow-lg hover:shadow-rose-500/25">
                                <Code2 size={20} />
                            </a>
                            <a href="https://www.instagram.com/rjeyrifat/" target="_blank" rel="noreferrer" className="bg-slate-800 p-2 rounded-full hover:bg-rose-500 hover:text-white transition duration-300 shadow-lg hover:shadow-rose-500/25">
                                <Instagram size={20} />
                            </a>
                            <a href="https://www.facebook.com/rjey.rifat/" target="_blank" rel="noreferrer" className="bg-slate-800 p-2 rounded-full hover:bg-rose-500 hover:text-white transition duration-300 shadow-lg hover:shadow-rose-500/25">
                                <Facebook size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* 2. Contact Info */}
                <div className="flex flex-col items-center md:items-start gap-4">
                    <div className="font-bold text-[16px] text-white">Contact</div>
                    <div className="flex flex-col gap-3">
                        <a href="mailto:contact@rifat.dev" className="flex flex-row items-center gap-3 cursor-pointer group">
                            <Mail className="text-slate-400 group-hover:text-rose-400 transition" size={18} />
                            <span className="text-[15px] text-slate-300 group-hover:text-white transition">contact@rifat.dev</span>
                        </a>
                        <a href="tel:+880123456789" className="flex flex-row items-center gap-3 cursor-pointer group">
                            <Phone className="text-slate-400 group-hover:text-rose-400 transition" size={18} />
                            <span className="text-[15px] text-slate-300 group-hover:text-white transition">+880 123 456 789</span>
                        </a>
                    </div>
                </div>

                {/* 3. Text Based Socials (Community) */}
                <div className="flex flex-col items-center md:items-start gap-2">
                    <div className="font-bold text-[16px] text-white mb-2">Community</div>
                    <div className="flex flex-col gap-2">
                        <a href="https://github.com/rifat328" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-rose-400 hover:translate-x-1 transition duration-300">GitHub</a>
                        <a href="https://www.linkedin.com/in/rifat-hossain-a30b691ba/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-rose-400 hover:translate-x-1 transition duration-300">LinkedIn</a>
                        <a href="https://x.com/RifatHo16260122" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-rose-400 hover:translate-x-1 transition duration-300">Twitter</a>
                    </div>
                </div>

                {/* 4. Credits (Right) */}
                <div className="flex flex-col items-center md:items-end gap-2 text-center md:text-right">
                    <span className="text-sm text-slate-400 font-light">Designed & Developed by</span>
                    <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-rose-500 font-orbitron">
                        Rifat
                    </span>

                    <div className="flex items-center gap-2 border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 rounded-full mt-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse box-shadow-green"></div>
                        <span className="text-emerald-400 text-xs font-bold uppercase tracking-wide">Available for work</span>
                    </div>
                </div>

            </div>

            <div className="w-full text-center py-4 text-xs text-slate-600 border-t border-slate-900">
                &copy; {new Date().getFullYear()} Rifat. All rights reserved.
            </div>
        </div>
    );
};

export default Footer;
