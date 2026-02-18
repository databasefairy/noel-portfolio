import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen pt-32 px-12 lg:px-24 flex flex-col lg:flex-row items-center justify-between gap-12 bg-obsidian">
            {/* Headshot Layer */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="w-full lg:w-1/2 flex justify-center lg:justify-start"
            >
                <div className="relative">
                    {/* Circular glow background behind headshot */}
                    <div className="absolute inset-0 bg-magenta/10 blur-[120px] rounded-full" />
                    <img
                        src="/hero-headshot.png"
                        alt="Noël Hollis Ringstad"
                        className="w-full max-w-[500px] h-auto object-cover relative z-10 filter grayscale-[0.2]"
                    />
                </div>
            </motion.div>

            {/* Content Layer */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="w-full lg:w-1/2 flex flex-col items-start text-left lg:pb-32"
            >
                <span className="font-sans uppercase tracking-[0.4em] text-sm mb-2 block bg-clip-text text-transparent bg-gradient-to-r from-magenta to-mint">
                    Senior Technical Product Manager
                </span>
                <h1 className="text-6xl md:text-8xl font-serif leading-tight mb-8 text-mint">
                    Hello, I'm <span className="text-magenta italic">Noël</span>
                </h1>
                <p className="text-mint/60 font-sans text-lg max-w-xl mb-10 leading-relaxed tracking-wide">
                    I bridge the gap between complex engineering and business strategy to build scalable, user-centric solutions that drive operational excellence.
                </p>

                <motion.a
                    href="/noel_resume.pdf"
                    download="Noel_Hollis_Ringstad_Resume.pdf"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary"
                >
                    Download My Resume
                </motion.a>
            </motion.div>
        </section>
    );
};

export default Hero;
