import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section id="contact" className="py-32 px-12 lg:px-24 bg-obsidian relative">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

                    {/* Left Column: Info */}
                    <div className="lg:col-span-5 space-y-12">
                        <h2 className="text-6xl md:text-8xl font-serif text-white tracking-tight">
                            Contact <span className="text-magenta italic">Më</span>
                        </h2>

                        <div className="space-y-8 pt-8">
                            <div className="space-y-2 group">
                                <span className="text-white font-sans text-xs uppercase tracking-[0.4em] opacity-50 block">Email:</span>
                                <a
                                    href="mailto:nhringstad@gmail.com"
                                    className="text-magenta font-sans text-xl lg:text-2xl hover:text-white transition-colors"
                                >
                                    nhringstad@gmail.com
                                </a>
                                <div className="w-12 h-px bg-magenta/30 group-hover:w-full transition-all duration-500" />
                            </div>

                            <div className="space-y-2 group">
                                <span className="text-white font-sans text-xs uppercase tracking-[0.4em] opacity-50 block">LinkedIn:</span>
                                <a
                                    href="https://www.linkedin.com/in/noelhollisringstad/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-magenta font-sans text-xl lg:text-2xl hover:text-white transition-colors break-words"
                                >
                                    linkedin.com/in/noelhollisringstad/
                                </a>
                                <div className="w-12 h-px bg-magenta/30 group-hover:w-full transition-all duration-500" />
                            </div>

                            <div className="space-y-2 group">
                                <span className="text-white font-sans text-xs uppercase tracking-[0.4em] opacity-50 block">GitHub:</span>
                                <a
                                    href="https://github.com/databasefairy/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-magenta font-sans text-xl lg:text-2xl hover:text-white transition-colors"
                                >
                                    github.com/databasefairy/
                                </a>
                                <div className="w-12 h-px bg-magenta/30 group-hover:w-full transition-all duration-500" />
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="lg:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="bg-anthracite/30 p-8 lg:p-12 border border-mint/5 backdrop-blur-xl relative"
                        >
                            {/* Decorative corner accent */}
                            <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-magenta/20" />

                            <form
                                action="https://formspree.io/f/mjgeojyz"
                                method="POST"
                                className="space-y-8"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-white font-sans text-[10px] uppercase tracking-[0.3em] opacity-70">Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            className="w-full bg-mint/5 border-b border-mint/10 focus:border-magenta py-3 px-4 text-mint outline-none transition-all font-sans text-sm"
                                            placeholder="Your Full Name"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-white font-sans text-[10px] uppercase tracking-[0.3em] opacity-70">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            className="w-full bg-mint/5 border-b border-mint/10 focus:border-magenta py-3 px-4 text-mint outline-none transition-all font-sans text-sm"
                                            placeholder="Your Email Address"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="subject" className="text-white font-sans text-[10px] uppercase tracking-[0.3em] opacity-70">Subject</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        className="w-full bg-mint/5 border-b border-mint/10 focus:border-magenta py-3 px-4 text-mint outline-none transition-all font-sans text-sm"
                                        placeholder="What's this about?"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-white font-sans text-[10px] uppercase tracking-[0.3em] opacity-70">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="6"
                                        required
                                        className="w-full bg-mint/5 border border-mint/10 focus:border-magenta py-3 px-4 text-mint outline-none transition-all font-sans text-sm resize-none"
                                        placeholder="Write your message here..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-4 bg-magenta text-white font-sans text-xs uppercase tracking-[0.4em] hover:bg-magenta/90 transition-all active:scale-[0.98] shadow-lg shadow-magenta/10"
                                >
                                    Let's Connect!
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
