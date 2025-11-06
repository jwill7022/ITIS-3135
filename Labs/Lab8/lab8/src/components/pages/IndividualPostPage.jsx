import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CommentForm from '../blog/CommentForm';
import Comments from '../blog/Comments';
import BlogPost from '../blog/BlogPost';
import axios from 'axios';

// Sample static post content
const staticPostContent = {
    1: { title: "My First Post", body: "This is the full, detailed content of my first post. It's a deep dive into the world of React and JavaScript!", author: "John Doe", date: "2026-01-01" },
    2: { title: "Learning React Router", body: "Mastering the <Routes>, <Route>, and <Link> components is key to building multi-page React applications.", author: "Jane Smith", date: "2026-01-05" },
    3: { title: "Tailwind CSS Mastery", body: "From utility classes to responsive design, Tailwind makes styling incredibly fast and maintainable.", author: "Alice Brown", date: "2026-01-10" },
};

function IndividualPostPage() {
    const { postId } = useParams();
    const postData = staticPostContent[postId] || staticPostContent[1]; // Fallback to post 1 if ID not found
    const [postAPIData, setPostAPIData] = useState();
    const [authorData, setAuthorData] = useState();

    const [loading, setLoading] = useState(true);
    

    console.log(postAPIData, authorData);

    // State for managing comments for this post
    const [comments, setComments] = useState([
        { id: 1, name: "Initial User", text: "Great post! Very informative." }
    ]);

    const postComment = (newComment) => {
        axios.post(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`, {
            name: newComment.name,
            body: newComment.text
        }).then(res => {
            console.log("Response:", res.data);
            setComments(prevComments => [
                ...prevComments,
                { ...newComment, id: prevComments.length + 1}
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

            const completedPostData = {
                title: postRes.data.title,
                body: postRes.data.body,
                author: authorRes.data.name
            }

            setPostAPIData(completedPostData);
        } catch (e) {
            console.log(e);
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
                        <p className="text-3xl font-bold text-gray-800 dark:text-white mb-6 transition-colors duration-500">Loading...</p>
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
                
                {/* Form to add a new comment */}
                <CommentForm onAddComment={postComment} />
                
                {/* Display existing comments */}
                <Comments comments={comments} />
            </div>
        </div>
    );
}

export default IndividualPostPage;