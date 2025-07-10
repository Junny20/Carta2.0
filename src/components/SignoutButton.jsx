import supabase from "../supabaseClient";
import { useNavigate } from "react-router";

function SignoutButton() {
    const navigate = useNavigate();

    const handleClick = async () => {
        const { error } = await supabase.auth.signOut();

        if (error) {
            console.error(error.message);
        } else {
            navigate("/");
        }
    }

    return (
        <button onClick={handleClick}>Sign Out</button>
    )
}

export default SignoutButton;