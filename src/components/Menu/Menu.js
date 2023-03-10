import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../auth";

// Notas de clase 7: Link debemos importarlo de react-router-dom; la propiedad to es el equivalente al href de las etiquetas a; Link sabe el tipo de router que estamos usando (browser, hash, etc), y añade o no lo correspondiente al tipo de router (ej: el hash hay que añadirle en cada ruta un #/). 

function Menu () {
    const auth = useAuth();

    // if(!auth.user) no se renderizan las rutas privadas

    return(
        <nav>
            <ul>
                {routes.map(route => {
                    // solucion del profe
                    if(route.publicOnly && auth.user) return null


                    if(route.private && !auth.user) return null

                    // mi solucion al reto de que se oculte el login cuando ya el usuario hizo login: 
                    // if (route.to === "/login" && auth.user) return null
                    return (
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
                    );

                })}
            </ul>
        </nav>
    );
};


const routes = [];
routes.push({
    to: "/",
    text: "Home",
    private: false,
});

routes.push({
    to: "/blog",
    text: "Blog",
    private: false,
});

routes.push({
    to: "/profile",
    text: "Profile",
    private: true,
});

routes.push({
    to: "/login",
    text: "LOGIN",
    private: false,
    publicOnly: true,
});

routes.push({
    to: "/logout",
    text: "LOGOUT",
    private: true,
});





export {Menu}