import React from "react";
import { Download, ExternalLink } from "lucide-react";

const Navbar = () => {
    return (
        <div className="fixed top-0 w-full h-[65px] z-50 px-2 sm:px-10 mt-4 flex justify-center">
            <div className="w-full max-w-5xl h-full flex flex-row items-center justify-between bg-[#0300145e] backdrop-blur-md border border-[#7042f861] rounded-full px-[20px]">

                {/* Logo / Brand */}
                <a href="#about" className="h-auto w-auto flex flex-row items-center">
                    <span className="font-bold hidden md:block text-gray-300 hover:text-white transition">
                        Dev Portfolio
                    </span>
                </a>

                {/* Navigation Links */}
                <div className="w-auto h-full flex flex-row items-center justify-between gap-4 sm:gap-8 mx-4">
                    <a href="#about" className="cursor-pointer text-gray-200 hover:text-[#b49bff] transition text-sm sm:text-base">
                        About
                    </a>
                    <a href="#skills" className="cursor-pointer text-gray-200 hover:text-[#b49bff] transition text-sm sm:text-base">
                        Skills
                    </a>
                    <a href="#projects" className="cursor-pointer text-gray-200 hover:text-[#b49bff] transition text-sm sm:text-base">
                        Projects
                    </a>
                    <a href="#experience" className="cursor-pointer text-gray-200 hover:text-[#b49bff] transition text-sm sm:text-base">
                        Experience
                    </a>
                    <a href="#contact" className="cursor-pointer text-gray-200 hover:text-[#b49bff] transition text-sm sm:text-base">
                        Contact
                    </a>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-row gap-3 items-center">
                    <a
                        href="#"
                        target="_blank"
                        rel="noreferrer"
                        className="hidden md:flex flex-row items-center gap-1 text-gray-200 hover:text-[#b49bff] transition cursor-pointer"
                    >
                        <span>Blog</span>
                        <ExternalLink size={14} />
                    </a>
                    <a
                        href="/publiccv.pdf"
                        download
                        className="flex flex-row items-center gap-2 bg-[#7042f861] text-gray-100 hover:bg-[#7042f88b] px-4 py-2 rounded-full transition text-sm font-semibold"
                    >
                        <span>CV</span>
                        <Download size={16} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
