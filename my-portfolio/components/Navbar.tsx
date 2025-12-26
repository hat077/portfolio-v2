import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full bg-black/50 backdrop-blur-md z-50 border-b border-white/10">
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                <Link href="/" className="text-xl font-bold text-white">Hatim Oudghiri</Link>
                <div className="flex gap-6">
                    <Link href="#about" className="text-gray-300 hover:text-white transition-colors">About</Link>
                    <Link href="#skills" className="text-gray-300 hover:text-white transition-colors">Skills</Link>
                    <Link href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</Link>
                    <Link href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;