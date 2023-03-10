// componente auth.js, lo declare en minusculas porque va a haber varios exports en este archivo

import React, { useContext } from "react";
import { useNavigate, Navigate } from "react-router-dom";

const adminList = ["Irisval", "RetaxMaster", "Freddier"];


const AuthContext = React.createContext();

// en vez de usar AuthCOntext.Provider y AuthContext.Consumer, crearemos un proveedor personalizado y usaremos un custom hook useAuth para evitarnos la metodologia del consumidor


function AuthProvider({children}) {
    const navigate = useNavigate()

    const [user, setUser] = React.useState(null);

    const login = ({username}) => {
        const isAdmin = adminList.find(admin => admin === username)

        setUser({username, isAdmin});
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

// si tengo muchas rutas privadas que proteger puedo hacer algo como esto
function AuthRoute(props) {
    const auth = useAuth();

    // asi se protege a una unica ruta privada
    if (!auth.user) {
        return <Navigate to="/login" />
    }

    return props.children;
}



export {AuthProvider, useAuth, AuthRoute };