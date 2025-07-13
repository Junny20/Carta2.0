import supabase from "../supabaseClient";

function SignoutButton() {
    const handleClick = async () => {
        const { error } = await supabase.auth.signOut();

        window.location.href = "/"
    }

    return (
        <button onClick={handleClick}>Sign Out</button>
    )
}

export default SignoutButton;