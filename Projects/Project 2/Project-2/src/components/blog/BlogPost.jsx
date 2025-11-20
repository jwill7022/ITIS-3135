import React, { useEffect } from 'react';
import { useState } from 'react';
import Content from "./Content";
import { useTheme } from "../ThemeContext";
import axios from 'axios';

// Wrapper component for blog post display
function BlogPost({ postContent }) {
    // Get theme from context
    const { theme } = useTheme();


    // Fallback content if postContent is not provided
    const { title, body, author } = postContent || {
        title: "Post Not Found",
        body: "The content for this post could not be loaded.",
        author: "System",
        date: "N/A"
    };
    
    return (
        <div>
            <Content 
                title={title}
                body={body}
                author={author}
            />
        </div>
    );
}

export default BlogPost;