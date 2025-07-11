import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import supabase from "../supabaseClient";

function Verify() {
  const [userDetails, setUserDetails] = useState(null);
  const [loggedin, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      const { data, error } = await supabase.auth.getUser();

      if (error) {
        console.error(error.message);
        return;
      } else if (data) {
        setLoggedIn(true);
        const id = data.user?.id;
        const { data: userData, error: fetchError } = await supabase
          .from("users")
          .select()
          .eq("id", id);

        if (fetchError) {
          console.error(fetchError.message);
          return;
        } else {
          const details = userData[0];
          console.log(details);
          setUserDetails({ username: details.username, level: details.level });
        }
      }
    };

    getUser();
  }, []);

  if (!loggedin || !userDetails) return null;

  return (
    <p
      id="details"
      onClick={() => navigate("/profile")}
    >
      {`${userDetails.username}: Level ${userDetails.level}`}
    </p>
  );
}

export default Verify;
