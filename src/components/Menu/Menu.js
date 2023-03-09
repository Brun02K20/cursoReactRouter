import React from "react";
import { Link, NavLink } from "react-router-dom";

// Notas de clase 7: Link debemos importarlo de react-router-dom; la propiedad to es el equivalente al href de las etiquetas a; Link sabe el tipo de router que estamos usando (browser, hash, etc), y añade o no lo correspondiente al tipo de router (ej: el hash hay que añadirle en cada ruta un #/). 

function Menu () {
    return(
        <nav>
            <ul>
                {/* <li>
                    <Link to="/">Home</Link>
                </li>

                <li>
                    <Link to="/blog">Blog</Link>
                </li>

                <li>
                    <Link to="/profile">Profile</Link>
                </li> */}


                {/* <li>
                    <NavLink to="/" end>Home</NavLink>
                </li>

                <li>
                    <NavLink to="/blog" end>Blog</NavLink>
                </li>

                <li>
                    <NavLink to="/profile" end>Profile</NavLink>
                </li> */}

                {routes.map(route => (
                    <li>
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

// para no repetir codigo tediosamente
const routes = [];
routes.push({
    to: "/",
    text: "Home"
});

routes.push({
    to: "/blog",
    text: "Blog"
});

routes.push({
    to: "/profile",
    text: "Profile"
});

console.log(routes);

export {Menu}