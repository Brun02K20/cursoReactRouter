// componente auth.js, lo declare en minusculas porque va a haber varios exports en este archivo

import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = React.createContext();

// en vez de usar AuthCOntext.Provider y AuthContext.Consumer, crearemos un proveedor personalizado y usaremos un custom hook useAuth para evitarnos la metodologia del consumidor


function AuthProvider({children}) {
    const navigate = useNavigate()

    const [user, setUser] = React.useState(null);

    const login = ({username}) => {
        setUser({username});
        navigate("/profile");
    };

    const logout = () => {
        setUser(null);
        navigate("/");
    };

    const auth = {
        user,
        login,
        logout,
    };

    return (
        <AuthContext.Provider value={
            auth
        }>
            {children}
        </AuthContext.Provider>
    );
};


function useAuth() {
    const auth = useContext(AuthContext);
    return auth;
};



export {AuthProvider, useAuth };