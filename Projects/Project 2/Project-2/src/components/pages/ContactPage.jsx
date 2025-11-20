import React, { useState } from 'react';

// Contact form page for visitors to send messages
function ContactPage() {
    // State for form fields
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    // Update form data on input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    // Handle form submission (currently displays alert - integrate backend as needed)
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Form submitted (but not sent to backend):\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
        // TODO: In a real app, you'd send this data to an API
        setFormData({ name: '', email: '', message: '' }); // Clear form
    };

    return (
        <main className="container mx-auto px-4 py-12 min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 max-w-xl mx-auto transition-colors duration-500">
                <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">
                    Contact Us
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows="5"
                            className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-colors duration-500"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors shadow-md"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </main>
    );
}

export default ContactPage;