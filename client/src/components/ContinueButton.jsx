import { useNavigate } from "react-router-dom";

function ContinueButton() {
  const navigate = useNavigate();

  const handleGuestContinue = () => {
    navigate("/flashcards"); // go to main flashcard page
  };

  return <button onClick={handleGuestContinue}>Continue as Guest</button>;
}

export default ContinueButton;