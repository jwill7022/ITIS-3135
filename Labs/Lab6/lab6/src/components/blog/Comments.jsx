function Comments() {
    return (
        <div>
            <h2>Comments</h2>
            <textarea placeholder="Add a comment..."></textarea>
            <button type="submit" className="bg-sky-500 px-5 py-1 rounded-2xl text-white hover:bg-sky-700 transition">Submit</button>
            <h3>Existing Comments</h3>
            <ul>
                <li>Comment 1</li>
                <li>Comment 2</li>
                <li>Comment 3</li>
            </ul>

        </div>
    );
}

export default Comments;