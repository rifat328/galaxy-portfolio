import { Share2, User, Code, Briefcase, Mail } from "lucide-react";

const Navbar = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-[65px] bg-[#03001417] backdrop-blur-md shadow-lg shadow-[#2A0E61]/50 z-50 px-10">
            <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
                <a href="#about" className="h-auto w-auto flex flex-row items-center">
                    <span className="font-bold ml-[10px] hidden md:block text-gray-300">
                        Dev Portfolio
                    </span>
                </a>

                <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
                    <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
                        <a href="#about" className="cursor-pointer hover:text-[#b49bff] transition">
                            About me
                        </a>
                        <a href="#skills" className="cursor-pointer hover:text-[#b49bff] transition">
                            Skills
                        </a>
                        <a href="#projects" className="cursor-pointer hover:text-[#b49bff] transition">
                            Projects
                        </a>
                    </div>
                </div>

                <div className="flex flex-row gap-5 items-center">
                    <a href="#contact" className="hidden md:block text-gray-200 hover:text-[#b49bff] transition">
                        Contact
                    </a>
                    <a href="/cv.pdf" download className="hidden md:block text-gray-200 border border-[#7042f861] px-4 py-1 rounded-full hover:bg-[#7042f83b] transition text-sm">
                        Download CV
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
