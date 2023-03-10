import React from "react";
import {Link} from "react-router-dom";
import {  AuthProvider, useAuth } from "../../auth";

// nota, manejo de inputs en react:

// const [username, setUserName] = React.useState("");
// <form>
//     <label>UserName...</label>
//     <input 
//         value={username} 
//         onChange={ (evento) => {setUserName(evento.target.value)}} 
//     />
// </form>


function LoginPage(){
    const auth = useAuth();


    const [username, setUserName] = React.useState("");

    const login = (evento) => {
        // el .preventDefault sirve para prevenir recargas innecesarias de la pagina
        evento.preventDefault();
        auth.login({username})
    };

    return(
        <>
            <h1>LOGIN PAGE</h1>

            <form onSubmit={login}>
                <label>UserName...</label>
                <input 
                    value={username} 
                    onChange={ (evento) => {setUserName(evento.target.value)}} 
                />
                <button type="submit">Log In</button>
            </form>
        </>
    );
};

export {LoginPage};