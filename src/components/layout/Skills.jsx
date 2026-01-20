import React from "react";
import { Skill_data } from "@/constants";
import SkillDataProvider from "@/components/sub/SkillDataProvider";
import { Code } from "lucide-react";

const Skills = () => {
    return (
        <section
            id="skills"
            className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-20 py-20 z-20"
        >
            <div className="flex flex-row items-center justify-center mb-10 mt-10">
                <Code className="text-purple-500 mr-2" />
                <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-4 text-center">
                    My Tech Stack
                </h1>
            </div>

            <div className="flex flex-row justify-center flex-wrap mt-4 gap-5 items-center max-w-[900px] w-full px-5">
                {Skill_data.map((image, index) => (
                    <SkillDataProvider
                        key={index}
                        src={image.Image}
                        width={image.width}
                        height={image.height}
                        index={index}
                    />
                ))}
            </div>
        </section>
    );
};

export default Skills;
