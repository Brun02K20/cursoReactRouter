import React from "react";
import { Link, NavLink } from "react-router-dom";

// Notas de clase 7: Link debemos importarlo de react-router-dom; la propiedad to es el equivalente al href de las etiquetas a; Link sabe el tipo de router que estamos usando (browser, hash, etc), y añade o no lo correspondiente al tipo de router (ej: el hash hay que añadirle en cada ruta un #/). 

function Menu () {
    return(
        <nav>
            <ul>
                {routes.map(route => (
                    <li key={route.to}>
                        <NavLink 
                            to={route.to}
                            end
                            style={ ({ isActive }) => ({
                                color: isActive ? 'green' : 'red'
                            })}
                        >
                            {route.text}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};


const routes = [];
routes.push({
    to: "/",
    text: "Home",
});

routes.push({
    to: "/blog",
    text: "Blog"
});

routes.push({
    to: "/profile",
    text: "Profile"
});

routes.push({
    to: "/login",
    text: "LOGIN"
});

routes.push({
    to: "/logout",
    text: "LOGOUT"
});





export {Menu}