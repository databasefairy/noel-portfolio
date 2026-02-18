import React from 'react';

const About = () => {
    const certifications = [
        { title: 'Google AI Leader', detail: 'Issued Oct 2025 · Expires Oct 2028\nCredential ID 7214329676114158aa4acbbed3a99804' },
        { title: 'Certified Ethical Hacker Bootcamp', detail: 'Aug 2025 - O’Reilly Media' },
        { title: 'Exploring Data Transformation with Google Cloud', detail: 'Issued Aug 2025\nCredential ID 17500437' },
    ];

    const awards = [
        { year: '2025', title: "Developer Games: People's Choice", company: 'The Home Depot' },
        { year: '2024', title: "Best in Technology", company: 'The Home Depot' },
        { year: '2023', title: "Developer Games: People's Choice", company: 'The Home Depot' },
        { year: '2023', title: "Top 10 Defcon OSINT CTF", company: 'TraceLabs' },
        { year: '2020', title: "Finance IT: Golden Shovel", company: 'The Home Depot' },
        { year: '2015', title: "Award for Analytical Excellence", company: 'Moxie - Part of Publicis Group' },
    ];

    return (
        <section id="about" className="py-32 px-12 lg:px-24 bg-anthracite/20 relative">
            <div className="max-w-7xl mx-auto flex flex-col items-start w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start w-full">
                    {/* Bio Column: Title + Content + Certifications */}
                    <div className="lg:col-span-4 space-y-4">
                        <div className="space-y-6">
                            <h2 className="text-5xl md:text-7xl font-serif text-mint">
                                About <span className="text-magenta">Me:</span>
                            </h2>
                            <div className="text-mint/70 font-sans text-sm leading-relaxed space-y-6">
                                <p>
                                    I don't just manage products; I architect systems that bridge the gap between technical possibility and operational reality. With a career rooted in the high-stakes environments of Home Depot and agile medical startups, I've navigated the intricacies of HIPAA and SOX compliance while scaling robust cloud solutions.
                                </p>
                                <p>
                                    I thrive in the "dark mode" of development—the deep work where strategy meets execution. As a Google Generative AI Leader certified professional, my current focus is on the transformative power of Large Language Models. I believe the best AI products aren't just powerful; they are intuitive, secure, and purpose-built to solve fragmented workflows.
                                </p>
                            </div>
                        </div>

                        {/* Certifications Moved Here */}
                        <div className="pt-0">
                            <h3 className="text-magenta font-serif text-3xl mb-2 border-b border-magenta/20 pb-2">Certifications</h3>
                            <ul className="space-y-6">
                                {certifications.map((cert, i) => (
                                    <li key={i} className="flex flex-col">
                                        <span className="text-mint font-sans text-sm font-semibold flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-gold rounded-full" /> {cert.title}
                                        </span>
                                        <span className="text-mint/40 font-sans text-[10px] uppercase tracking-wider mt-1 ml-4 whitespace-pre-line">
                                            {cert.detail}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* About Monogram */}
                    <div className="lg:col-span-4 flex justify-center items-center py-8 self-center">
                        <img
                            src="/about-monogram.png"
                            alt="Monogram"
                            className="w-[10.5rem] md:w-[24rem] h-auto object-contain"
                        />
                    </div>

                    {/* Awards Column only */}
                    <div className="lg:col-span-4 self-stretch pt-[4rem] md:pt-[6.5rem]">
                        <div className="h-full flex flex-col">
                            <h3 className="text-magenta font-serif text-3xl mb-8 border-b border-magenta/20 pb-2">Awards</h3>
                            <div className="flex flex-col justify-between flex-grow pb-4">
                                {awards.map((award, i) => (
                                    <div key={i} className="flex flex-col">
                                        <span className="text-mint font-sans text-sm font-semibold flex items-baseline gap-2">
                                            <span className="text-gold text-[10px] whitespace-nowrap">{award.year} —</span>
                                            {award.title}
                                        </span>
                                        <span className="text-mint/40 font-sans text-[10px] uppercase tracking-wider mt-1">
                                            {award.company}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default About;
