"use client";

import React, { useState } from "react";
import { Send, Mail, MapPin } from "lucide-react";
import GalaxyModel3D from "@/components/canvas/Galaxymodel3d";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [formStatus, setFormStatus] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormStatus("sending");

        const formDataToSend = new FormData();
        formDataToSend.append("access_key", "3b5da1c0-e75e-4613-82f6-73caf06c1c5c");
        formDataToSend.append("name", formData.name);
        formDataToSend.append("email", formData.email);
        formDataToSend.append("message", formData.message);
        formDataToSend.append("subject", "New Contact Form Submission from Portfolio");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formDataToSend
            });

            const data = await response.json();

            if (data.success) {
                setFormStatus("success");
                setFormData({ name: "", email: "", message: "" });
                setTimeout(() => setFormStatus(""), 5000);
            } else {
                setFormStatus("error");
                console.error("Form submission failed:", data);
            }
        } catch (error) {
            console.error("Form submission error:", error);
            setFormStatus("error");
        }
    };

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
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
                        <div className="flex flex-col gap-2">
                            <label className="text-slate-300 text-sm font-medium">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="Your Name"
                                className="bg-[#1e293b] border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-rose-400 focus:ring-1 focus:ring-rose-400 transition"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-slate-300 text-sm font-medium">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="your@email.com"
                                className="bg-[#1e293b] border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-rose-400 focus:ring-1 focus:ring-rose-400 transition"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-slate-300 text-sm font-medium">Message</label>
                            <textarea
                                rows="5"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                placeholder="Your Message..."
                                className="bg-[#1e293b] border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-rose-400 focus:ring-1 focus:ring-rose-400 transition resize-none"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            disabled={formStatus === "sending"}
                            className="bg-gradient-to-r from-indigo-600 to-rose-600 hover:from-indigo-500 hover:to-rose-500 py-3 px-6 rounded-lg text-white font-bold flex items-center justify-center gap-2 hover:scale-[1.02] transition shadow-lg shadow-rose-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <span>
                                {formStatus === "sending" ? "Sending..." :
                                    formStatus === "success" ? "Sent Successfully!" :
                                        formStatus === "error" ? "Try Again" : "Send Message"}
                            </span>
                            <Send size={18} className={formStatus === "sending" ? "animate-pulse" : ""} />
                        </button>
                        {formStatus === "success" && (
                            <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                                <p className="text-green-400 text-sm text-center font-medium">
                                    ✓ Message sent successfully! I&apos;ll get back to you soon.
                                </p>
                            </div>
                        )}
                        {formStatus === "error" && (
                            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                                <p className="text-red-400 text-sm text-center font-medium">
                                    ✗ Failed to send message. Please try again or email me directly.
                                </p>
                            </div>
                        )}
                    </form>
                </div>

                {/* 2. Bento Grid (Right) */}
                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 auto-rows-fr">

                    {/* Contact Info Cards */}
                    <div className="bg-slate-900/50 border border-indigo-500/30 p-6 rounded-3xl flex flex-col gap-3 hover:bg-indigo-500/10 transition group">
                        <div className="p-3 bg-indigo-500/20 rounded-full text-indigo-400 group-hover:text-white group-hover:bg-indigo-500 transition duration-300 w-fit">
                            <Mail size={24} />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-white">Email</h3>
                            <a
                                href="mailto:rifathossain328663@gmail.com"
                                className="text-slate-400 text-sm break-all hover:text-indigo-400 transition"
                            >
                                rifathossain328663@gmail.com
                            </a>
                        </div>
                    </div>

                    <div className="bg-slate-900/50 border border-purple-500/30 p-6 rounded-3xl flex flex-col gap-3 hover:bg-purple-500/10 transition group">
                        <div className="p-3 bg-purple-500/20 rounded-full text-purple-400 group-hover:text-white group-hover:bg-purple-500 transition duration-300 w-fit">
                            <MapPin size={24} />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-white">Location</h3>
                            <p className="text-slate-400 text-sm">Dhaka, Bangladesh</p>
                        </div>
                    </div>

                    {/* 3D Galaxy Model - Spans 2 columns */}
                    <div className="md:col-span-2 h-[300px] md:h-[400px] bg-slate-900/50 border border-indigo-500/30 rounded-3xl relative overflow-hidden group">
                        <div className="absolute inset-0 z-0">
                            <GalaxyModel3D />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent z-1 pointer-events-none" />
                        <div className="absolute bottom-6 left-6 z-10">
                            <h3 className="text-2xl font-bold text-white mb-2">Let&apos;s Connect</h3>
                            <p className="text-slate-300 text-sm">Exploring opportunities across the digital universe</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;