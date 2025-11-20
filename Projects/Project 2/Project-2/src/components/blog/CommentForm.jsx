import React, { useState, useEffect } from 'react';
import { useAuth } from '../AuthContext';

function CommentForm({ onAddComment }) {
    const { user } = useAuth();
    const [name, setName] = useState('');
    const [commentText, setCommentText] = useState('');

    // Set the name to the logged-in user's username on component mount
    useEffect(() => {
        if (user && user.username) {
            setName(user.username);
        }
    }, [user]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.trim() === '' || commentText.trim() === '') {
            alert("Name and comment cannot be empty.");
            return;
        }

        onAddComment({ name, text: commentText });

        // Clear form fields
        setName('');
        setCommentText('');
    };

    

    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8 transition-colors duration-500">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                Leave a Comment
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-500"
                    required
                    disabled={user && user.username ? true : false}
                    title={user && user.username ? "Your username is automatically filled in" : ""}
                />
                <textarea
                    placeholder="Add your comment"
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none h-24 transition-colors duration-500"
                    required
                ></textarea>
                <button
                    type="submit"
                    className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-8 py-3 rounded-full transition-colors shadow-md"
                >
                    Submit Comment
                </button>
            </form>
        </div>
    );
}

export default CommentForm;