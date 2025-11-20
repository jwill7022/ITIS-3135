import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { InfinitySpin } from 'react-loader-spinner';

// Static data for demonstration
const posts = [
    { id: 1, title: "My First Post", excerpt: "A short snippet of my first insightful blog post.", author: "John Doe", date: "2026-01-01" },
    { id: 2, title: "Learning React Router", excerpt: "An introduction to client-side navigation in modern React apps.", author: "Jane Smith", date: "2026-01-05" },
    { id: 3, title: "Tailwind CSS Mastery", excerpt: "Utility-first CSS for rapid and beautiful UI development.", author: "Alice Brown", date: "2026-01-10" },
];

function BlogPostsPage() {

    const [apiPosts, setAPIposts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [usersData, setUsersData] = useState({});

    useEffect(() => {
        const fetchData  = async () => {
        try {
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
            setAPIposts(res.data);

            const usersRes = await axios.get(`https://jsonplaceholder.typicode.com/users`);

            const usersMap = usersRes.data.reduce((acc, user) => {
                acc[user.id] = user;
                return acc;
            }, {});

            setUsersData(usersMap);
            
        } catch (e) {
            console.error("Error fetching posts:", e);
            setError("Failed to load posts.");
        } finally {
            setLoading(false);
        }
    }
    fetchData();
    }, []);
    
    return (
        <main className="container mx-auto px-4 py-12 min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-8 transition-colors duration-500">
                All Blog Posts
            </h2>
            {loading ? (
                <main className="container mx-auto px-4 py-8 max-w-4xl">
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-colors duration-500">
                        <div className="flex justify-center items-center">
                            <InfinitySpin width='200' color="#2563EB" />
                        </div>
                        <p className="text-center text-3xl font-bold text-gray-800 dark:text-white mb-6 transition-colors duration-500">Loading...</p>
                    </div>
                </main>
                
            ) : (
            <div className="space-y-6">
                {apiPosts.map(post => (
                    <div 
                        key={post.id} 
                        className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 hover:shadow-2xl transition-all duration-300"
                    >
                        <h3 className="text-3xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
                            <Link to={`/post/${post.id}`} className="hover:underline">
                                {post.title}
                            </Link>
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">{post.body.substring(0,100)}...</p>
                        <p className="text-sm text-gray-500 dark:text-gray-500">
                            By {usersData[post.userId]?.name || `User $post.userId`}
                        </p>
                    </div>
                ))}
            </div>
            )}
        </main>
    );
}

export default BlogPostsPage;