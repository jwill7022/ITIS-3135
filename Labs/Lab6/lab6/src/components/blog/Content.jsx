function Content({title, body, author, date}) {
    return (
        <main>
            <h1>{title}</h1>
            <p>{body}</p>
            <p>
                <strong>Author:</strong> {author}
            </p>
            <p>
                <strong>Date:</strong> {date}
            </p>
        </main>
    );
}

export default Content;