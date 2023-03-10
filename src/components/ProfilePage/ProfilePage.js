import React from "react";
import { useAuth, AuthRoute } from "../../auth";

function ProfilePage() {
    const auth = useAuth();
    return (
        <AuthRoute>
            <h2>Profile</h2>
            <p> Welcome, {auth.user?.username} </p>
        </AuthRoute>
    );
};

// auth.user?.username equivalente a decir <-- Solucion 1 para renderizar AuthRoute
// auth.user ? auth.user.username : null

// Solucion 2 en el app.js
export {ProfilePage}