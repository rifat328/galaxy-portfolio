"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
    const [status, setStatus] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Since we don't have a backend, we'll simulate a submission.
        // In a real app, use EmailJS or a server action.
        setStatus("sending");
        setTimeout(() => {
            setStatus("success");
            alert("Thank you! Your message has been sent (simulated).");
            setStatus(null);
            e.target.reset();
        }, 1000);
    };

    return (
        <motion.div
            id="contact"
            className="w-full flex-col justify-center items-center flex py-20 z-50 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
        >
            <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
                Contact Me
            </h1>
            <div className="w-[90%] md:w-[600px] border border-[#7042f861] bg-[#0300145e] p-10 rounded-xl backdrop-blur-md">
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div className="flex flex-col gap-2">
                        <label className="text-white font-semibold">Name</label>
                        <input
                            type="text"
                            name="name"
                            required
                            className="bg-[#110d29] border border-gray-600 rounded-lg p-3 text-white focus:outline-none focus:border-purple-500 transition"
                            placeholder="Your Name"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-white font-semibold">Email</label>
                        <input
                            type="email"
                            name="email"
                            required
                            className="bg-[#110d29] border border-gray-600 rounded-lg p-3 text-white focus:outline-none focus:border-purple-500 transition"
                            placeholder="your@email.com"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-white font-semibold">Message</label>
                        <textarea
                            name="message"
                            rows="5"
                            required
                            className="bg-[#110d29] border border-gray-600 rounded-lg p-3 text-white focus:outline-none focus:border-purple-500 transition"
                            placeholder="Your message..."
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={status === "sending"}
                        className="button-primary py-3 px-6 rounded-lg text-white font-bold cursor-pointer hover:shadow-lg hover:shadow-purple-500/50 transition w-full mt-4"
                    >
                        {status === "sending" ? "Sending..." : "Send Message"}
                    </button>
                    <p className="text-gray-400 text-sm text-center mt-2">
                        Alternatively, email me at <a href="mailto:mifweb@gmail.com" className="text-purple-400 hover:underline">mifweb@gmail.com</a>
                    </p>
                </form>
            </div>
        </motion.div>
    );
};

export default Contact;
