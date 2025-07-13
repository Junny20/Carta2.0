import BackButton from "../components/BackButton";
import Input from "../components/Input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../supabaseClient";
import "./css/SignupPage.css";

function Signup() {
    const navigate = useNavigate(); 

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("Loading..."); 

        if (password !== confirmPassword) {
            setMessage("Passwords don't match.")
            setPassword("");
            setConfirmPassword("");
        } else {
            const {data, error} = await supabase.auth.signUp({email, password});

            if (error) {
                console.error(error.message);
                setMessage(error.message);

            } else if (data?.user.id) {
                const date = new Date()
                const {error} = await supabase.from("users").insert({
                    id: data.user.id,
                    username: username,
                    email: email,
                    flashcards_read: 0,
                    flashcards_tested: 0,
                    created_at: date
                })

                if (error) {
                    console.error(error.message);
                    setMessage(error.message);
                } else {
                    setMessage("Signed up successfully! You should get a verification email. Once verified, you can login.")
                    setTimeout(() => {
                        navigate("/");
                    }, 5000);
                }
            }
        }
    }

    return (
        <div className="signup-container">
            <h1>Salve!</h1>
            <form onSubmit={handleSubmit}>
                <Input type="text" onChange={setUsername} name="username" placeholder="Username... " value={username}/>
                <Input type="email" onChange={setEmail} name="email" placeholder="Email..." value={email}/>
                <Input type="password" onChange={setPassword} name="password" placeholder="Password..." value={password}/>
                <Input type="password" onChange={setConfirmPassword} name="confirmPassword" placeholder="Confirm password..." value={confirmPassword}/>
                <button type="submit">Submit</button>
                <p id="message">{message}</p>
            </form>
            <BackButton />
        </div>
    )
}

export default Signup;