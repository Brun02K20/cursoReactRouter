import React from "react";
import {Link} from "react-router-dom";
import {  AuthProvider, useAuth } from "../../auth";

function LogoutPage(){
    const auth = useAuth();

    const logout = (evento) => {
        // el .preventDefault sirve para prevenir recargas innecesarias de la pagina
        evento.preventDefault();
        auth.logout();
    };

    return(
        <>
            <h1>LOGOUT PAGE</h1>

            <form onSubmit={logout}>
                <label>Do you want exit?</label>
                <button type="submit">Log Out</button>
            </form>
        </>
    );
};

export {LogoutPage};