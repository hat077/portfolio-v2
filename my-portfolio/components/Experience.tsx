"use client";

import { motion } from 'framer-motion';

const Experience = () => {
    const experiences = [
        {
            company: "ISED (Innovation, Science and Economic Development Canada)",
            role: "QA Analyst Intern",
            period: "Jan 2026 – Apr 2026",
            description: [
                "Engineered automated UI testing pipelines using Playwright (JS) and TestComplete.",
                "Integrated Gmail API to bypass 2FA for security screening portals, streamlining Jira test execution.",
                "Conducted comprehensive smoke testing for the Nuans corporate registry system."
            ]
        },
        {
            company: "ExpertEye",
            role: "Data and AI Intern",
            period: "May 2025 – Jun 2025",
            description: [
                "Built a Python + Selenium pipeline scraping ~30 car listings per run, cutting manual work by 80%.",
                "Designed n8n + AI workflows for daily automotive news digests integrated with Slack.",
                "Automated cloud synchronization and notifications via REST APIs."
            ]
        }
    ];

    return (
        <section id="experience" className="py-20 bg-black text-white">
            <div className="max-w-6xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold mb-12 text-center">
                    Professional <span className="text-blue-500">Experience</span>
                </motion.h2>
                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative pl-8 border-l border-white/10 hover:border-blue-500/50 transition-colors group"
                        >
                            <div className="absolute w-3 h-3 bg-white/20 rounded-full -left-[6.5px] top-1 group-hover:bg-blue-500 transition-colors" />
                            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-100">{exp.role}</h3>
                                    <p className="text-blue-400 font-medium">{exp.company}</p>
                                </div>
                                <p className="text-gray-500 text-sm md:mt-1">{exp.period}</p>
                            </div>
                            <ul className="list-disc list-inside space-y-2 text-gray-400">
                                {exp.description.map((bullet, i) => (
                                    <li key={i}>{bullet}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;