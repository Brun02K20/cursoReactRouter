import React from "react";
import { Link } from "react-router-dom";
import { blogdata } from "../BlogPost/blogdata.js";

function BlogPage() {
    return (
        <>
            <h1>Blog page</h1>

            <ul>
                {blogdata.map(publication => (
                    <BlogLink key={publication.slug} post={publication}></BlogLink>
                ))}
            </ul>
        </>


    );
};


function BlogLink ({ post }) {
    return (
        <li>
            <Link to={`/blog/${post.slug}`}>
                {post.title}
            </Link>
        </li>
    )
};

export {BlogPage}