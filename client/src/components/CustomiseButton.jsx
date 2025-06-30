import { useNavigate } from "react-router";

function CustomiseButton() {
    const navigate = useNavigate();

    function handleCustomise() {
        navigate("/customise");
    }

    return (
        <button onClick={handleCustomise}>Customise</button>
    )
}

export default CustomiseButton;