import React from 'react';

const SectionFeed = ({ id, title, subtitle }) => {
    return (
        <section id={id} className="py-32 px-12 lg:px-24 bg-obsidian border-t border-mint/10">
            <div className="max-w-7xl mx-auto flex flex-col items-start">
                <h2 className="text-5xl md:text-7xl font-serif mb-16 text-mint">
                    {title} <span className="text-magenta">{subtitle}:</span>
                </h2>

                {/* Placeholder for feed items */}
                <div className="w-full flex flex-col gap-12">
                    {[1, 2, 3].map((item) => (
                        <div key={item} className="group cursor-pointer">
                            <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4">
                                <h3 className="text-2xl font-serif text-mint/90 group-hover:text-gold transition-colors">
                                    Coming Soon...
                                </h3>
                                <span className="text-anthracite font-sans text-xs uppercase tracking-widest">
                                    Architecture // Strategy
                                </span>
                            </div>
                            <div className="h-[1px] w-full bg-magenta/10 group-hover:bg-magenta/30 transition-colors" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SectionFeed;
