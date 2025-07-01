import { useNavigate } from "react-router-dom";

function ContinueButton() {
  const navigate = useNavigate();

  const handleGuestContinue = () => {
    navigate("/options"); 
  };

  return <button onClick={handleGuestContinue}>Continue</button>;
}

export default ContinueButton;