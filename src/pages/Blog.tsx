import React, { useState, useEffect } from 'react';
import {Post} from "../types/Post";

import '../types/index';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Blog: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        fetch('http://localhost:8080/posts')
            .then((res) => res.json())
            .then((data: Post []) => {
                setPosts(data);
            });
    }, []);
    return <div className={"container mt-4"}>
        <h2> BLOG POSTS </h2>
        {posts.map((post) => <div key={post.id} className={"card my-3 shadow-sm"}>
                <div className={"card-body"}>
                    <h5>{post.title}</h5>
                    <p className="card-text">{post.body}</p>
            </div>
        </div>
        )}
    </div>
}
export default Blog;
