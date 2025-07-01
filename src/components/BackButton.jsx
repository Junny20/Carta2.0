import { useNavigate } from "react-router";

function BackButton() {
  const navigate = useNavigate();

  function handleGoBack() {
    navigate("/");
  }

  return (
    <button onClick={handleGoBack}>Back to menu</button>
  )
}
  
export default BackButton;
