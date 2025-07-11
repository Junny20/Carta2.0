import supabase from "../supabaseClient";
import BackButton from "../components/BackButton";
import Button from "../components/GeneralButton";
import Input from "../components/Input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [showResetPassword, setShowResetPassword] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("Loading...")
        console.log(email, password);

        const { data, error } = await supabase.auth.signInWithPassword({email, password});

        if (error) {
            setMessage(error.message);
            console.log(error.message);
            if (error.message === "Invalid login credentials") {
                setShowResetPassword(true);
            }
        } else if (data?.user) {
            console.log(data);
            setMessage("Successfully logged in!");
            navigate("/");
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <Input type="email" onChange={setEmail} name="email" placeholder="Email..." value={email}/>
                <Input type="password" onChange={setPassword} name="password" placeholder="Password..." value={password}/>
                <button type="submit">Submit</button>
            </form>
            <p>{message}</p>
            <a href="/signup">New user? Sign up!</a>
            {showResetPassword && <a href="/update-password">Forgot password?</a>}    
            <BackButton/>
        </>
    )
}

export default LoginPage;