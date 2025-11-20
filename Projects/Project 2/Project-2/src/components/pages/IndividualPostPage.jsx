import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CommentForm from '../blog/CommentForm';
import Comments from '../blog/Comments';
import BlogPost from '../blog/BlogPost';
import { useAuth } from '../AuthContext';
import axios from 'axios';
import { InfinitySpin } from 'react-loader-spinner';

// Static fallback post content for demo purposes
const staticPostContent = {
    1: { title: "My First Post", body: "This is the full, detailed content of my first post. It's a deep dive into the world of React and JavaScript!", author: "John Doe", date: "2026-01-01" },
    2: { title: "Learning React Router", body: "Mastering the <Routes>, <Route>, and <Link> components is key to building multi-page React applications.", author: "Jane Smith", date: "2026-01-05" },
    3: { title: "Tailwind CSS Mastery", body: "From utility classes to responsive design, Tailwind makes styling incredibly fast and maintainable.", author: "Alice Brown", date: "2026-01-10" },
};

// Individual blog post page with comments section
function IndividualPostPage() {
    // Get postId from URL parameters
    const { postId } = useParams();
    const postData = staticPostContent[postId] || staticPostContent[1]; // Fallback to post 1 if ID not found
    const [postAPIData, setPostAPIData] = useState();
    const [authorData, setAuthorData] = useState();
    // Get authentication state for conditional comment form rendering
    const { isAuthenticated } = useAuth();

    const [loading, setLoading] = useState(true);

    // State for managing comments for this post
    const [comments, setComments] = useState([]);

    const postComment = (newComment) => {
        axios.post(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`, {
            name: newComment.name,
            body: newComment.text   
        }).then(res => {
            console.log("Response:", res.data);
            setComments(prevComments => [
                ...prevComments,
                { 
                    name: newComment.name,
                    body: newComment.text,
                    id: prevComments.length + 1}
            ]);
        
    }).catch(e => {
        console.error("Error posting comment:", e);
    });
    }   

    useEffect(() => {
    const fetchData = async () => {
        try {
            const postRes = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
            setPostAPIData(postRes.data);

            const authorRes = await axios.get(`https://jsonplaceholder.typicode.com/users/${postRes.data.userId}`);
            setAuthorData(authorRes.data);

            const commentsRes = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
            setComments(commentsRes.data);

            const completedPostData = {
                title: postRes.data.title,
                body: postRes.data.body,
                author: authorRes.data.name
            }

            setPostAPIData(completedPostData);
        } catch (e) {
            console.log("Error fetching post data:", e);
        } finally {
            setLoading(false);
        }
    }
    fetchData();
}, [postId]);


    return (
        <div className="py-8">
            {loading ? (
                <main className="container mx-auto px-4 py-8 max-w-4xl">
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-colors duration-500">
                        <p className="text-center text-3xl font-bold text-gray-800 dark:text-white mb-6 transition-colors duration-500">Loading...</p>
                        <div className="flex justify-center items-center">
                            <InfinitySpin width='200' color="#2563EB" />
                        </div>
                    </div>
                </main>
                
            ) : (
            <>
            <BlogPost postContent={postAPIData} />
            </>
            )}
            
            
            {/* Comment Section */}
            <div className="container mx-auto px-4 mt-12 max-w-4xl">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 transition-colors duration-500">
                    Comments ({comments.length})
                </h2>
                
                {isAuthenticated ? (
                    <>
                        {/* Form to add a new comment - only visible to authenticated users */}
                        <CommentForm onAddComment={postComment} />
                        
                        {/* Display existing comments */}
                        <Comments comments={comments} />
                    </>
                ) : (
                    <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-300 dark:border-blue-700 rounded-lg p-6 text-center">
                        <p className="text-blue-900 dark:text-blue-200 text-lg font-semibold mb-3">
                            Please log in to comment on this post
                        </p>
                        <p className="text-blue-800 dark:text-blue-300 mb-4">
                            Sign in to share your thoughts and engage with the community.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default IndividualPostPage;