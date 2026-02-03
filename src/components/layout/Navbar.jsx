"use client";

import React, { useState, useEffect } from "react";
import { Download, ExternalLink } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

const Navbar = () => {
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            const sections = ["about", "skills", "projects", "experience", "contact"];

            // Default to nothing or check scroll position
            let current = "";

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // Check if the section is roughly in the upper-middle part of the viewport
                    // or if we have scrolled past its top with some offset
                    const offset = 150;
                    if (rect.top <= offset && rect.bottom >= offset) {
                        current = section;
                        break; // Found the current section
                    }
                }
            }

            // Fallback for detecting "scrolled past top" logic if generic rect logic fails for stacking
            // A simple approach generally works best: 
            // scrollY >= el.offsetTop - offset
            if (!current) {
                // Try standard scrollSpy approach if rect approach didn't catch (e.g. large sections)
                sections.forEach((section) => {
                    const element = document.getElementById(section);
                    if (element && window.scrollY >= (element.offsetTop - 200)) {
                        current = section;
                    }
                });
            }

            setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "About", href: "#about", id: "about" },
        { name: "Skills", href: "#skills", id: "skills" },
        { name: "Projects", href: "#projects", id: "projects" },
        { name: "Experience", href: "#experience", id: "experience" },
        { name: "Contact", href: "#contact", id: "contact" },
    ];

    return (
        <div className="fixed top-0 w-full h-[65px] z-50 px-4 sm:px-10 mt-4 pointer-events-none">
            <div className="w-full h-full flex items-center justify-between relative">
                {/* 1. Left: Logo / Brand */}
                <a href="#about" className="flex flex-row items-center justify-center pointer-events-auto">
                    <span className="font-bold text-lg md:text-xl text-gray-300 hover:text-white transition drop-shadow-lg">
                        Dev Portfolio
                    </span>
                </a>

                {/* 2. Center: Navigation Links - Pill Shaped */}
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
                    <div className="flex flex-row items-center justify-between gap-2 md:gap-4 bg-[#0300145e] backdrop-blur-md border border-[#7042f861] rounded-full px-4 py-2 shadow-lg shadow-purple-500/10">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={twMerge(
                                    "cursor-pointer px-4 py-2 rounded-full transition-all duration-300 text-sm font-medium",
                                    activeSection === link.id
                                        ? "bg-purple-500/20 text-white shadow-[0_0_15px_rgba(168,85,247,0.5)] border border-purple-500/30 scale-105"
                                        : "text-gray-200 hover:text-[#b49bff] hover:bg-white/5"
                                )}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>

                {/* 3. Right: Action Buttons */}
                <div className="flex flex-row gap-4 items-center pointer-events-auto">
                    <a
                        href="#"
                        target="_blank"
                        rel="noreferrer"
                        className="hidden md:flex flex-row items-center gap-1 text-gray-200 hover:text-[#b49bff] transition cursor-pointer font-medium"
                    >
                        <span>Blog</span>
                        <ExternalLink size={16} />
                    </a>
                    <a
                        href="/publiccv.pdf"
                        download
                        className="flex flex-row items-center gap-2 bg-[#7042f861] border border-[#7042f861] text-gray-100 hover:bg-[#7042f88b] hover:border-purple-500/50 px-4 py-2 rounded-full transition text-sm font-bold shadow-md hover:shadow-purple-500/25"
                    >
                        <span>CV</span>
                        <Download size={18} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
