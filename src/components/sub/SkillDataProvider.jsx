"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const SkillDataProvider = ({ src, width, height, index }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
    });

    const imageVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    const animationDelay = 0.3;

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            variants={imageVariants}
            animate={inView ? "visible" : "hidden"}
            transition={{ delay: index * animationDelay }}
        >
            <div
                className="flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-full p-2 w-[100px] h-[100px] hover:bg-white/20 transition duration-300"
                title="Skill Icon"
            >
                {/* Using text placeholder if image is missing, or actual image tag if assets exist. 
            For now, I'll render a colored circle or text as placeholder since I don't have the assets. */}
                <span className="text-white text-xs font-bold">{src.split('/')[1].split('.')[0]}</span>
            </div>
        </motion.div>
    );
};

export default SkillDataProvider;
