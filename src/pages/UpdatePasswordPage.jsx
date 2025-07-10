import supabase from "../supabaseClient";
import Input from "../components/Input";
import { useState } from "react";

function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("Loading...")

    const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
      //change on deploy
      redirectTo: "http://localhost:5173/reset-password"
    });

    if (error) {
      setMessage(`Reset error: ${error.message}`);
      console.error("Reset error:", error.message);
    } else {
      console.log(data);
      setMessage(`Reset link sent to: ${email}`);
      console.log("Reset link sent to:", email);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input
          placeholder="Email..."
          name="email"
          onChange={setEmail}
          type="email"
          value={email}
        />
        <button type="submit">Submit</button>
        <p>{message}</p>
      </form>
    </>
  );
}

export default ForgotPasswordPage;
