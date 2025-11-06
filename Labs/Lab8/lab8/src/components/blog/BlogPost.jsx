import React, { useEffect } from 'react';
import { useState } from 'react';
import Content from "./Content";
import { useTheme } from "../ThemeContext";
import axios from 'axios';
import Comments from '../../../../../Lab7/lab7/src/components/blog/Comments';

// Receive postContent as a prop instead of defining it internally
function BlogPost({ postContent }) {
    const { theme } = useTheme(); // Use theme for potential dynamic styling


    // Fallback content if postContent is not provided
    const { title, body, author } = postContent || {
        title: "Post Not Found",
        body: "The content for this post could not be loaded.",
        author: "System",
        date: "N/A"
    };
    
    return (
        <div className={`bg-gray-100 dark:bg-gray-900 transition-colors duration-500 ${theme === 'dark' ? 'dark-mode-styles' : 'light-mode-styles'}`}>
            <Content 
                title={title}
                body={body}
                author={author}
            />
        </div>
    );
}

export default BlogPost;