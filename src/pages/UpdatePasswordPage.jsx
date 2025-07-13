import supabase from "../supabaseClient";
import Input from "../components/Input";
import { useState } from "react";
import { useNavigate } from "react-router";

function ForgotPasswordPage() {
  const navigate = useNavigate();

  const redirect = () => {setTimeout(() => {
        navigate("/")
      }, 2000)}

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("Loading...")

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: "http://carta.run/reset-password"
    });

    if (error) {
      setMessage(`Reset error: ${error.message}`);
      console.error("Reset error:", error.message);
      redirect();
    } else {
      setMessage(`Reset link sent to: ${email}`);
      console.log("Reset link sent to:", email);
      redirect();
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <p style = {{fontSize: "32px", fontWeight: 500, color: "#00796b", paddingBottom: "30px"}}>mutare tesseram</p>
        <Input
          placeholder="Email..."
          name="email"
          onChange={setEmail}
          type="email"
          value={email}
        />
        <button type="submit">Submit</button>
        <p style={{ fontWeight: 400, color: "#00796b"}}>{message}</p>
      </form>
    </>
  );
}

export default ForgotPasswordPage;
