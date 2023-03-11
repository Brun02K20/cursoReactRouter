import React from "react";
import {Link, NavLink, useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../../auth.js";
import { blogdata } from "../BlogPost/blogdata.js";

function BlogPost(){

    const {slug} = useParams();

    const blogpost = blogdata.find(publication => publication.slug === slug) // el segundo slug de esta linea es el que recibo en useParams();

    const auth = useAuth();

    const navigate =  useNavigate();

    // const canDelete = auth.user?.isAdmin || blogpost.author === auth.user?.username;
    const canDelete = auth.user?.rol.delete
    const canEdit = auth.user?.rol.edit

    const returnToBlog = () => {
        navigate("/blog");
    };

    return(
        <>
            <h3>{blogpost.title}</h3>
            <button onClick={returnToBlog}>Volver a la seccion de blogs</button>
            <p>{blogpost.content}</p>
            <p>{blogpost.author}</p>

            {/* Si hay un auth.user y tiene su .isAdmin en true:  */}
            {canDelete && (
                <button>Eliminar blogpost</button>
            )}

            {canEdit && (
                <button>Editar blogpost</button>
            )}
        </>
    );
};

export {BlogPost}