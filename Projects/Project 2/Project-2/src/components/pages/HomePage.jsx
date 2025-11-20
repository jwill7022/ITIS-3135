import { useAuth } from "../AuthContext";
import { Link } from "react-router-dom";

// Landing page that introduces the blog app
function HomePage() {
    // Get authentication state to conditionally render buttons
    const { isAuthenticated } = useAuth();

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500">
            <div className="container mx-auto px-4 py-16">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <h1 className="text-6xl md:text-7xl font-bold text-gray-800 dark:text-white mb-6 animate-fade-in">
                        Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">THE Blog</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                        Group 18, consisting of Lew, Alena, and Jamal, created this clean web app using React and Tailwind CSS.
                    </p>
                    <div className="flex gap-4 justify-center flex-wrap">
                        {!isAuthenticated ? (
                            <>
                            <Link to="/login" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold rounded-full hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                            Get Started - Login
                            </Link>
                            <Link to="/all" className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-800 dark:text-white text-lg font-semibold rounded-full border-2 border-gray-300 dark:border-gray-600 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                            Explore Blog
                            </Link>
                            </>
                        ) : (
                            <Link to ="/all" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold rounded-full hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                                View All Posts
                            </Link>
                        )}
                    </div>
                </div>

                {/* Features Section */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                        <div className="text-2xl font-bold text-gray-800 dark:text-white mb-3">📚</div>
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
                            API Integrated Posts
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            Blog posts are fetched dynamically from a public API, guaranteeing fresh content each visit.
                        </p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                        <div className="text-5xl mb-4">💬</div>
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
                            Interactable Comment Section
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            Each post includes a comment section where users can add and view comments.
                        </p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                        <div className="text-5xl mb-4">🌓</div>
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
                            Dark Mode Support
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            Seamlessly switch between light and dark themes for a comfortable reading experience.
                        </p>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white shadow-2xl">
                    <h2 className="text-4xl font-bold mb-4">Start Reading</h2>
                    <p className="text-xl mb-8 opacity-90">
                        {isAuthenticated
                            ? "Welcome back! Check out the latest posts."
                            : "Login now for the full experience and start commenting on posts!"}
                    </p>
                    <Link to={isAuthenticated ? "/all" : "/login"} className="px-8 py-4 bg-white text-blue-600 text-lg font-semibold rounded-full hover:bg-gray-100 transform hover:-translate-y-1 transition-all duration-300">
                    {isAuthenticated ? "Go to Blog" : "Login Now"}
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default HomePage;