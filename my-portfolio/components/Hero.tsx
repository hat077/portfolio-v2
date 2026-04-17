"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="min-h-screen bg-black flex flex-col justify-center items-center text-center px-4">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-6 p-2 border border-white/20 rounded-full bg-white/5">
                <span className="text-gray-300 text-sm">Seeking Fall 2026 Co-op Opportunities</span>
            </motion.div>
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                Building digital <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purplt-600">
                    experiences
                </span>
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-gray-400 text-lg md:text-xl max-w-2xl mb-10">
                I am a software engineering student specializing in building exceptional digital interfaces and scalable web applications.
            </motion.p>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex gap-4">
                <Link
                    href="#projects"
                    className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors">
                        View Work
                </Link>
                <Link
                    href="#contact"
                    className="border border-white/20 text-white px-8 py-3 rounded-full font-medium hover:bg-white/10 transition-colors">
                        Contact Me
                </Link>
            </motion.div>
        </section>
    );
};

export default Hero;