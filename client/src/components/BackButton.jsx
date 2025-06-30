import { useNavigate } from "react-router";

function BackButton() {
  const navigate = useNavigate();

  function handleGoBack() {
    navigate("/");
  }

  return (
    <button onClick={handleGoBack}>Go back</button>
  )
}
  

export default BackButton;
