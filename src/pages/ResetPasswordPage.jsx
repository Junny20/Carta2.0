import BackButton from "../components/BackButton";
import Input from "../components/Input";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../supabaseClient";

function ResetPasswordPage() {
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.onAuthStateChange(async (event, session) => {
      if (event == "PASSWORD_RECOVERY") {
        const newPassword = prompt(
          "What would you like your new password to be?"
        );
        const { data, error } = await supabase.auth.updateUser({
          password: newPassword,
        });
        if (data) {alert("Password updated successfully!");
            setTimeout(() => {
                navigate("/login");
            }, 2000)
        };
        if (error) alert("There was an error updating your password.");
      }
    });
  }, []);

  return <p>Resetting password...</p>;
  
}

export default ResetPasswordPage;
