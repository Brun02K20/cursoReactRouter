import React from "react";
import {Link, NavLink, useParams, useNavigate } from "react-router-dom";
import { blogdata } from "../BlogPost/blogdata.js";

function BlogPost(){

    const {slug} = useParams();

    const blogpost = blogdata.find(publication => publication.slug === slug) // el segundo slug de esta linea es el que recibo en useParams();

    const navigate =  useNavigate();

    const returnToBlog = () => {
        navigate("/blog");
    };

    return(
        <>


            <h3>{blogpost.title}</h3>
            <button onClick={returnToBlog}>Volver a la seccion de blogs</button>
            <p>{blogpost.content}</p>
            <p>{blogpost.author}</p>
        </>
    );
};

export {BlogPost}