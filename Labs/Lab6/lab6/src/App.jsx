import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BlogPost from './components/blog/BlogPost.jsx'
import Header from './components/common/Header.jsx'
import Footer from './components/common/Footer.jsx'
import Comments from './components/blog/Comments.jsx'

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <BlogPost />
      <Comments />
      <Footer />
    </div>
  )
}

export default App