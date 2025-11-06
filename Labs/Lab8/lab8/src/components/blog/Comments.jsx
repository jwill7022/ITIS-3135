import React from 'react';
import { useParams } from 'react-router';

function Comments({ comments }) {

    
    
    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-colors duration-500">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mt-4 mb-4">
                Existing Comments:
            </h3>
            
            {comments.length === 0 ? (
                <p className="text-gray-600 dark:text-gray-400 italic">
                    No comments yet. Be the first to comment!
                </p>
            ) : (
                <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                    {comments.map((comment, index) => (
                        <li key={index} className="border-b border-gray-200 dark:border-gray-700 pb-4 last:border-b-0">
                            <p className="font-semibold text-gray-800 dark:text-white">{comment.name}</p>
                            <p className="text-gray-600 dark:text-gray-400">{comment.body}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Comments;