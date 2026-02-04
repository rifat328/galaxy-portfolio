"use client";
import React from "react";
import { motion } from "framer-motion";
const Achievements = () => {
    return (
        <section className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-20 py-20 z-20">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="w-full mt-12"
            >
                <h2 className="text-3xl font-semibold text-white text-center mb-8">Achievements & Publications</h2>
                <div className="flex flex-col gap-4 text-left max-w-4xl mx-auto">
                    <div className="p-4 border border-[#7042f861] bg-[#0300145e] rounded-xl hover:bg-purple-500/10 transition cursor-pointer" onClick={() => window.open('https://ieeexplore.ieee.org/document/10441196', '_blank')}>
                        <h3 className="text-xl font-bold text-cyan-400">IEEE Paper Published</h3>
                        <p className="text-gray-300">Smart Roads: Lighting the Way to Safety and Efficiency.</p>
                    </div>
                    <div className="p-4 border border-[#7042f861] bg-[#0300145e] rounded-xl hover:bg-purple-500/10 transition cursor-pointer" onClick={() => window.open('https://www.frontiersin.org/journals/digital-health/articles/10.3389/fdgth.2025.1724348/full', '_blank')}>
                        <h3 className="text-xl font-bold text-cyan-400">Frontiers Research</h3>
                        <p className="text-gray-300">An in-depth exploration of machine learning methods for mental health state detection.</p>
                    </div>
                    <div className="p-4 border border-[#7042f861] bg-[#0300145e] rounded-xl hover:bg-purple-500/10 transition cursor-pointer" onClick={() => window.open('https://shorturl.at/qo0mO', '_blank')}>
                        <h3 className="text-xl font-bold text-cyan-400">Article Publication</h3>
                        <p className="text-gray-300">Article Published on Poribesh Odidoptor, Sharonika Bisso Poribesh Dibosh 2023.</p>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default Achievements