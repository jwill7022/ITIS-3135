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

function App() {
  return (
    // Wrap the entire app in Router for navigation
    <Router>
      <ThemeProvider>
        <AuthProvider>
          <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-500">
          <Header />
          <Routes>
            {/* Home page route*/}
            <Route path="/" element={<HomePage/>} />
            {/* All blog posts page route */}
            <Route path="/all" element={<BlogPostsPage/>} />
            {/* Login page route */}
            <Route path="/login" element={<LoginPage/>} />
            {/* Individual post page route - uses a dynamic ID parameter */}
            <Route path="/post/:postId" element={<IndividualPostPage />} />
            {/* Contact page route */}
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