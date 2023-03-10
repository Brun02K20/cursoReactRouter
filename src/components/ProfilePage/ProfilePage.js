import React from "react";
import {  AuthProvider, useAuth } from "../../auth";

function ProfilePage() {
    const auth = useAuth();

    return (
        <>
            <h2>Profile</h2>
            <p> Welcome, {auth.user.username} </p>
        </>
    );
};

export {ProfilePage}