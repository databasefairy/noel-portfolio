import React, { useState, useEffect } from 'react';

const ProjectsFeed = ({ id, title, subtitle }) => {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                // Fetching the 4 most recently updated repositories for the user 'databasefairy'
                const response = await fetch('https://api.github.com/users/databasefairy/repos?sort=updated&per_page=10');
                const data = await response.json();
                if (Array.isArray(data)) {
                    // Filter out repos that have external homepage links, and slice to 4
                    const pureGithubRepos = data.filter(repo => !repo.homepage).slice(0, 4);
                    setRepos(pureGithubRepos);
                } else {
                    console.error('Invalid response format', data);
                }
            } catch (error) {
                console.error('Error fetching GitHub repos:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchRepos();
    }, []);

    return (
        <section id={id} className="py-32 px-12 lg:px-24 bg-obsidian border-t border-mint/10">
            <div className="max-w-7xl mx-auto flex flex-col items-start">
                <h2 className="text-5xl md:text-7xl font-serif mb-16 text-mint">
                    {title} <span className="text-magenta">{subtitle}:</span>
                </h2>

                <div className="w-full">
                    {loading ? (
                        <div className="flex animate-pulse flex-col gap-12">
                            {[1, 2, 3].map((item) => (
                                <div key={item} className="h-48 w-full bg-mint/5 rounded-lg" />
                            ))}
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            {repos.map((repo) => (
                                <a
                                    key={repo.id}
                                    href={repo.html_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex flex-col gap-6 cursor-pointer"
                                >
                                    {/* Abstract Project Card Wrapper */}
                                    <div className="relative w-full aspect-[21/9] overflow-hidden bg-mint/5 rounded-sm border border-mint/10 group-hover:border-gold transition-colors duration-300 flex flex-col justify-end p-6">
                                        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent opacity-80 z-10" />

                                        {/* A simple decorative pattern to represent the "project" aesthetic without an actual image cover */}
                                        <div className="absolute inset-0 z-0 opacity-10 group-hover:opacity-20 transition-opacity bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-mint via-obsidian to-obsidian" />

                                        <div className="relative z-20">
                                            <h3 className="text-3xl font-serif text-mint/90 group-hover:text-gold transition-colors truncate">
                                                {repo.name}
                                            </h3>
                                            <p className="text-mint/60 font-sans mt-2 line-clamp-2">
                                                {repo.description || 'No description available for this repository.'}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Context Details */}
                                    <div className="flex flex-col gap-2">
                                        <div className="flex items-center justify-between">
                                            <span className="text-anthracite font-sans text-xs uppercase tracking-widest">
                                                {repo.language || 'Codebase'}
                                            </span>
                                            <span className="text-anthracite font-sans text-xs uppercase tracking-widest flex items-center gap-1">
                                                ★ {repo.stargazers_count}
                                            </span>
                                        </div>
                                        <div className="h-[1px] w-full mt-4 bg-magenta/10 group-hover:bg-magenta/30 transition-colors" />
                                    </div>
                                </a>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ProjectsFeed;
