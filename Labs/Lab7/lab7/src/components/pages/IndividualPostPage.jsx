import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import CommentForm from '../blog/CommentForm';
import Comments from '../blog/Comments';
import BlogPost from '../blog/BlogPost';

// Sample static post content
const staticPostContent = {
    1: { title: "My First Post", body: "This is the full, detailed content of my first post. It's a deep dive into the world of React and JavaScript!", author: "John Doe", date: "2026-01-01" },
    2: { title: "Learning React Router", body: "Mastering the <Routes>, <Route>, and <Link> components is key to building multi-page React applications.", author: "Jane Smith", date: "2026-01-05" },
    3: { title: "Tailwind CSS Mastery", body: "From utility classes to responsive design, Tailwind makes styling incredibly fast and maintainable.", author: "Alice Brown", date: "2026-01-10" },
};

function IndividualPostPage() {
    const { postId } = useParams();
    const postData = staticPostContent[postId] || staticPostContent[1]; // Fallback to post 1 if ID not found

    // State for managing comments for this post
    const [comments, setComments] = useState([
        { id: 1, name: "Initial User", text: "Great post! Very informative." }
    ]);

    // Function to add a new comment
    const addComment = (newComment) => {
        setComments(prevComments => [
            ...prevComments,
            { ...newComment, id: prevComments.length + 1 }
        ]);
    };

    return (
        <div className="py-8">
            <BlogPost postContent={postData} />
            
            {/* Comment Section */}
            <div className="container mx-auto px-4 mt-12 max-w-4xl">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 transition-colors duration-500">
                    Comments ({comments.length})
                </h2>
                
                {/* Form to add a new comment */}
                <CommentForm onAddComment={addComment} />
                
                {/* Display existing comments */}
                <Comments comments={comments} />
            </div>
        </div>
    );
}

export default IndividualPostPage;