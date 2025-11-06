import { useTheme } from "../ThemeContext";


function Content({title, body, author}) {
    const { theme } = useTheme(); // Get the current theme

    return (
        <main className="container mx-auto px-4 py-8">
            <div className={`bg-white rounded-lg shadow-md p-8 max-w-4xl mx-auto transition-colors duration-500 
                          ${theme === 'dark' ? 'dark:bg-gray-800' : 'bg-white'}`}>
                <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4 transition-colors duration-500">
                    {title}
                </h1>
                <p className="text-gray-600 dark:text-gray-400 text-lg mb-6 leading-relaxed transition-colors duration-500">
                    {body}
                </p>
                <div className="space-y-2 text-gray-700 dark:text-gray-300 transition-colors duration-500">
                    <p>
                        <strong className="font-semibold">Author:</strong>{" "}
                        <span className="text-gray-600 dark:text-gray-400">{author}</span>
                    </p>
                </div>
            </div>
        </main>
    );
}

export default Content;