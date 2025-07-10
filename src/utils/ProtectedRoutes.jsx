import { Outlet, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import supabase from "../supabaseClient";

function ProtectedRoutes() {
    const [id, setId] = useState(null);
    const [checking, setChecking] = useState(true);
    const [message, setMessage] = useState("Loading...")

    useEffect(() => {
        const getUserDetails = async () => {
            const { data, error } = await supabase.auth.getUser();

            if (error) {
                console.error(error.message);
                setMessage(error.message);
                setChecking(false);
                return
            }

            setId(data?.user?.id || null);
            setChecking(false);
        }

        getUserDetails();
    }, [])

    if (checking) {
        return(
            <p>{message}</p>
        )
    }

    return (
        id ? <Outlet /> : <Navigate to="/login"/>
    )
}

export default ProtectedRoutes;