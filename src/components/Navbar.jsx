import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
    const navLinks = [
        { name: 'Contact', href: '#contact' },
        { name: 'About', href: '#about' },
        { name: 'Articles', href: '#articles' },
        { name: 'Projects', href: '#projects' },
        { name: 'Home', href: '#home' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex justify-end items-center gap-10 bg-gradient-to-b from-obsidian via-obsidian/80 to-transparent backdrop-blur-sm"
        >
            <div className="flex gap-8 items-center">
                {navLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        className="text-mint/80 hover:text-mint font-sans text-sm tracking-widest transition-colors uppercase"
                    >
                        {link.name}
                    </a>
                ))}
                <div className="ml-4">
                    <img
                        src="/monogram.png"
                        alt="Monogram"
                        className="w-12 h-auto hover:brightness-125 transition-all"
                    />
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
