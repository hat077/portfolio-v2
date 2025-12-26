"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

const Projects = () => {
    const projects = [
        {
            title: "Student Task Manager",
            description: "A full-stack Django application to manage academic priorities. Features include user authentication, deadline countdowns, and an analytics dashboard to visualize workload distribution.",
            tech: ["Django", "SQLite", "Chart.js", "GitHub Actions", "CI/CD"],
            link: "https://github.com/hat077/StudentTaskManager",
            color: "from-purple-500 to-blue-500",
        },
        {
            title: "Automated Data Pipeline",
            description: "An intelligent scraping pipeline built for the automotive industry. It automates the extraction of car listings, reducing manual data entry by 80% and syncing results to the cloud.",
            tech: ["Python", "Selenium", "n8n", "Automation", "APIs"],
            link: "",
            color: "from-emerald-400 to-cyan-500",
        },
    ];

    return (
        <section id="projects" className="py-20 bg-black text-white">
            <div className="max-w-6xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold mb-12 text-center">
                    Featured <span className="text-blue-500">Projects</span>
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="border border-white/10 rounded-xl overflow-hidden bg-white/5 hover:border-blue-500/50 transition-all group"
                        >
                            <div className={`h-48 w-full bg-gradient-to-r ${project.color} opacity-80 group-hover:opacity-100 transition-opacity`} />
                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 mb-6 line-clamp-3">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((tech, i) => (
                                        <span key={i} className="text-xs font-medium px-2 py-1 bg-white/10 rounded text-gray-300">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                {project.link ? (
                                    <Link
                                        href={project.link}
                                        target="_blank"
                                        className="inline-flex items-center text-sm font-semibold text-white hover:text-blue-400 transition-colors"
                                    >
                                        View Project &rarr;
                                    </Link>
                                ) : (
                                    <span className="text-sm font-medium text-gray-500 cursor-not-allowed">
                                        Internal Tool (Private)
                                    </span>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;