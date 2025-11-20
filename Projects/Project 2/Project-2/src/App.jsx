import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/common/Header.jsx'
import Footer from './components/common/Footer.jsx'
import { ThemeProvider } from './components/ThemeContext.jsx'
import AuthProvider from './components/AuthContext.jsx'
import HomePage from './components/pages/HomePage.jsx'
import LoginPage from './components/pages/LoginPage.jsx'
import IndividualPostPage from './components/pages/IndividualPostPage.jsx'
import ContactPage from './components/pages/ContactPage.jsx'
import BlogPostsPage from './components/pages/BlogPostsPage.jsx'

// Main App component - sets up routing, theme, and authentication providers
function App() {
  return (
    // Router enables client-side navigation
    <Router>
      {/* ThemeProvider enables dark/light mode toggling */}
      <ThemeProvider>
        {/* AuthProvider manages user authentication state */}
        <AuthProvider>
          <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-500">
          <Header />
          {/* Routes define page navigation */}
          <Routes>
            {/* Home/landing page route*/}
            <Route path="/" element={<HomePage/>} />
            {/* All blog posts listing page route */}
            <Route path="/all" element={<BlogPostsPage/>} />
            {/* User login page route */}
            <Route path="/login" element={<LoginPage/>} />
            {/* Individual blog post page route - uses dynamic postId parameter */}
            <Route path="/post/:postId" element={<IndividualPostPage />} />
            {/* Contact form page route */}
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
          <Footer />
          </div>
        </AuthProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App