import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="py-8 bg-black border-t border-white/10 text-center">
            <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto px-6">
                <p className="text-gray-500 text-sm mb-4 md:mb-0">
                    © {new Date().getFullYear()} Hatim Oudghiri. All rights reserved.
                </p>
                <div className="flex gap-6">
                    <Link href="https://github.com/hat077" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                        GitHub
                    </Link>
                    <Link href="https://www.linkedin.com/in/hatim-oudghiri-558420285/" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                        LinkedIn
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;