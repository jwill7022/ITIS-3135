function Content({title, body, author, date}) {
    return (
        <main className="container mx-auto px-4 py-8">
            <div className="bg-white rounded-lg shadow-md p-8 max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">
                    {title}
                </h1>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    {body}
                </p>
                <div className="space-y-2 text-gray-700">
                    <p>
                        <strong className="font-semibold">Author:</strong>{" "}
                        <span className="text-gray-600">{author}</span>
                    </p>
                    <p>
                        <strong className="font-semibold">Date:</strong>{" "}
                        <span className="text-gray-600">{date}</span>
                    </p>
                </div>
            </div>
        </main>
    );
}

export default Content;