"use client";

import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-20 bg-black text-white">
            <div className="max-w-6xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold mb-12 text-center">
                    About <span className="text-blue-500">Me</span>
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}>
                        <h3 className="text-2xl font-semibold mb-4 text-gray-200">
                            Driven by logic, focused on results.
                        </h3>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            I am a second-year Software Engineering student at the University of Ottawa with a passion for building scalable systems.
                            My journey started with simple scripts and has evolved into full-stack development and automation pipelines.
                        </p>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Currently, I am focused on mastering modern web architectures and backend efficiency.
                            When I'm not coding, I'm likely exploring new frameworks or building personal tools to automate my daily workflows.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-blue-500/30 transition-colors">
                        <div className="mb-6">
                            <h4 className="text-blue-400 font-bold mb-2">Education</h4>
                            <p className="font-medium text-lg">B.A.Sc Software Engineering</p>
                            <p className="text-gray-400">University of Ottawa</p>
                            <p className="text-gray-500 text-sm mt-1">2024 - 2028 (Expected)</p>
                        </div>
                        <div className="mb-6">
                            <h4 className="text-blue-400 font-bold mb-2">Performance</h4>
                            <p className="font-medium text-lg">CGPA: 9.0 / 10</p>
                            <p className="text-gray-500 text-sm">Dean's Honour List</p>
                        </div>
                        <div>
                            <h4 className="text-blue-400 font-bold mb-2">Languages</h4>
                            <div className="flex gap-4 text-gray-300">
                                <span>🇺🇸 English (Fluent)</span>
                                <span>🇫🇷 French (Fluent)</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;