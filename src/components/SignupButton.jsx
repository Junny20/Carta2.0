import { useNavigate } from "react-router";

function SignupButton() {
    const navigate = useNavigate();

    function handleSignUp() {
        navigate("/signup");
    }

    return (
        <button onClick={handleSignUp}>Sign Up</button>
    )
}

export default SignupButton;