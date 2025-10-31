import React from 'react';
import { Link } from 'react-router-dom';

// Static data for demonstration
const posts = [
    { id: 1, title: "My First Post", excerpt: "A short snippet of my first insightful blog post.", author: "John Doe", date: "2026-01-01" },
    { id: 2, title: "Learning React Router", excerpt: "An introduction to client-side navigation in modern React apps.", author: "Jane Smith", date: "2026-01-05" },
    { id: 3, title: "Tailwind CSS Mastery", excerpt: "Utility-first CSS for rapid and beautiful UI development.", author: "Alice Brown", date: "2026-01-10" },
];

function BlogPostsPage() {
    return (
        <main className="container mx-auto px-4 py-12">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-8 transition-colors duration-500">
                All Blog Posts
            </h2>
            <div className="space-y-6">
                {posts.map(post => (
                    <div 
                        key={post.id} 
                        className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 hover:shadow-2xl transition-all duration-300"
                    >
                        <h3 className="text-3xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
                            <Link to={`/post/${post.id}`} className="hover:underline">
                                {post.title}
                            </Link>
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">{post.excerpt}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-500">
                            By {post.author} on {post.date}
                        </p>
                    </div>
                ))}
            </div>
        </main>
    );
}

export default BlogPostsPage;