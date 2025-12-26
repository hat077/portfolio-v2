"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-black text-white text-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto px-6">
                <h2 className="text-3xl font-bold mb-6">
                    Ready to <span className="text-blue-500">Collaborate?</span>
                </h2>
                <p className="text-gray-400 mb-8 text-lg">
                    I am currently looking for fall 2026 opportunities.
                    Whether you have a question or just want to say hi, my inbox is always open.
                </p>
                <Link
                    href="mailto:houdg016@uottawa.ca"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full transition-colors"
                >
                    Say Hello
                </Link>
            </motion.div>
        </section>
    );
};

export default Contact;