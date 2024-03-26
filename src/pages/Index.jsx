import postsData from "../post.json"
import Article from "../components/Article"
import { useState } from "react"
import Search from "../components/Search"

function Homepage() {
    const [posts, setPosts] = useState(postsData);

    const onSearchChange= (value) => {
        const filteredPosts = postsData.filter((item) => 
        item.tittle.includes(value)
        );
        setPosts(filteredPosts)
    }
    return (
        <>
            <h1>blog simple</h1>
            <Search onSearchChange={onSearchChange} />
            {posts.map((props, index) => (
                <Article {...props} key={index}/>
            )
            )}
            </>
    )
}

export default Homepage