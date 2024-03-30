import { useState, useEffect } from "react"

function Blog() {
    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response) => response.json())
        .then((json) => setPosts(json))
    }, [])

    return (
        <>
        <h2>My blog post</h2>
        {posts.map((item, index) => (
            <div key={index}>{item.title}</div>
        ))}
        </>
    )
}

export default Blog