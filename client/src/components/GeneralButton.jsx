import { useNavigate } from "react-router";

function Button(props) {
    const navigate = useNavigate();

    function handleClick() {
        navigate(props.path);
    }

    return (
        <button onClick={handleClick}>{props.buttonText}</button>
    )
}

export default Button;