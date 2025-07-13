import BackButton from "../components/BackButton";
import Input from "../components/Input";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../supabaseClient";

function ResetPasswordPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    supabase.auth.onAuthStateChange(async (event, session) => {
      if (event == "PASSWORD_RECOVERY") {
        setLoading(false);
  }}, [])});

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Passwords don't match.");
    } else {
      const {data, error} = await supabase.auth.updateUser({password: password});
      if (error) {
        console.error(error.message);
        setMessage(error.message);
      } else if (data) {
        setMessage("Password updated successfully!");
        setTimeout(() => {navigate("/login")}, 1000);
      }
    }
  }

  if (loading) {
    return <p style ={{fontSize: "20px", fontWeight: 500, color: "#00796b"}}>Loading... If this screen persists, session may have expired.</p>;
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <p style = {{fontSize: "32px", fontWeight: 500, color: "#00796b", paddingBottom: "30px"}}>ad renovandum</p>
        <Input type="password" onChange={setPassword} name="password" placeholder="Password..." value={password}/>
        <Input type="password" onChange={setConfirmPassword} name="confirmPassword" placeholder="Confirm password..." value={confirmPassword}/>
        <button type="submit">Submit</button>
        <p style ={{fontSize: "14px", fontWeight: 400, color: "#00796b"}}>{message}</p>
      </form>
    </>
  )
  
  
}

export default ResetPasswordPage;
