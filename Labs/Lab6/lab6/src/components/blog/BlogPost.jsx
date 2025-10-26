import Content from "./Content";

function BlogPost() {

    const postContent = {
    title: "My First Post",
    body: "This is the content of my first post.",
    author: "John Doe",
    date : "2026-01-01"
  };
    
 
    return (
        <div>
            <Content 
            title={postContent.title}
            body={postContent.body}
            author={postContent.author}
            date={postContent.date}/>
        </div>
    
    );
}

export default BlogPost;