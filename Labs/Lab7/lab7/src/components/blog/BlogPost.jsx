import React from 'react';
import Content from "./Content";
import { useTheme } from "../ThemeContext";

// Receive postContent as a prop instead of defining it internally
function BlogPost({ postContent }) {
    const { theme } = useTheme(); // Use theme for potential dynamic styling

    // Fallback content if postContent is not provided
    const { title, body, author, date } = postContent || {
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
                date={date}
            />
        </div>
    );
}

export default BlogPost;