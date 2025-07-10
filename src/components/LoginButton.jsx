import { useNavigate } from "react-router";

function LoginButton() {
    const navigate = useNavigate();

    function handleLogin() {
        navigate("/login");
    }

    return (
        <button onClick={handleLogin}>Login</button>
    )
}

export default LoginButton;