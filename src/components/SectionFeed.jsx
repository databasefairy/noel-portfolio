import React, { useState, useEffect } from 'react';

const SectionFeed = ({ id, title, subtitle }) => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                // Fetching from the deployed Cloudflare Worker
                const response = await fetch('https://worker.nehollis.workers.dev');
                const data = await response.json();
                setPosts(data);
            } catch (error) {
                console.error('Error fetching Substack posts:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    // Helper to calculate object-position from Roboflow data
    const getObjectPosition = (roboflowData) => {
        if (!roboflowData) return 'center center'; // Fallback if no subject detected

        // Roboflow returns x, y as center coordinates of the bounding box.
        // We can convert these into percentages assuming they are absolute pixels, but usually they might need normalization depending on the response format.
        // Assuming coordinates are relative to image width/height or absolute pixels.
        // If absolute, we need the original image dimensions, which we might not have.
        // Many Roboflow models return x/y coordinates. Without image width, x/y absolute pixels can't easily become CSS percentages.
        // We'll use 'center center' as a safe default while we verify the data structure, 
        // but if the worker passes normalized (0-1) coordinates, we'd do `${x * 100}% ${y * 100}%`.

        // Assuming standard Roboflow bounding box format (center x, center y - sometimes normalized, sometimes absolute)
        // If they are absolute, we would ideally need the image width/height from the bounding box or API to make it a percentage.
        // For now, we'll try to use them as pixels or default to center.
        return 'center center'; // We will refine this once we see the exact Roboflow output for your model
    };

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
                            {posts.map((post, index) => (
                                <a
                                    key={index}
                                    href={post.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex flex-col gap-6 cursor-pointer"
                                >
                                    {/* Image Wrapper */}
                                    <div className="relative w-full aspect-[21/9] overflow-hidden bg-mint/5 rounded-sm border border-mint/10 group-hover:border-gold transition-colors duration-300">
                                        {post.imageUrl ? (
                                            <img
                                                src={post.imageUrl}
                                                alt={post.title}
                                                className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                                                style={{ objectPosition: getObjectPosition(post.roboflowData) }}
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center text-mint/30 font-serif">
                                                No Image
                                            </div>
                                        )}
                                    </div>

                                    {/* Content */}
                                    <div className="flex flex-col gap-2">
                                        <div className="flex items-center justify-between">
                                            <span className="text-anthracite font-sans text-xs uppercase tracking-widest">
                                                {new Date(post.pubDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                            </span>
                                        </div>
                                        <h3 className="text-2xl font-serif text-mint/90 group-hover:text-gold transition-colors line-clamp-2">
                                            {post.title}
                                        </h3>
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

export default SectionFeed;
