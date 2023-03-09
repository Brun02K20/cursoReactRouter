import React from "react";
import { Link, Outlet } from "react-router-dom";
import { blogdata } from "../BlogPost/blogdata.js";

function BlogPage() {
    return (
        <>
            <h1>Blog page</h1>
            {/* el outlet se renderiza en funcion de donde lo coloquemos como cualquier componente normal */}
            <Outlet />

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