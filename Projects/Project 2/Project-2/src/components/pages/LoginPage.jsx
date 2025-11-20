import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../AuthContext";

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        if(!username.trim()) {
            setError('Username is required.');
            return;
        }

        if(password.length < 6) {
            setError('Password must be at least 6 characters');
            return;
        }

        const success = login(username, password);
        if (success) {
            // Redirect to homepage after successful login
            navigate('/');
        } else {
            setError('Login failed. Please try again.');
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 py-16 px-4 transition-colors duration-500">
            <div className="max-w-md mx-auto">
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 transition-colors duration-500">
                    <div className="text-center mb-8">
                        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-2">
                            Welcome Back!
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400">
                            Login to access your account
                        </p>
                    </div>

                    {error && (
                        <div className="bg-red-100 dark:bg-red-900/30 border border-red-400 dark:border-red-800 text-red-700 dark:text-red-400 px-4 py-3 rounded-lg mb-6">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label
                                htmlFor="username"
                                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Username
                            </label>
                            <input
                                type="text"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-500"
                                placeholder="Enter your username"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-500"
                                placeholder="Enter your password (min 6 characters)"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
                        >
                            Login
                        </button>
                    </form>

                    <div className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
                        <p>Strictly for demonstration. Any username with password 6+ characters will work.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;