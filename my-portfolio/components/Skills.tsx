"use client";

import { motion } from 'framer-motion';

const Skills = () => {

    const skills = [
    {
        name: "Languages",
        items: ["Python", "Java", "JavaScript", "TypeScript", "SQL"]
    },
    {
        name: "Frameworks & Tools",
        items: ["Next.js", "FastAPI", "React", "Playwright", "Selenium", "n8n"]
    },
    {
        name: "Concepts",
        items: ["OOP", "Agile / Scrum", "Multi-tenancy", "SDLC", "Unit Testing"]
    },
];
    
    return (
        <section id="skills" className="py-20 bg-black text-white">
            <div className="max-w-6xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold mb-12 text-center">
                    Technical <span className="text-blue-500">Skills</span>
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {skills.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="border border-white/10 rounded-xl p-6 hover:border-blue-500/50 transition-colors bg-white/5"
                        >
                            <h3 className="text-xl font-semibold mb-4 text-gray-200">
                                {category.name}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {category.items.map((item, itemIndex) => (
                                    <span
                                        key={itemIndex}
                                        className="bg-white/10 text-gray-300 px-3 py-1 rounded-full text-sm hover:bg-white/20 transition-colors cursor-default"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;