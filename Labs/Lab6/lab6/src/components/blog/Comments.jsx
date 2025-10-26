function Comments() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="bg-white rounded-lg shadow-md p-8 max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                    Comments
                </h2>
                
                <textarea 
                    placeholder="Add a comment"
                    className="w-full border border-gray-300 rounded-lg p-4 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none h-32"
                ></textarea>
                
                <button 
                    type="submit" 
                    className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-8 py-3 rounded-full transition-colors shadow-md"
                >
                    Submit
                </button>
                
                <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
                    Existing Comments:
                </h3>
                
                <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                        <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                        Comment 1
                    </li>
                    <li className="flex items-center">
                        <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                        Comment 2
                    </li>
                    <li className="flex items-center">
                        <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                        Comment 3
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Comments;