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
        { name: "Experience", href: "#experience", id: "experience" },
        { name: "Projects", href: "#projects", id: "projects" },
        { name: "Contact", href: "#contact", id: "contact" },
    ];

    return (
        <div className="fixed top-0 w-full h-[65px] z-50 px-2 sm:px-4 md:px-10 mt-2 sm:mt-4 pointer-events-none">
            <div className="w-full h-full flex items-center justify-between relative">
                {/* 1. Left: Logo / Brand */}
                <a href="#Hero" className="flex flex-row items-center justify-center pointer-events-auto">
                    <span className="font-bold font-nico-moji text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl bg-linear-to-b from-white to-gray-400 bg-clip-text text-transparent transition drop-shadow-lg">
                        RH
                    </span>
                </a>

                {/* 2. Center: Navigation Links - Pill Shaped */}
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
                    <div className="flex flex-row items-center justify-between gap-1 sm:gap-2 md:gap-4 bg-[#0300145e] backdrop-blur-md border border-[#7042f861] rounded-full px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 shadow-lg shadow-purple-500/10">
                        {navLinks.map((link, index) => {
                            // On mobile, show only About, Projects, Contact (indices 0, 2, 4)
                            const showOnMobile = [0, 2, 4].includes(index);

                            return (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className={twMerge(
                                        "cursor-pointer px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-full transition-all duration-300 text-xs sm:text-sm font-medium",
                                        // Hide Skills and Experience on mobile
                                        !showOnMobile && "hidden sm:inline-block",
                                        activeSection === link.id
                                            ? "bg-purple-500/20 text-white shadow-[0_0_15px_rgba(168,85,247,0.5)] border border-purple-500/30 scale-105"
                                            : "text-gray-200 hover:text-[#b49bff] hover:bg-white/5"
                                    )}
                                >
                                    {link.name}
                                </a>
                            );
                        })}
                    </div>
                </div>

                {/* 3. Right: Action Buttons */}
                <div className="flex flex-row gap-2 sm:gap-4 items-center pointer-events-auto">
                    <a
                        href="#"
                        target="_blank"
                        rel="noreferrer"
                        className="hidden lg:flex flex-row items-center gap-1 text-gray-200 hover:text-[#b49bff] transition cursor-pointer font-medium text-sm"
                    >
                        <span>Blog</span>
                        <ExternalLink size={16} />
                    </a>
                    <a
                        href="/Rifat_resume2025.pdf"
                        download="Rifat_resume2025.pdf"
                        className="flex flex-row items-center gap-1 sm:gap-2 bg-[#7042f861] border border-[#7042f861] text-gray-100 hover:bg-[#7042f88b] hover:border-purple-500/50 px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-full transition text-xs sm:text-sm font-bold shadow-md hover:shadow-purple-500/25"
                    >
                        <span className="hidden sm:inline">CV</span>
                        <Download size={16} className="sm:w-[18px] sm:h-[18px]" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
